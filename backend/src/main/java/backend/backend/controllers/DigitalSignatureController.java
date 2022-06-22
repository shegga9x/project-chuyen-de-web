package backend.backend.controllers;
import java.io.IOException;

import backend.backend.services.mainService.DigitalSignatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/digitalSignature")
public class DigitalSignatureController {

    @Autowired
    DigitalSignatureService digitalSignatureService;

    @PostMapping({"/signing"})
    public ResponseEntity<?> signing(@RequestBody String imageBase64) throws IOException {
        return ResponseEntity.ok(digitalSignatureService.signing(imageBase64));
    }

    @GetMapping({"/verifying"})
    public ResponseEntity<?> verifying() {
        return ResponseEntity.ok(digitalSignatureService.verifying());
    }
}
