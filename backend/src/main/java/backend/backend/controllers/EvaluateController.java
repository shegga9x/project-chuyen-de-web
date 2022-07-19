package backend.backend.controllers;

import backend.backend.helpers.payload.request.EvaluateRequest;
import backend.backend.services.entityService.SingleProductPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/evaluate")
public class EvaluateController {

    @Autowired
    SingleProductPageService singleProductPageService;

    @PostMapping("/onSubmitReview")
    public ResponseEntity<?> onSubmitReview(@NotNull @RequestBody EvaluateRequest evaluateRequest) {
        return ResponseEntity.ok(singleProductPageService.onSubmitReview(evaluateRequest));
    }
}
