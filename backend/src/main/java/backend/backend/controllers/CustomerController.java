package backend.backend.controllers;

import backend.backend.helpers.payload.request.CustomerRequest;
import backend.backend.services.entityService.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getCurrentCustomer")
    public ResponseEntity<?> addCartItemToOrder() {
        return ResponseEntity.ok(customerService.getCurrentCustomer());
    }

    @PostMapping("/changeInformationCustomer")
    public ResponseEntity<?> changeInformationCustomer(@RequestBody CustomerRequest customerRequest) throws ParseException {
        return ResponseEntity.ok(customerService.changeInformationCustomer(customerRequest));
    }
}
