package backend.backend.helpers.utils.digitalSignature;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.Signature;

import backend.backend.persitence.entities.OrderItem;

public class DigitalSignature {


    public DigitalSignature() throws Exception {
  

    }

    public void signing(String url, OrderItem orderItem) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(DigitalUtils.getPrivateKey());
        byte[] messageBytes = orderItem.toByteArray();
        signature.update(messageBytes);
        byte[] digitalSignature = signature.sign();
        Files.write(Paths.get(url), digitalSignature);
    }

    public boolean verifying(String url, OrderItem orderItem) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(DigitalUtils.getPublicKey());
        byte[] messageBytes = orderItem.toByteArray();
        signature.update(messageBytes);
        byte[] receivedSignature = Files.readAllBytes(Paths.get(url));
        return signature.verify(receivedSignature);
    }

    public static void main(String[] args) throws Exception {
        DigitalSignature digitalSignature = new DigitalSignature();
        String url = "phungvipquada.txt";
        OrderItem item = new OrderItem(1, 1, 1, Byte.valueOf("1"));
        // digitalSignature.signing(url, item);
        System.out.println(digitalSignature.verifying(url, item));
    }

}
