package backend.backend.services.mainService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import backend.backend.helpers.payload.request.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.response.AccountResponse;
import backend.backend.helpers.payload.response.AuthenticateResponse;
import backend.backend.helpers.utils.JwtUtils;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.helpers.utils.TokenUtils;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.RefreshToken;
import backend.backend.persitence.entities.ResetToken;
import backend.backend.persitence.entities.Role;
import backend.backend.persitence.entities.VerificationToken;
import backend.backend.persitence.model.enumModel.AuthProvider;
import backend.backend.persitence.model.enumModel.RoleEnum;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.RefreshTokenRepository;
import backend.backend.persitence.repository.ResetTokenRepository;
import backend.backend.persitence.repository.VerificationTokenRepository;
import backend.backend.services.subService.EmailService;

@Service
public class AuthService {
    @Value("${bezkoder.app.jwtRefreshExpirationMs}")
    private int jwtRefreshExpirationMs;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    RefreshTokenRepository refreshTokenRepository;
    @Autowired
    VerificationTokenRepository verificationTokenRepository;
    @Autowired
    ResetTokenRepository resetTokenRepository;

    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    EmailService emailService;
    @Autowired
    TokenUtils tokenUtils;

    public void register(RegisterRequest model, String origin) {
        if (accountRepository.findByEmail(model.getEmail()).isPresent()) {
            emailService.sendAlreadyRegisteredEmail(model.getEmail(), origin);
            throw new CustomException("This Email already be taken !!!");
        }
        Account account = new Account();
        SubUtils.mapperObject(model, account);
        // first registered account is an admin
        account.setCreated(new Date());
        account.setPasswordHash(encoder.encode(model.getPassword()));
        account.setAcceptTerms(true);
        account.setLastExpires(new Date());
        account.setProvider(AuthProvider.local);
        account.setLastExpires(new Date());
        boolean isFirstAccount = accountRepository.findAll().size() == 0;
        RoleEnum roleEnum = (isFirstAccount ? RoleEnum.Admin : RoleEnum.Student);
        List<Role> roles = new ArrayList<>(List.of(new Role(roleEnum)));
        VerificationToken verificationToken = new VerificationToken(tokenUtils.generateVerificationToken());
        account.setListOfRole(roles);
        account.setVerificationToken(verificationToken);
        account.setResetToken(new ResetToken());
        account = accountRepository.save(account);
        emailService.sendVerificationEmail(account, origin, verificationToken);
    }

    public void verifyEmail(String token) {
        VerificationToken verificationToken = null;
        try {
            verificationToken = verificationTokenRepository.findByVerificationTokenContent(token).get();
        } catch (Exception e) {
            throw new CustomException("Can't find token !!!");
        }
        verificationToken.setVerified(new Date());
        verificationToken.setVerificationTokenContent(null);
        verificationTokenRepository.save(verificationToken);
    }

    public AuthenticateResponse authenticate(AuthenticateRequest model, String ipAddress) {
        Account account = accountRepository.findByEmail(model.email).get();
        if (account == null || account.getVerificationToken() == null
                || !encoder.matches(model.password, account.getPasswordHash())) {
            throw new CustomException("Wrong password or Not Active yet !!!");
        } else {
            account.setLastExpires(new Date());
            // delete OldRefreshTokens
            RefreshToken refreshToken = jwtUtils.generateRefreshToken(ipAddress, account.getIdAccount());
            refreshTokenRepository.save(refreshToken);
            tokenUtils.removeOldRefreshTokens(account.getIdAccount());

            List<String> roles = new ArrayList<>();
            for (Role role : account.getListOfRole()) {
                roles.add(role.getRoleName().toString());
            }
            // init respone
            String jwtToken = jwtUtils.generateJwtToken(account);
            AuthenticateResponse response = new AuthenticateResponse();
            response.setRole(roles);
            response.jwtToken = jwtToken;
            response.refreshToken = refreshToken.getToken();
            response = (AuthenticateResponse) SubUtils.mapperObject(account, response);
            return response;
        }
    }

    public AuthenticateResponse authenticateWithJWT(String token, String ipAddress) {
        if (jwtUtils.validateJwtToken(token)) {
            String email = jwtUtils.getAllClaimsFromToken(token).get("email").toString();
            Account account = accountRepository.findByEmail(email).get();
            account.setLastExpires(new Date());

            RefreshToken refreshToken = jwtUtils.generateRefreshToken(ipAddress, account.getIdAccount());
            refreshTokenRepository.save(refreshToken);
            tokenUtils.removeOldRefreshTokens(account.getIdAccount());
            List<String> roles = new ArrayList<>();
            for (Role role : account.getListOfRole()) {
                roles.add(role.getRoleName().toString());
            }
            // init respone
            String jwtToken = jwtUtils.generateJwtToken(account);
            AuthenticateResponse response = new AuthenticateResponse();
            response.setRole(roles);
            response.jwtToken = jwtToken;
            response.refreshToken = refreshToken.getToken();
            response = (AuthenticateResponse) SubUtils.mapperObject(account, response);
            return response;
        }
       throw new CustomException("Jwt Invalid !!!");
    }

