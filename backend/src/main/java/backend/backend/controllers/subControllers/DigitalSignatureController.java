package backend.backend.controllers.subControllers;

import java.security.NoSuchAlgorithmException;

import backend.backend.helpers.payload.request.DigitalSignatureRequest;
import backend.backend.helpers.payload.request.DigitalSignatureRequest2;
import backend.backend.services.subService.DigitalSignatureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@PreAuthorize("hasAnyRole('ROLE_Admin','ROLE_User')")
@RequestMapping("/api/digitalSignature")
public class DigitalSignatureController {

    @Autowired
    DigitalSignatureService digitalSignatureService;

    @GetMapping("/generateKeyPair")
    public ResponseEntity<?> generateKeyPair() throws NoSuchAlgorithmException {
        return ResponseEntity.ok(digitalSignatureService.generateKeyPair());
    }

    @PostMapping({"/signing"})
    public ResponseEntity<?> signing(@NotNull @RequestBody DigitalSignatureRequest digitalSignatureRequest) {
        return ResponseEntity.ok(digitalSignatureService.signing(digitalSignatureRequest));
    }

    @PostMapping({"/verifying2"})
    public ResponseEntity<?> verifying2(@NotNull @RequestBody DigitalSignatureRequest2 digitalSignatureRequest2) {
        return ResponseEntity.ok(digitalSignatureService.verifying2(digitalSignatureRequest2));
    }

    @GetMapping({"/verifying"})
    public ResponseEntity<?> verifying() {
        return ResponseEntity.ok(digitalSignatureService.verifying());
    }
}
