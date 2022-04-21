package backend.backend.services.subService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import backend.backend.helpers.advice.OAuth2AuthenticationProcessingException;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.AccountDetail;
import backend.backend.persitence.entities.ResetToken;
import backend.backend.persitence.entities.Role;
import backend.backend.persitence.entities.VerificationToken;
import backend.backend.persitence.model.UserDetailCustom;
import backend.backend.persitence.model.enumModel.AuthProvider;
import backend.backend.persitence.model.enumModel.RoleEnum;
import backend.backend.persitence.model.oauth2.user.OAuth2UserInfo;
import backend.backend.persitence.model.oauth2.user.OAuth2UserInfoFactory;
import backend.backend.persitence.repository.AccountRepository;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            // Throwing an instance of AuthenticationException will trigger the
            // OAuth2AuthenticationFailureHandler
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) {
        OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(
                oAuth2UserRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
        if (!StringUtils.hasLength(oAuth2UserInfo.getEmail())) {
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        Optional<Account> userOptional = accountRepository.findByEmail(oAuth2UserInfo.getEmail());
        Account user;
        if (userOptional.isPresent()) {
            user = userOptional.get();
            if (!user.getProvider()
                    .equals(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()))) {
                throw new OAuth2AuthenticationProcessingException("Looks like you're signed up with " +
                        user.getProvider() + " account. Please use your " + user.getProvider() +
                        " account to login.");
            }
            user = updateExistingUser(user, oAuth2UserInfo);
        } else {
            user = registerNewUser(oAuth2UserRequest, oAuth2UserInfo);
        }

        return UserDetailCustom.build(user, oAuth2User.getAttributes());
    }

    private Account registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2UserInfo oAuth2UserInfo) {
        Account user = new Account();
        user.setPasswordHash("");
        user.setProvider(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()));
        user.setProviderId(oAuth2UserInfo.getId());
        user.setEmail(oAuth2UserInfo.getEmail());
        user.setCreated(new Date());
        user.setAcceptTerms(true);
        user.setLastExpires(new Date());
        AccountDetail accountDetail = new AccountDetail();
        accountDetail.setFirstName(oAuth2UserInfo.getFirstName());
        accountDetail.setLastName(oAuth2UserInfo.getLastName());
        accountDetail.setImageUrl(oAuth2UserInfo.getImageUrl());
        user.setAccountDetail(accountDetail);
        boolean isFirstAccount = accountRepository.findAll().size() == 0;
        RoleEnum roleEnum = (isFirstAccount ? RoleEnum.Admin : RoleEnum.Student);
        List<Role> roles = new ArrayList<>(List.of(new Role(roleEnum)));
        user.setListOfRole(roles);
        user.setVerificationToken(new VerificationToken());
        user.setResetToken(new ResetToken());
        return accountRepository.save(user);
    }

    private Account updateExistingUser(Account existingUser, OAuth2UserInfo oAuth2UserInfo) {
        AccountDetail accountDetail = existingUser.getAccountDetail();
        accountDetail.setFirstName(oAuth2UserInfo.getFirstName());
        accountDetail.setLastName(oAuth2UserInfo.getLastName());
        accountDetail.setImageUrl(oAuth2UserInfo.getImageUrl());
        existingUser.setAccountDetail(accountDetail);
        return accountRepository.save(existingUser);
    }

}
