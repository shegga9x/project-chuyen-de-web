package backend.backend.controllers;

import backend.backend.helpers.payload.request.CustomerRequest;
import backend.backend.services.entityService.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.constraints.NotNull;
import java.text.ParseException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@PreAuthorize("hasAnyRole('ROLE_Admin','ROLE_User')")
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getCurrentCustomer")
    public ResponseEntity<?> getCurrentCustomer() {
        return ResponseEntity.ok(customerService.getCurrentCustomer());
    }

    @PostMapping("/changeInformationCustomer")
    public ResponseEntity<?> changeInformationCustomer(@RequestBody CustomerRequest customerRequest) throws ParseException {
        return ResponseEntity.ok(customerService.changeInformationCustomer(customerRequest));
    }

    @GetMapping("/sendPhoneSMS")
    public ResponseEntity<?> sendPhoneSMS() {
        return ResponseEntity.ok(customerService.sendPhoneSMS());
    }

    @GetMapping("/checkPhoneSMS")
    public ResponseEntity<?> checkPhoneSMS(@RequestParam String sms, @RequestParam String phoneNumber) {
        return ResponseEntity.ok(customerService.checkPhoneSMS(sms, phoneNumber));
    }

    @GetMapping("/sendGmailSMS")
    public ResponseEntity<?> sendGmailSMS(@RequestParam String email) throws MessagingException {
        return ResponseEntity.ok(customerService.sendEmailSMS(email));
    }

    @GetMapping("/checkGmailSMS")
    public ResponseEntity<?> checkGmailSMS(@RequestParam String sms, @RequestParam String email) {
        return ResponseEntity.ok(customerService.checkEmailSMS(sms, email));
    }

    @GetMapping("/onCompleteOrderPayment")
    public ResponseEntity<?> onCompleteOrderPayment(@RequestParam String sms) {
        return ResponseEntity.ok(customerService.onCompleteOrderPayment(sms));
    }
}
