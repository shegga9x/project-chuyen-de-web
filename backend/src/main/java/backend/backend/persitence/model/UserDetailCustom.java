package backend.backend.persitence.model;

import java.util.Collection;
import java.util.Date;
import java.util.Set;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.RefreshToken;

public class UserDetailCustom implements UserDetails {
    private static final long serialVersionUID = 1L;
    private Integer id;
    private String username;
    private String email;
    private Set<RefreshToken> listOfRefreshToken;
    private Date lastExpireds;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailCustom(Integer id, String username, String email, String password,
            Set<RefreshToken> listOfRefreshToken, Date lastExpireds,
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
        Set<GrantedAuthority> authorities = user.getListOfRole().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRoleName().name()))
                .collect(Collectors.toSet());
        return new UserDetailCustom(
                user.getIdAccount(),
                user.getEmail(),
                user.getEmail(),
                user.getPasswordHash(),
                user.getListOfRefreshToken(),
                user.getLastExpires(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Integer getId() {
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

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<RefreshToken> getSetOfRefreshToken() {
        return this.listOfRefreshToken;
    }

    public void setSetOfRefreshToken(Set<RefreshToken> listOfRefreshToken) {
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
        int size = this.listOfRefreshToken.stream().filter(x -> x.getToken().equals(token)).collect(Collectors.toSet())
                .size();
        return (size != 0 ? true : false);

    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", username='" + getUsername() + "'" +
                ", email='" + getEmail() + "'" +
                ", lastExpireds='" + getLastExpireds() + "'" +
                ", password='" + getPassword() + "'" +
                ", authorities='" + getAuthorities() + "'" +
                "}";
    }

}
