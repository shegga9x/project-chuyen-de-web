package backend.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.services.entityService.OrderService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@PreAuthorize("hasAnyRole('ROLE_Admin','ROLE_User')")
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getOrderItemByIdCustomer")
    public ResponseEntity<?> getOrderItemByIdCustomer() {
        return ResponseEntity.ok(orderService.getOrderItemByIdCustomer());
    }

    @PostMapping("/addCartItemToOrder")
    public ResponseEntity<?> addCartItemToOrder(@RequestBody List<String> listShipingPrice) {
        return ResponseEntity.ok(orderService.addCartItemToOrder(listShipingPrice));
    }



}
