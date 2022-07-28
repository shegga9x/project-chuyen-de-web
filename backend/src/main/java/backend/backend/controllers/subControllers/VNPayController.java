package backend.backend.controllers.subControllers;

import backend.backend.helpers.utils.VNPayUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/vnPay")
public class VNPayController {

    @GetMapping("/createLink")
    public ResponseEntity<?> createLink(@RequestParam double amount,@RequestParam String bankCode) throws UnsupportedEncodingException {
        return ResponseEntity.ok(VNPayUtils.createLink(amount, bankCode));
    }
}
