package backend.backend.controllers.subControllers;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import backend.backend.helpers.payload.request.DigitalSignatureRequest;
import backend.backend.helpers.payload.request.DigitalSignatureRequest2;
import backend.backend.services.subService.DigitalSignatureService;

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

    @PostMapping({"/verifying"})
    public ResponseEntity<?> verifying(@RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(digitalSignatureService.verifying(file.getBytes()));
    }
}
