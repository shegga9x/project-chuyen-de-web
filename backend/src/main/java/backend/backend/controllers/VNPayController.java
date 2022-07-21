package backend.backend.controllers;

import backend.backend.helpers.utils.VNPayUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/vnPay")
public class VNPayController {

    @GetMapping("createLink")
    public ResponseEntity<?> createLink(double amount, String bankCode) throws UnsupportedEncodingException {
        return ResponseEntity.ok(VNPayUtils.createLink(amount, bankCode));
    }
}
