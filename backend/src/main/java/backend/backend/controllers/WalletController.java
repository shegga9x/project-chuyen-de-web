package backend.backend.controllers;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.services.entityService.WalletCustomerService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/walletCustomer")
public class WalletController {

    @Autowired
    private WalletCustomerService walletCustomerService;

    @GetMapping("/getMoneyByIdCustomer")
    public ResponseEntity<?> getMoneyByIdCustomer() {
        return ResponseEntity.ok(walletCustomerService.getMoneyByIdCustomer());
    }

    @GetMapping("/addMoneyToCustomerWallet")
    public ResponseEntity<?> addMoneyToCustomerWallet(@NotNull @RequestParam double money) {
        return ResponseEntity.ok(walletCustomerService.addMoneyToCustomerWallet(money));
    }
}
