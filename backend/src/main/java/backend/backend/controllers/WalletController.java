package backend.backend.controllers;

import backend.backend.services.entityService.WalletCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

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
