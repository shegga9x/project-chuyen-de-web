package backend.backend.helpers.utils.digitalSignature;

import org.springframework.util.Base64Utils;

import java.security.Key;
import java.security.KeyFactory;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

public class KeyGenerate {
    public static Key keyRSAOrgin(String base64KeyPub, String algorithm, int modeOP) throws Exception {
        byte[] bytes = Base64Utils.decodeFromString(base64KeyPub);
        Key key;
        if (modeOP == 1) {
            X509EncodedKeySpec keySpec = new X509EncodedKeySpec(bytes);
            KeyFactory keyFactory = KeyFactory.getInstance(algorithm, "BC");
            key = keyFactory.generatePublic(keySpec);
        } else {
            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(bytes);
            KeyFactory keyFactory = KeyFactory.getInstance(algorithm, "BC");
            key = keyFactory.generatePrivate(keySpec);
        }
        return key;
    }
}
