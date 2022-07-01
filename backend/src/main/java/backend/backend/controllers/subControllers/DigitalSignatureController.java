package backend.backend.controllers.subControllers;
import java.io.IOException;

import backend.backend.helpers.payload.request.DigitalSignatureRequest;
import backend.backend.services.subService.DigitalSignatureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/digitalSignature")
public class DigitalSignatureController {

    @Autowired
    DigitalSignatureService digitalSignatureService;

    @PostMapping({"/signing"})
    public ResponseEntity<?> signing(@NotNull  @RequestBody DigitalSignatureRequest digitalSignatureRequest) throws IOException {
        return ResponseEntity.ok(digitalSignatureService.signing(digitalSignatureRequest));
    }

    @GetMapping({"/verifying"})
    public ResponseEntity<?> verifying() {
        return ResponseEntity.ok(digitalSignatureService.verifying());
    }
}
