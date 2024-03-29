package backend.backend.helpers.utils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import backend.backend.helpers.advice.CustomException;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.RefreshToken;
import backend.backend.persitence.entities.ResetToken;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.RefreshTokenRepository;
import backend.backend.persitence.repository.ResetTokenRepository;
import backend.backend.persitence.repository.VerificationTokenRepository;

@Component
public class TokenUtils {
    @Value("${bezkoder.app.jwtRefreshExpirationMs}")
    public int jwtRefreshExpirationMs;
    @Autowired
    VerificationTokenRepository verificationTokenRepository;
    @Autowired
    ResetTokenRepository resetTokenRepository;
    @Autowired
    RefreshTokenRepository refreshTokenRepository;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    JwtUtils jwtUtils;

    public String generateVerificationToken() {
        // token is a cryptographically strong random sequence of values
        String token = jwtUtils.getRandomHexString(64);
        // ensure token is unique by checking against db
        boolean tokenIsUnique = !verificationTokenRepository.existsByVerificationTokenContent(token);
        if (!tokenIsUnique)
            return generateVerificationToken();
        return token;
    }

    public String generateResetToken() {
        String token = jwtUtils.getRandomHexString(64);
        // ensure token is unique by checking against db
        boolean tokenIsUnique = !resetTokenRepository.existsByResetTokenContent(token);
        if (!tokenIsUnique)
            return generateResetToken();
        return token;
    }

    public RefreshToken revokeDescendantRefreshTokens(RefreshToken refreshToken, Account account, String ipAddress,
            String reason) {
        RefreshToken childToken = refreshToken;
        if (!SubUtils.isNullOrBlank(refreshToken.getReplacedByToken())) {
            childToken = refreshTokenRepository.getTokenListOfUser(account.getIdAccount()).stream()
                    .filter(x -> x.getToken().equals(refreshToken.getReplacedByToken()))
                    .collect(Collectors.toList())
                    .get(0);
            if (childToken.IsActive())
                childToken = revokeRefreshToken(childToken, ipAddress, reason, null);
            else
                childToken = revokeDescendantRefreshTokens(childToken, account, ipAddress, reason);
        }
        return childToken;
    }

    public RefreshToken rotateRefreshToken(RefreshToken refreshToken, String ipAddress) {
        RefreshToken newRefreshToken = jwtUtils.generateRefreshToken(ipAddress, refreshToken.getIdAccount());
        return newRefreshToken;
    }

    public RefreshToken revokeRefreshToken(RefreshToken refreshToken, String ipAddress, String reason,
            String replacedByToken) {
        refreshToken.setRevoked(new Date());
        refreshToken.setRevokedByIp(ipAddress);
        refreshToken.setReasonRevoked(reason);
        refreshToken.setReplacedByToken(replacedByToken);
        return refreshToken;
    }

    public void removeOldRefreshTokens(int idAccount) {
        List<Integer> ids = new ArrayList<>();
        Account account = accountRepository.findById(idAccount).get();
        try {

            for (RefreshToken refreshToken : account.getListOfRefreshToken()) {
                if (refreshToken.getRevoked() != null
                        && refreshToken.getExpires().before(new Date())
                        && new Date(refreshToken.getCreated().getTime() + jwtRefreshExpirationMs).before(new Date())) {
                    ids.add(refreshToken.getId());
                }
            }
            refreshTokenRepository.deleteAllById(ids);
        } catch (Exception e) {
        }
    }

    public Account getAccountByResetToken(String token) {
        try {
            ResetToken resetToken = resetTokenRepository.findByResetTokenContent(token);
            if (resetToken.getResetTokenExpires().before(new Date())) {
                throw new CustomException("Token expired !!!");
            }
            return resetToken.getAccount();
        } catch (Exception e) {
            throw new CustomException("Can't find token !!!");
        }
    }

}
