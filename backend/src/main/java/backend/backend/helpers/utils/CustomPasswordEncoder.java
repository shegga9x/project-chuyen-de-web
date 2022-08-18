package backend.backend.helpers.utils;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import java.util.Base64;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.security.crypto.password.PasswordEncoder;

import backend.backend.helpers.advice.CustomException;

public class CustomPasswordEncoder implements PasswordEncoder {
    @Override
    public String encode(CharSequence plainTextPassword) {
        Security.addProvider(new BouncyCastleProvider());

        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-256");
            md.update(plainTextPassword.toString().getBytes("UTF-8"));
            byte[] digest = md.digest();

            return Base64.getEncoder().encodeToString(digest);
        } catch (NoSuchAlgorithmException e) {
            throw new CustomException(e.toString());
        } catch (UnsupportedEncodingException e) {
            throw new CustomException(e.toString());
        }

    }

    @Override
    public boolean matches(CharSequence plainTextPassword, String passwordInDatabase) {
        return encode(plainTextPassword).equals(passwordInDatabase);
    }

}