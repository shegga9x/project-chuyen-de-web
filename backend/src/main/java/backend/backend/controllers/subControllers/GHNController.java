package backend.backend.controllers.subControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

}