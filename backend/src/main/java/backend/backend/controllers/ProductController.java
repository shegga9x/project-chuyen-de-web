package backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.services.entityService.SingleProductPageService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    SingleProductPageService singleProductPageService;

    @GetMapping({ "/loadAll" })
    public ResponseEntity<?> loadAll(@RequestParam("page") int page, @RequestParam("size") int size,
            @RequestParam(name = "catagory", required = false) Integer[] catagory,
            @RequestParam(name = "sorter", required = false) Integer sorter) {
   
        return ResponseEntity.ok(singleProductPageService.loadAll(page, size, catagory, sorter));
    }

    @GetMapping({ "/loadCagetory" })
    public ResponseEntity<?> loadCagetory() {
        return ResponseEntity.ok(singleProductPageService.loadCagetory());
    }
}