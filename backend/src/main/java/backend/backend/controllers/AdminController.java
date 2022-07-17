package backend.backend.controllers;

import backend.backend.services.mainService.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@PreAuthorize("hasAnyRole('ROLE_Student','ROLE_Professor','ROLE_Admin')")
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/getAllSingleProductPage")
    public ResponseEntity<?> getAllSingleProductPage() {
        return ResponseEntity.ok(adminService.getAllSingleProductPage());
    }

    @GetMapping("/duyetSanPham")
    public ResponseEntity<?> duyetSanPham(@NotNull @RequestParam String idSinglePage) {
        return ResponseEntity.ok(adminService.duyetSanPham(Integer.parseInt(idSinglePage)));
    }
}
