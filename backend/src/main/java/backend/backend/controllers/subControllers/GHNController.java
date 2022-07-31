package backend.backend.controllers.subControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.helpers.payload.request.ghn.CalFeeRequest;
import backend.backend.helpers.payload.response.CartItemResponse;
import backend.backend.services.subService.GHNService;

@RestController
@RequestMapping("/api/ghn")
public class GHNController {
    @Autowired
    GHNService ghnService;

    @GetMapping(value = "/province")
    public ResponseEntity<?> getProvince() {
        return ResponseEntity.ok(ghnService.getProvince());
    }

    @GetMapping(value = "/district")
    public ResponseEntity<?> getDistrict(@RequestParam(value = "province_id") int province_id) {
        return ResponseEntity.ok(ghnService.getDistrict(province_id));
    }

    @GetMapping(value = "/ward")
    public ResponseEntity<?> getWard(@RequestParam(value = "district_id") int district_id) {
        return ResponseEntity.ok(ghnService.getWard(district_id));
    }

    @GetMapping(value = "/printOrder")
    public ResponseEntity<?> printOrder(@RequestParam(value = "order_id") String[] order_id) {
        return ResponseEntity.ok(ghnService.printOrder(order_id));
    }

    @PostMapping("/calculateFee")
    public ResponseEntity<?> calculateFee(@RequestBody CalFeeRequest calFeeRequest) {
        return ResponseEntity.ok(ghnService.calculateFee(calFeeRequest));
    }

    @PostMapping("/getServiceType")
    public ResponseEntity<?> getServiceType(@RequestBody List<CartItemResponse> cartItemDTOsItemResponses) {
        return ResponseEntity.ok(ghnService.getServiceType(cartItemDTOsItemResponses));
    }

}
