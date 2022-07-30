package backend.backend.controllers;

import javax.validation.constraints.NotNull;

import backend.backend.services.mainService.SalerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @Autowired
    SalerService salerService;

    @GetMapping({"/loadAll"})
    public ResponseEntity<?> loadAll(@RequestParam("page") int page, @RequestParam("size") int size,
                                     @RequestParam(name = "catagory", required = false) Integer[] catagory,
                                     @RequestParam(name = "sorter", required = false) Integer sorter) {

        return ResponseEntity.ok(singleProductPageService.loadAll(page, size, catagory, sorter));
    }

    @GetMapping({"/loadCagetory"})
    public ResponseEntity<?> loadCagetory() {
        return ResponseEntity.ok(singleProductPageService.loadCagetory());
    }

    @GetMapping({"/loadAllSingleProductPage"})
    public ResponseEntity<?> loadAllSingleProductPage() {
        return ResponseEntity.ok(singleProductPageService.loadAllSingleProductPage());
    }

    @GetMapping({"/getSingleProductPagePerPage/{idSingleProduct}"})
    public ResponseEntity<?> getSingleProductPagePerPage(
            @PathVariable(value = "idSingleProduct") String idSingleProduct) {
        return ResponseEntity
                .ok(singleProductPageService.getSingleProductPagePerPage(Integer.parseInt(idSingleProduct)));
    }

    @GetMapping({"/getListProductBySingleProductPage"})
    public ResponseEntity<?> getListProductBySingleProductPage(
            @NotNull @RequestParam("idSingleProduct") String idSingleProduct) {
        return ResponseEntity
                .ok(singleProductPageService.getListProductBySingleProductPage(Integer.parseInt(idSingleProduct)));
    }

    @GetMapping({"/getListCategoryBySingleProductPage"})
    public ResponseEntity<?> getListCategoryBySingleProductPage(
            @NotNull @RequestParam("idCategory") String idCategory) {
        return ResponseEntity
                .ok(singleProductPageService.getListCategoryBySingleProductPage(Integer.parseInt(idCategory)));
    }

    @GetMapping({"/getReviewByIdProduct"})
    public ResponseEntity<?> getReviewByIdProduct(@RequestParam String idSingleProductPage) {
        return ResponseEntity.ok(singleProductPageService.getReviewByIdProduct(Integer.valueOf(idSingleProductPage)));
    }

    @GetMapping("/getListEvaluateReplyResponse")
    public ResponseEntity<?> getListEvaluateReplyResponse(@RequestParam String idSingleProductPage) {
        return ResponseEntity.ok(singleProductPageService.getListEvaluateReplyResponse(Integer.valueOf(idSingleProductPage)));
    }

    @GetMapping({"/getShopProfile"})
    public ResponseEntity<?> getShopProfile(@RequestParam String idShop) {
        return ResponseEntity.ok(salerService.getShopProfile(Integer.parseInt(idShop)));
    }
}