package backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.services.entityService.SingleProductPageService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    SingleProductPageService singleProductPageService;

    @GetMapping("/loadAll")
    public ResponseEntity<?> loadAll() {
        return ResponseEntity.ok(singleProductPageService.loadAll());
    }
}