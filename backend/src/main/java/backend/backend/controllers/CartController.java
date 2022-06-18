package backend.backend.controllers;

import backend.backend.helpers.payload.request.CartItemRequest;
import backend.backend.helpers.payload.request.ProductRequest;
import backend.backend.services.entityService.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/getCartByIdCustomer")
    public ResponseEntity<?> getCartByIdUser(@NotNull @RequestParam String idCustomer) {
        return ResponseEntity.ok(cartService.getCartItemsByIdCustomer(Integer.parseInt(idCustomer)));
    }

    @PostMapping("/addToCart")
    public ResponseEntity<?> addToCart(@NotNull @RequestBody CartItemRequest cartItemRequest) {
//        return ResponseEntity.ok(cartService.getCartItemsByIdCustomer(Integer.parseInt(idCustomer)));
        return ResponseEntity.ok(cartService.addToCart(cartItemRequest));
    }
}
