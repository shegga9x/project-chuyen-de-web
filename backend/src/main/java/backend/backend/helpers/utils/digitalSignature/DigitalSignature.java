package backend.backend.helpers.utils.digitalSignature;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.math.BigInteger;
import java.security.DigestInputStream;
import java.security.Key;
import java.security.MessageDigest;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.util.Base64Utils;

import backend.backend.helpers.payload.request.DigitalSignatureRequest2;

public class DigitalSignature {
    static int ivSize = 16;

    private static byte[] iv = new byte[ivSize];

    public static byte[] generatingIVDecrypt(byte[] encryptedIvTextBytes) {
        byte[] iv = new byte[ivSize];
        System.arraycopy(encryptedIvTextBytes, 0, iv, 0, iv.length);
        return iv;
    }

    public static byte[] getEncryptByteWhenRemoveIv(byte[] input) {
        int encryptedSize = input.length - ivSize;
        byte[] encryptedBytes = new byte[encryptedSize];
        System.arraycopy(input, ivSize, encryptedBytes, 0, encryptedSize);
        return encryptedBytes;
    }

    public static IvParameterSpec generaIvParameterSpec(byte[] iv) {
        IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
        return ivParameterSpec;
    }

    public static boolean decrypt(String base64KeyPub, DigitalSignatureRequest2 digitalSignatureRequest2) throws Exception {
        // hash
        System.out.println("????");
        Security.addProvider(new BouncyCastleProvider());
        MessageDigest md = MessageDigest.getInstance(digitalSignatureRequest2.getHash(), "BC");
        InputStream is = new ByteArrayInputStream(Base64Utils.decodeFromString(digitalSignatureRequest2.getBase64FileData()));
        DigestInputStream dis = new DigestInputStream(is, md);

        byte[] buffer = new byte[1024];


        int read = dis.read(buffer);

        while (read != -1) {
            read = dis.read(buffer);
        }

        BigInteger number = new BigInteger(1, dis.getMessageDigest().digest());
        String hashText = number.toString(16);

        System.out.println("????");

        //decry
        Key originalKey = KeyGenerate.keyRSAOrgin(base64KeyPub, digitalSignatureRequest2.getDecry(), 1);
        String algorithmModePadding = digitalSignatureRequest2.getDecry() + "/" + digitalSignatureRequest2.getMode() + "/" + digitalSignatureRequest2.getPadding();
        Cipher cipher = Cipher.getInstance(algorithmModePadding, "BC");
        byte[] encryptAndIv = Base64Utils.decode(Base64Utils.decodeFromString(digitalSignatureRequest2.getBase64FileEncry()));
        System.out.println("????");
        if (Variables.listVariableModesIV.contains(digitalSignatureRequest2.getMode())) {
            DigitalSignature.iv = generatingIVDecrypt(encryptAndIv);
            cipher.init(Cipher.DECRYPT_MODE, originalKey, generaIvParameterSpec(iv));
            encryptAndIv = getEncryptByteWhenRemoveIv(encryptAndIv);
        } else {
            cipher.init(Cipher.DECRYPT_MODE, originalKey);
        }
        System.out.println("buon vai loz");
        byte[] decrypted = cipher.doFinal(encryptAndIv);
        System.out.println("loz gi the");
        String decry = new String(decrypted);

        if (decry.equals(hashText)) {
            return true;
        }
        return false;
    }
}
