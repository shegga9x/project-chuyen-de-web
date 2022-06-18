package backend.backend.controllers;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.helpers.payload.request.CartItemRequest;
import backend.backend.services.entityService.CartService;

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

    @PostMapping("/deleteCartItem")
    public ResponseEntity<?> deleteCartItem(@NotNull @RequestBody CartItemRequest cartItemRequest) {
        return ResponseEntity.ok(cartService.deleteCartItem(cartItemRequest));
    }
}
