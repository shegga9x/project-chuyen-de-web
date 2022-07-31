package backend.backend.services.subService;

import backend.backend.helpers.advice.OAuth2AuthenticationProcessingException;
import backend.backend.helpers.payload.request.AccountGoogleRequest;
import backend.backend.persitence.entities.*;
import backend.backend.persitence.model.enumModel.AuthProvider;
import backend.backend.persitence.model.enumModel.RoleEnum;
import backend.backend.persitence.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
public class GoogleOAuth2UserService {

    @Autowired
    private AccountRepository accountRepository;

    public Account loadUser(AccountGoogleRequest accountGoogleRequest) throws OAuth2AuthenticationException {
        try {
            return processOAuth2User(accountGoogleRequest);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            // Throwing an instance of AuthenticationException will trigger the
            // OAuth2AuthenticationFailureHandler
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private Account processOAuth2User(AccountGoogleRequest accountGoogleRequest) {
        if (accountGoogleRequest.getEmail() == null || accountGoogleRequest.getEmail().equals("")) {
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        Optional<Account> userOptional = accountRepository.findByEmail(accountGoogleRequest.getEmail());
        Account user;
        if (userOptional.isPresent()) {
            user = userOptional.get();
            if (!user.getProvider()
                    .equals(AuthProvider.valueOf(accountGoogleRequest.getProvider()))) {
                throw new OAuth2AuthenticationProcessingException("Looks like you're signed up with " +
                        user.getProvider() + " account. Please use your " + user.getProvider() +
                        " account to login.");
            }
            user = updateExistingUser(user, accountGoogleRequest);
        } else {
            user = registerNewUser(accountGoogleRequest);
        }

        return user;
    }

    private Account registerNewUser(AccountGoogleRequest accountGoogleRequest) {
        Account user = new Account();
        user.setPasswordHash("");
        user.setProvider(AuthProvider.valueOf(accountGoogleRequest.getProvider()));
        user.setProviderId(accountGoogleRequest.getProviderId());
        user.setEmail(accountGoogleRequest.getEmail());
        user.setCreated(new Date());
        user.setAcceptTerms(true);
        user.setLastExpires(new Date());
        boolean isFirstAccount = accountRepository.findAll().size() == 0;
        RoleEnum roleEnum = (isFirstAccount ? RoleEnum.Admin : RoleEnum.User);
        List<Role> roles = new ArrayList<>(List.of(new Role(roleEnum)));
        user.setListOfRole(roles);
        user.setVerificationToken(new VerificationToken());
        user.setResetToken(new ResetToken());
        return accountRepository.save(user);
    }

    private Account updateExistingUser(Account existingUser, AccountGoogleRequest accountGoogleRequest) {
        return accountRepository.save(existingUser);
    }

 
}
