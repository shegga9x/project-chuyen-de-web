package backend.backend.controllers;

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

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.dto.OrderItemDTO;
import backend.backend.helpers.payload.request.SalerProductAddRequest;
import backend.backend.helpers.payload.response.MessageResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.services.mainService.SalerService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@PreAuthorize("hasAnyRole('ROLE_Student','ROLE_Professor','ROLE_Admin')")
@RequestMapping("/api/saler")
public class SalerController {
    @Autowired
    SalerService salerService;

    @Autowired
    AccountRepository accountRepository;

    @GetMapping({ "/productSalerList" })
    public ResponseEntity<?> productSalerList(
            @RequestParam("page") Integer page,
            @RequestParam("size") Integer size,
            @RequestParam(name = "sorter", required = false) Integer sorter,
            @RequestParam(name = "status", required = false) Integer status) {
        Integer idShop = accountRepository.findById(SubUtils.getCurrentUser().getId()).get().getShop().getIdShop();
        return ResponseEntity.ok(salerService.productSalerList(idShop, page, size, sorter, status));
    }

    @PostMapping({ "/productSalerUpdate" })
    public ResponseEntity<?> productSalerUpdate(@RequestBody SalerProductAddRequest salerProductAddRequest) {
        if (!salerService.productSalerUpdate(salerProductAddRequest))
            throw new CustomException("Add Product Fail");
        return ResponseEntity.ok(new MessageResponse("Add Order Success"));
    }

    @GetMapping({ "/orderSalerList" })
    public ResponseEntity<?> orderSalerList(
            @RequestParam("page") Integer page,
            @RequestParam("size") Integer size,
            @RequestParam(name = "sorter", required = false) Integer sorter,
            @RequestParam(name = "status", required = false) Integer status) {
        Integer idShop = accountRepository.findById(SubUtils.getCurrentUser().getId()).get().getShop().getIdShop();
        return ResponseEntity.ok(salerService.orderSalerList(idShop, page, size, sorter, status));
    }

    @PostMapping({ "/orderSalerUpdateStatus" })
    public ResponseEntity<?> orderSalerUpdate(@RequestBody OrderItemDTO orderItemDTO) {
        if (!salerService.orderSalerUpdateStatus(orderItemDTO))
            throw new CustomException("Add Order Fail");
        return ResponseEntity.ok(new MessageResponse("Add Order Success"));
    }

}
