package backend.backend.services.mainService;

import backend.backend.helpers.utils.SubUtils;
import backend.backend.helpers.utils.digitalSignature.DigitalUltil;
import backend.backend.helpers.utils.digitalSignature.algorim.Signer;
import backend.backend.helpers.utils.digitalSignature.model.PDFSignatureInfo;
import backend.backend.helpers.utils.digitalSignature.model.PDFSignatureInfoParser;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.OrderItem;
import backend.backend.persitence.model.UserDetailCustom;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.OrderItemRepository;
import org.apache.pdfbox.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

@Service
public class DigitalSignatureService {

    @Autowired
    Signer signer;

    @Autowired
    OrderItemRepository orderItemRepository;

    @Autowired
    AccountRepository accountRepository;

    @Value("${signer.docsUrlPrefix}")
    private String docsUrlPrefix;

    public byte[] signing(String imageBase64) {
        byte[] result = null;
        String realImageBase64 = imageBase64.split(",")[1];
        byte[] bytes = Base64.getMimeDecoder().decode(realImageBase64);
        int idUser = SubUtils.getCurrentUser().getId();
        Account account = accountRepository.getById(idUser);
        List<OrderItem> orderItems = orderItemRepository.findByIdCustomer(idUser);
//        byte[] bytes = IOUtils.toByteArray(new FileInputStream("sig2.png"));
        final String uuid = UUID.randomUUID().toString();
        try {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            String qrcode = docsUrlPrefix + uuid;
            signer.sign(DigitalUltil.createPDF(orderItems,account), bos, "phung vip",
                    "phung vip", "phung vip", bytes, "phung vip",
                    "phung vip", uuid, qrcode);
            result = bos.toByteArray();
            bos.close();
//            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(uuid + ".pdf"));
//            FileCopyUtils.copy(new ByteArrayInputStream(bos.toByteArray()), stream);
//            stream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public String verifying() {
        try {
            byte[] bytes = IOUtils
                    .toByteArray(new FileInputStream("9fd82907-1bb7-4fc6-a2ff-4d7bb0399df9.pdf"));
            List<PDFSignatureInfo> info = PDFSignatureInfoParser.getPDFSignatureInfo(bytes);
            for (PDFSignatureInfo pdfSignatureInfo : info) {
                System.out.println(pdfSignatureInfo);
            }
        } catch (Exception e) {
        }
        return null;
    }
}
