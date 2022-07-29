package backend.backend.services.subService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.stereotype.Service;

import backend.backend.helpers.advice.OAuth2AuthenticationProcessingException;
import backend.backend.helpers.payload.request.AccountFacebookRequest;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.ResetToken;
import backend.backend.persitence.entities.Role;
import backend.backend.persitence.entities.VerificationToken;
import backend.backend.persitence.model.enumModel.AuthProvider;
import backend.backend.persitence.model.enumModel.RoleEnum;
import backend.backend.persitence.repository.AccountRepository;

@Service
public class FacebookOAuth2UserService {
    @Autowired
    private AccountRepository accountRepository;

    public Account loadUser(AccountFacebookRequest accountFacebookRequest) throws OAuth2AuthenticationException {
        try {
            return processOAuth2User(accountFacebookRequest);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            // Throwing an instance of AuthenticationException will trigger the
            // OAuth2AuthenticationFailureHandler
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private Account processOAuth2User(AccountFacebookRequest accountFacebookRequest) {
        if (accountFacebookRequest.getEmail() == null || accountFacebookRequest.getEmail().equals("")) {
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        Optional<Account> userOptional = accountRepository.findByEmail(accountFacebookRequest.getEmail());
        Account user;
        if (userOptional.isPresent()) {
            user = userOptional.get();
            if (!user.getProvider()
                    .equals(AuthProvider.valueOf(accountFacebookRequest.getProvider()))) {
                throw new OAuth2AuthenticationProcessingException("Looks like you're signed up with " +
                        user.getProvider() + " account. Please use your " + user.getProvider() +
                        " account to login.");
            }
            user = updateExistingUser(user, accountFacebookRequest);
        } else {
            user = registerNewUser(accountFacebookRequest);
        }

        return user;
    }

    private Account registerNewUser(AccountFacebookRequest accountFacebookRequest) {
        Account user = new Account();
        user.setPasswordHash("");
        user.setProvider(AuthProvider.valueOf(accountFacebookRequest.getProvider()));
        user.setProviderId(accountFacebookRequest.getProviderId());
        user.setEmail(accountFacebookRequest.getEmail());
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

    private Account updateExistingUser(Account existingUser, AccountFacebookRequest accountFacebookRequest) {
        return accountRepository.save(existingUser);
    }
}
