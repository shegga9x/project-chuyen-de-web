package backend.backend.controllers.subControllers;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.helpers.utils.VNPayUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/vnPay")
public class VNPayController {

    @GetMapping("/createLink")
    public ResponseEntity<?> createLink(@RequestParam double amount, @RequestParam String bankCode,
            HttpServletRequest request) throws UnsupportedEncodingException {
       
        return ResponseEntity.ok(VNPayUtils.createLink(amount, bankCode, request.getHeader("origin")));
    }
}