    public AuthenticateResponse authenticateWithJWT(AccountGoogleRequest accountGoogleRequest, String ipAddress) {
        String email = accountGoogleRequest.getEmail();
        Account account = accountRepository.findByEmail(email).get();
        account.setLastExpires(new Date());

        RefreshToken refreshToken = jwtUtils.generateRefreshToken(ipAddress, account.getIdAccount());
        refreshTokenRepository.save(refreshToken);
        tokenUtils.removeOldRefreshTokens(account.getIdAccount());
        List<String> roles = new ArrayList<>();
        for (Role role : account.getListOfRole()) {
            roles.add(role.getRoleName().toString());
        }
        // init respone
        String jwtToken = jwtUtils.generateJwtToken(account);
        AuthenticateResponse response = new AuthenticateResponse();
        response.setRole(roles);
        response.jwtToken = jwtToken;
        response.refreshToken = refreshToken.getToken();
        response = (AuthenticateResponse) SubUtils.mapperObject(account, response);
        return response;
    }

    public AuthenticateResponse refreshToken(HttpServletResponse servletResponse, String token, String ipAddress) {
        RefreshToken refreshToken = null;
        try {
            refreshToken = refreshTokenRepository.findByToken(token).get();
        } catch (Exception e) {
            throw new CustomException("Can't find token !!!");
        }

        Account account = refreshToken.getAccount();
        if (refreshToken.IsRevoked() && refreshToken != null) {
            refreshToken = tokenUtils.revokeDescendantRefreshTokens(refreshToken, account, ipAddress,
                    "Attempted reuse of revoked ancestor token: " + token);
            refreshTokenRepository.save(refreshToken);
        }
        if (!refreshToken.IsActive()) {
            throw new CustomException("Token is UnActive !!!");

        }
        RefreshToken newRefreshToken = tokenUtils.rotateRefreshToken(refreshToken, ipAddress);
        refreshToken = tokenUtils.revokeRefreshToken(refreshToken, ipAddress, "Replaced by new token",
                newRefreshToken.getToken());
        tokenUtils.removeOldRefreshTokens(account.getIdAccount());

        account.addToListOfRefreshToken(newRefreshToken);
        account.addToListOfRefreshToken(refreshToken);
        account.setLastExpires(new Date());
        String jwtToken = jwtUtils.generateJwtToken(account);
        List<String> roles = new ArrayList<>();
        for (Role role : account.getListOfRole()) {
            roles.add(role.getRoleName().toString());
        }
        AuthenticateResponse response = new AuthenticateResponse();
        response.role = roles;
        response.jwtToken = jwtToken;
        response.refreshToken = newRefreshToken.getToken();
        response = (AuthenticateResponse) SubUtils.mapperObject(account, response);
        accountRepository.save(account);
        return response;
    }

    public void revokeToken(String token, String ipAddress) {
        RefreshToken refreshToken = refreshTokenRepository.findByToken(token).get();
        if (!refreshToken.IsActive()) {
            throw new CustomException("Token is UnActive");
        }
        // revoke token and save
        refreshToken = tokenUtils.revokeRefreshToken(refreshToken, ipAddress, "Revoked without replacement", null);
        refreshTokenRepository.save(refreshToken);

    }

    public void forgotPassword(ForgotPasswordRequest model, String origin) {
        Account account = null;
        // always return ok response to prevent email enumeration
        try {
            account = accountRepository.findByEmail(model.getEmail()).get();
        } catch (Exception e) {
            throw new CustomException("Can't find Email !!!");
        }
        ResetToken resetToken = account.getResetToken();
        // create reset token that expires after 1 day
        resetToken.setResetTokenContent(tokenUtils.generateResetToken());
        resetToken.setResetTokenExpires(new Date(new Date().getTime() + jwtRefreshExpirationMs));
        resetTokenRepository.save(resetToken);
        // send email
        emailService.sendPasswordResetEmail(account, origin);
    }

    public void validateResetToken(ValidateResetTokenRequest model) {
        tokenUtils.getAccountByResetToken(model.getToken());
    }

    public void resetPassword(ResetPasswordRequest model) {
        Account account = tokenUtils.getAccountByResetToken(model.getToken());
        account.setResetToken(new ResetToken(account.getIdAccount(), new Date(), null, null));
        account.setPasswordHash(encoder.encode(model.getPassword()));
        accountRepository.save(account);
    }

    public List<AccountResponse> getAll() {
        List<AccountResponse> listRespone = new ArrayList<>();
        for (Account account : accountRepository.findAll()) {
            AccountResponse objectToReturn = new AccountResponse();
            objectToReturn = (AccountResponse) SubUtils.mapperObject(account, objectToReturn);
            listRespone.add(objectToReturn);
        }
        return listRespone;
    }

//    private Account registerNewUser(){
//
//    }

}