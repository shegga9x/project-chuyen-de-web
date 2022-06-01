package backend.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import backend.backend.helpers.payload.request.*;
import backend.backend.services.subService.GoogleOAuth2UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import backend.backend.helpers.payload.response.MessageResponse;
import backend.backend.helpers.utils.CookieUtils;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.model.UserDetailCustom;
import backend.backend.services.mainService.AuthService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/accounts")
public class AuthController {
    @Autowired
    CookieUtils controlerUtils;
    @Autowired
    AuthService accountService;
    @Autowired
    GoogleOAuth2UserService googleOAuth2UserService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest model, HttpServletRequest request) {
        accountService.register(model, request.getHeader("origin"));
        return ResponseEntity.ok(
                new MessageResponse("Registration successful, please check your email for verification instructions"));

    }

    @PostMapping("/verify-email")
    public ResponseEntity<?> verifyEmail(@Valid @RequestBody VerifyEmailRequest model) {
        accountService.verifyEmail(model.getToken());
        return ResponseEntity.ok(
                new MessageResponse("Verification successful, you can now login"));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@Valid @RequestBody AuthenticateRequest model,
                                          HttpServletResponse servletResponse) {
        var response = accountService.authenticate(model, controlerUtils.ipAddress());
        System.out.println(response.getRefreshToken());
//        controlerUtils.setTokenCookie(servletResponse, response.getRefreshToken());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@RequestBody String refreshToken) {
//        String refreshToken = controlerUtils.getSingleFormCookie("refreshToken");
        System.out.println(refreshToken);
        var response = accountService.refreshToken(refreshToken, controlerUtils.ipAddress());
//        try {
//            controlerUtils.setTokenCookie(servletResponse, response.getRefreshToken());
//        } catch (Exception e) {
//            controlerUtils.setTokenCookie(servletResponse, "");
//        }
        return ResponseEntity.ok(response);
//        return ResponseEntity.ok("oke");
    }

    @PostMapping("/revoke-token")
    public ResponseEntity<?> revokeToken() {
        String token = controlerUtils.getSingleFormCookie("refreshToken");
        if (SubUtils.isNullOrBlank(token))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("Token is required"));
        UserDetailCustom currentAccount = (UserDetailCustom) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        List<String> roles = currentAccount.getAuthorities().stream().map(item -> item.getAuthority())
                .collect(Collectors.toList()).stream().filter(x -> x.equals("Admin")).collect(Collectors.toList());
        if (!currentAccount.OwnsToken(token) && roles.size() > 0)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Unauthorized"));
        accountService.revokeToken(token, controlerUtils.ipAddress());
        return ResponseEntity.ok(new MessageResponse("Token revoked"));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody ForgotPasswordRequest model) {
        accountService.forgotPassword(model, controlerUtils.getSingleFormCookie("origin"));
        return ResponseEntity.ok(
                new MessageResponse("Please check your email for password reset instructions"));
    }

    @PostMapping("/validate-reset-token")
    public ResponseEntity<?> validateResetToken(@Valid @RequestBody ValidateResetTokenRequest model) {
        accountService.validateResetToken(model);
        return ResponseEntity.ok(
                new MessageResponse("Token is valid"));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest model) {
        accountService.resetPassword(model);
        return ResponseEntity.ok(
                new MessageResponse("Password reset successful, you can now login"));
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok(
                new MessageResponse("Test"));
    }

    // @PreAuthorize("hasRole('ROLE_Admin')")
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(accountService.getAll());
    }

//    @PostMapping("authenticate-with-jwt")
//    public ResponseEntity<?> authenticateWithJWT(@RequestBody String token, HttpServletResponse servletResponse) {
//        var response = accountService.authenticateWithJWT(token, controlerUtils.ipAddress());
//        controlerUtils.setTokenCookie(servletResponse, response.getRefreshToken());
//        return ResponseEntity.ok(response);
//    }

    @PostMapping("authenticate-with-jwt")
    public ResponseEntity<?> authenticateWithJWT(@RequestBody AccountGoogleRequest accountGoogleRequest, HttpServletResponse servletResponse) {
        var response = accountService.authenticateWithJWT(accountGoogleRequest, controlerUtils.ipAddress());
//        controlerUtils.setTokenCookie(servletResponse, response.getRefreshToken());
        return ResponseEntity.ok(response);
    }

    @PostMapping("check-user-login-google")
    public ResponseEntity<?> checkUserLoginGoogle(@RequestBody AccountGoogleRequest accountGoogleRequest) {
        var response = googleOAuth2UserService.loadUser(accountGoogleRequest);
        return ResponseEntity.ok(response);
    }

}