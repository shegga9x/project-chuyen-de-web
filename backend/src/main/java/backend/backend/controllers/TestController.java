package backend.backend.controllers;

import backend.backend.helpers.payload.response.MessageResponse;
import backend.backend.persitence.model.UserDetailCustom;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/getJWT")
    public ResponseEntity<?> test() {
        UserDetailCustom user = (UserDetailCustom) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(user.getEmail()+"-"+user.getId());
        return ResponseEntity.ok(
                new MessageResponse("Test"));
    }
}
