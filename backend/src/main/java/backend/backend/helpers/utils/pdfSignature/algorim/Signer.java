package backend.backend.helpers.utils.pdfSignature.algorim;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import backend.backend.helpers.utils.pdfSignature.pdf.CreateVisibleSignatureMem;

@Component
public class Signer {

    @Value("${signer.keystore.pin}")
    public String keystorePin;

    @Value("${signer.keystore.name}")
    public String keystoreName;

    @Value("${signer.tsaurl}")
    public String tsaUrl;

    public static byte[] readBytes(InputStream is) throws IOException {
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();

        int nRead;
        byte[] data = new byte[16384];

        while ((nRead = is.read(data, 0, data.length)) != -1) {
            buffer.write(data, 0, nRead);
        }

        return buffer.toByteArray();

    }

    public static void setIfNotNull(CreateVisibleSignatureMem signing, String signName, String signLocation,
            String signReason, String visibleLine1, String visibleLine2, String uuid, String qrcode) {

        if (signName != null) {
            signing.signatureName = signName;
        }
        if (signLocation != null) {
            signing.signatureLocation = signLocation;
        }
        if (signReason != null) {
            signing.signatureReason = signReason;
        }
        if (visibleLine1 != null) {
            signing.visibleLine1 = visibleLine1;
        }
        if (visibleLine2 != null) {
            signing.visibleLine2 = visibleLine2;
        }
        if (uuid != null) {
            signing.uuid = uuid;
        }
        if (qrcode != null) {
            signing.qrcode = qrcode;
        }
    }

    public Calendar sign(InputStream is, OutputStream os, String signName, String signLocation, String signReason,
            byte[] imageByte,
            String visibleLine1, String visibleLine2, String uuid, String qrcode) throws KeyStoreException,
            CertificateException, IOException, NoSuchAlgorithmException, UnrecoverableKeyException {
        ClassPathResource classPathResource = new ClassPathResource(keystoreName);
        KeyStore keystore = KeyStore.getInstance("PKCS12");
        char[] pin = keystorePin.toCharArray();
        keystore.load(classPathResource.getInputStream(), pin);

        CreateVisibleSignatureMem signing = new CreateVisibleSignatureMem(keystore, pin.clone());
        setIfNotNull(signing, signName, signLocation, signReason, visibleLine1, visibleLine2, uuid, qrcode);

        signing.setImageBytes(imageByte);

        return signing.signPDF(is, os, tsaUrl, "Signature1");

    }

}
