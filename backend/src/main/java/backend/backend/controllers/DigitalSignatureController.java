package backend.backend.controllers;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.apache.pdfbox.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.helpers.utils.digitalSignature.DigitalUltil;
import backend.backend.helpers.utils.digitalSignature.algorim.Signer;
import backend.backend.helpers.utils.digitalSignature.model.PDFSignatureInfo;
import backend.backend.helpers.utils.digitalSignature.model.PDFSignatureInfoParser;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/digitalSignature")
public class DigitalSignatureController {

    @Autowired
    Signer signer;

    @Value("${signer.docsUrlPrefix}")
    private String docsUrlPrefix;

    @GetMapping({ "/signing" })
    public ResponseEntity<?> signing() throws FileNotFoundException, IOException {
        byte[] bytes = IOUtils.toByteArray(new FileInputStream(new File("sig2.png")));
        final String uuid = UUID.randomUUID().toString();
        try {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            String qrcode = docsUrlPrefix + uuid;
            signer.sign(DigitalUltil.createPDF(), bos, "phung vip",
                    "phung vip", "phung vip", bytes, "phung vip",
                    "phung vip", uuid, qrcode);
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(uuid + ".pdf"));
            FileCopyUtils.copy(new ByteArrayInputStream(bos.toByteArray()), stream);
            stream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping({ "/verifying" })
    public ResponseEntity<?> verifying() {
        try {
            byte[] bytes = IOUtils
                    .toByteArray(new FileInputStream(new File("9fd82907-1bb7-4fc6-a2ff-4d7bb0399df9.pdf")));
            List<PDFSignatureInfo> info = PDFSignatureInfoParser.getPDFSignatureInfo(bytes);
            for (PDFSignatureInfo pdfSignatureInfo : info) {
                System.out.println(pdfSignatureInfo);
            }
        } catch (Exception e) {
        }
        return null;
    }
}
