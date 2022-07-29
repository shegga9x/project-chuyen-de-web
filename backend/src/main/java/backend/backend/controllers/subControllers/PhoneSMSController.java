package backend.backend.controllers.subControllers;

import backend.backend.persitence.model.SMS;
import backend.backend.services.subService.SMSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/sms")
public class PhoneSMSController {

    @Autowired
    SMSService service;

    @GetMapping("/sendPhoneSMS")
    public ResponseEntity<?> sendPhoneSMS(@RequestParam String phoneNumber, @RequestParam String sms) {
        return ResponseEntity.ok(service.send(new SMS("+" + phoneNumber, sms)));
    }

}
