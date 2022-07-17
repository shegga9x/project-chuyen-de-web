package backend.backend.services.subService;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.request.DigitalSignatureRequest2;
import backend.backend.helpers.utils.digitalSignature.DigitalSignature;
import backend.backend.persitence.entities.Customer;
import backend.backend.persitence.repository.CustomerRepository;
import org.apache.pdfbox.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.request.DigitalSignatureRequest;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.helpers.utils.digitalSignature.DigitalUltil;
import backend.backend.helpers.utils.digitalSignature.algorim.Signer;
import backend.backend.helpers.utils.digitalSignature.model.PDFSignatureInfo;
import backend.backend.helpers.utils.digitalSignature.model.PDFSignatureInfoParser;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.OrderItemRepository;
import org.springframework.util.Base64Utils;

@Service
public class DigitalSignatureService {

    @Autowired
    Signer signer;

    @Autowired
    OrderItemRepository orderItemRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Value("${signer.docsUrlPrefix}")
    private String docsUrlPrefix;

    public byte[] signing(DigitalSignatureRequest digitalSignatureRequest) {
        byte[] result = null;
        String realImageBase64 = digitalSignatureRequest.getImageBase64().split(",")[1];
        byte[] bytes = Base64.getMimeDecoder().decode(realImageBase64);
        int idUser = SubUtils.getCurrentUser().getId();
        Account account = accountRepository.getById(idUser);
        final String uuid = UUID.randomUUID().toString();
        try {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            String qrcode = docsUrlPrefix + uuid;
            signer.sign(DigitalUltil.createPDF(digitalSignatureRequest.getListOrderItem(), account), bos, digitalSignatureRequest.getUserName(),
                    "phung vip", "ký kết mua hàng tại shop", bytes, digitalSignatureRequest.getUserName(),
                    "ký kết mua hàng tại shop", uuid, qrcode);
            result = bos.toByteArray();
            bos.close();
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

    public String verifying2(DigitalSignatureRequest2 digitalSignatureRequest2) {
        int idUser = SubUtils.getCurrentUser().getId();
        Customer customer = customerRepository.findByIdCustomer(idUser).get();
        try {
            boolean bool = DigitalSignature.decrypt(customer.getPubkey(), digitalSignatureRequest2);
            if (bool) {
                return "oke";
            } else {
                throw new CustomException("decry fail");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new CustomException("decry error");
        }
    }

    // RSA DSA DiffieHellman
    public byte[] generateKeyPair() throws NoSuchAlgorithmException {
        int keysize = 2048;
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        kpg.initialize(keysize);
        KeyPair kp = kpg.generateKeyPair();
        //
        String pubKeyEncode = Base64Utils.encodeToString(kp.getPublic().getEncoded());
        int idCustomer = SubUtils.getCurrentUser().getId();
        Customer customer = customerRepository.findByIdCustomer(idCustomer).get();
        customer.setPubkey(pubKeyEncode);
        customerRepository.save(customer);

        //return priKey to customer
        return kp.getPrivate().getEncoded();
    }
}
