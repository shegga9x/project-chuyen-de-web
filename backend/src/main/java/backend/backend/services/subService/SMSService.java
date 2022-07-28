package backend.backend.services.subService;

import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.ValidationRequest;
import com.twilio.type.PhoneNumber;

import backend.backend.persitence.model.SMS;

@Component
public class SMSService {

    private String ACCOUNT_SID = "ACa0ed2d97cd43ffbb2959ddd5961605f0";

    private String AUTH_TOKEN = "2c5d680026323d4c44b08b3aee2357bf";

    private String FROM_NUMBER = "+12512765229";

    public String send(SMS sms) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message message = Message.creator(new PhoneNumber(sms.getTo()), new PhoneNumber(FROM_NUMBER), sms.getMessage())
                .create();
        System.out.println("here is my id:" + message.getSid());// Unique resource ID created to manage this transaction

        return "ok";
    }

    public void receive(MultiValueMap<String, String> smscallback) {
    }

    public void addAnOutgoingCallerId(String phoneNumber, String name) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ValidationRequest validationRequest = ValidationRequest.creator(
                new PhoneNumber(phoneNumber))
                .setFriendlyName(name)
                .create();
        System.out.println(validationRequest.getFriendlyName());
    }
}
