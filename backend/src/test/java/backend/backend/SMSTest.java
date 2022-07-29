package backend.backend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import backend.backend.persitence.model.SMS;
import backend.backend.services.subService.SMSService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SMSTest {
    @Autowired
    SMSService service;

    @Test
    public void send() {
        service.send(new SMS("+84339579758", "Hien Siu VIp"));
    }

    @Test
    public void addAnOutgoingCallerId() {
        service.addAnOutgoingCallerId("+84983464047", "okok");
    }
}
