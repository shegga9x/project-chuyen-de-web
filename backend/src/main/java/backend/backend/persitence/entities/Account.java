/*
 * Created on 2022-04-19 ( 18:58:27 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Value;

import backend.backend.persitence.model.enumModel.AuthProvider;

/**
 * JPA entity class for "Account"
 *
 * @author Telosys
 */
@Entity
@Table(name = "ACCOUNT", schema = "dbo", catalog = Account.CATALOG)
public class Account implements Serializable {
    @Value("${bezkoder.app.databaseName}")
    public static final String CATALOG = "";
    
    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ACCOUNT", nullable = false)
    private Integer idAccount;

    // --- ENTITY DATA FIELDS
    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "password_hash", nullable = false, length = 255)
    private String passwordHash;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created")
    private Date created;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated")
    private Date updated;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "last_expires")
    private Date lastExpires;

    @Column(name = "accept_terms")
    private Boolean acceptTerms;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;
    // --- ENTITY LINKS ( RELATIONSHIP )
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<RefreshToken> listOfRefreshToken;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "ACCOUNT_has_role", joinColumns = @JoinColumn(name = "ID_ACCOUNT", referencedColumnName = "ID_ACCOUNT"), inverseJoinColumns = @JoinColumn(name = "id", referencedColumnName = "id"))
    private List<Role> listOfRole;

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private ResetToken resetToken;

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy = "account", cascade = CascadeType.MERGE)
    private ResetPhoneToken resetPhoneToken;

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy = "account", cascade = CascadeType.MERGE)
    private ResetEmailToken resetEmailToken;

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private VerificationToken verificationToken;

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private Shop shop;

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private Customer customer;

    @OneToMany(mappedBy = "account")
    private List<Chat> listOfChat;

    @OneToMany(mappedBy = "account2")
    private List<Chat> listOfChat2;

    /**
     * Constructor
     */
    public Account() {
        super();
    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setIdAccount(Integer idAccount) {
        this.idAccount = idAccount;
    }

    public Integer getIdAccount() {
        return this.idAccount;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPasswordHash() {
        return this.passwordHash;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getCreated() {
        return this.created;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Date getUpdated() {
        return this.updated;
    }

    public void setLastExpires(Date lastExpires) {
        this.lastExpires = lastExpires;
    }

    public Date getLastExpires() {
        return this.lastExpires;
    }

    public void setAcceptTerms(Boolean acceptTerms) {
        this.acceptTerms = acceptTerms;
    }

    public Boolean getAcceptTerms() {
        return this.acceptTerms;
    }

    // --- GETTERS FOR LINKS
    public Set<RefreshToken> getListOfRefreshToken() {
        return this.listOfRefreshToken;
    }

    public void setListOfRefreshToken(Set<RefreshToken> listOfRefreshToken) {
        this.listOfRefreshToken = listOfRefreshToken;
    }

    public List<Role> getListOfRole() {
        return this.listOfRole;
    }

    public ResetToken getResetToken() {
        return this.resetToken;
    }

    public ResetPhoneToken getPhoneResetToken() {
        return this.resetPhoneToken;
    }

    public ResetEmailToken getEmailResetToken() {
        return this.resetEmailToken;
    }

    public VerificationToken getVerificationToken() {
        return this.verificationToken;
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(idAccount);
        sb.append("|");
        sb.append(email);
        sb.append("|");
        sb.append(passwordHash);
        sb.append("|");
        sb.append(created);
        sb.append("|");
        sb.append(updated);
        sb.append("|");
        sb.append(lastExpires);
        sb.append("|");
        sb.append(acceptTerms);
        return sb.toString();
    }

    public void setVerificationToken(VerificationToken verificationToken) {
        this.verificationToken = verificationToken;
        verificationToken.setAccount(this);
    }

    public void setResetToken(ResetToken resetToken) {
        this.resetToken = resetToken;
        resetToken.setAccount(this);
    }

    public void setResetPhoneToken(ResetPhoneToken resetPhoneToken) {
        this.resetPhoneToken = resetPhoneToken;
        resetPhoneToken.setAccount(this);
    }

    public void setResetEmailToken(ResetEmailToken resetEmailToken) {
        this.resetEmailToken = resetEmailToken;
        resetEmailToken.setAccount(this);
    }

    public void setListOfRole(List<Role> listOfRole) {
        this.listOfRole = listOfRole;
    }

    public void addToListOfRefreshToken(RefreshToken refreshToken) {
        this.listOfRefreshToken.add(refreshToken);
        setListOfRefreshToken(this.listOfRefreshToken);
    }

    public AuthProvider getProvider() {
        return provider;
    }

    public void setProvider(AuthProvider provider) {
        this.provider = provider;
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }

    public Boolean isAcceptTerms() {
        return this.acceptTerms;
    }

    public Shop getShop() {
        return this.shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Chat> getListOfChat() {
        return this.listOfChat;
    }

    public void setListOfChat(List<Chat> listOfChat) {
        this.listOfChat = listOfChat;
    }

    public List<Chat> getListOfChat2() {
        return this.listOfChat2;
    }

    public void setListOfChat2(List<Chat> listOfChat2) {
        this.listOfChat2 = listOfChat2;
    }

}
