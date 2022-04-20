package backend.backend.persitence.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.RefreshToken;

public class UserDetailCustom implements UserDetails, OAuth2User {
    private static final long serialVersionUID = 1L;
    private int id;
    private String username;
    private String email;
    private List<RefreshToken> listOfRefreshToken;
    private Date lastExpireds;
    private Map<String, Object> attributes;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailCustom(int id, String username, String email, String password,
            List<RefreshToken> listOfRefreshToken, Date lastExpireds,
            Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.listOfRefreshToken = listOfRefreshToken;
        this.lastExpireds = lastExpireds;
        this.authorities = authorities;
    }

    public static UserDetailCustom build(Account user) {
        List<GrantedAuthority> authorities = user.getListOfRole().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRoleName().name()))
                .collect(Collectors.toList());
        return new UserDetailCustom(
                user.getIdAccount(),
                user.getEmail(),
                user.getEmail(),
                user.getPasswordHash(),
                user.getListOfRefreshToken(),
                user.getLastExpires(),
                authorities);
    }
    public static UserDetailCustom build(Account user, Map<String, Object> attributes) {
        UserDetailCustom userPrincipal = UserDetailCustom.build(user);
        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<RefreshToken> getListOfRefreshToken() {
        return this.listOfRefreshToken;
    }

    public void setListOfRefreshToken(List<RefreshToken> listOfRefreshToken) {
        this.listOfRefreshToken = listOfRefreshToken;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getLastExpireds() {
        return this.lastExpireds;
    }

    public void setLastExpireds(Date lastExpireds) {
        this.lastExpireds = lastExpireds;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailCustom user = (UserDetailCustom) o;
        return Objects.equals(id, user.id);
    }

    public boolean OwnsToken(String token) {
        int size = this.listOfRefreshToken.stream().filter(x -> x.getToken().equals(token)).collect(Collectors.toList())
                .size();
        return (size != 0 ? true : false);

    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getName() {
        return String.valueOf(id);
    }
}
