/*
 * Created on 2022-04-19 ( 18:58:27 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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

/**
 * JPA entity class for "Account"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name="ACCOUNT", schema="dbo", catalog="shop" )
public class Account implements Serializable {

    private static final long serialVersionUID = 1L;

    //--- ENTITY PRIMARY KEY 
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="ID_ACCOUNT", nullable=false)
    private Integer    idAccount ;

    //--- ENTITY DATA FIELDS 
    @Column(name="email", nullable=false, length=50)
    private String     email ;

    @Column(name="password_hash", nullable=false, length=255)
    private String     passwordHash ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created")
    private Date       created ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated")
    private Date       updated ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="last_expires")
    private Date       lastExpires ;

    @Column(name="accept_terms")
    private Boolean    acceptTerms ;


    //--- ENTITY LINKS ( RELATIONSHIP )
    @OneToMany(mappedBy="account",cascade = CascadeType.ALL)
    private List<RefreshToken> listOfRefreshToken ; 

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="ACCOUNT_Has_Role", 
      joinColumns=@JoinColumn(name="ID_ACCOUNT", referencedColumnName="ID_ACCOUNT"),
      inverseJoinColumns=@JoinColumn(name="id", referencedColumnName="id")
     )
    private List<Role> listOfRole ; 
    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy="account",cascade = CascadeType.ALL)
    private ResetToken resetToken ; 
    
    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy="account",cascade = CascadeType.ALL)
    private VerificationToken verificationToken ; 

    @PrimaryKeyJoinColumn
    @OneToOne(mappedBy="account",cascade = CascadeType.ALL)
    private AccountDetail accountDetail ; 


    /**
     * Constructor
     */
    public Account() {
		super();
    }
    
    //--- GETTERS & SETTERS FOR FIELDS
    public void setIdAccount( Integer idAccount ) {
        this.idAccount = idAccount ;
    }
    public Integer getIdAccount() {
        return this.idAccount;
    }

    public void setEmail( String email ) {
        this.email = email ;
    }
    public String getEmail() {
        return this.email;
    }

    public void setPasswordHash( String passwordHash ) {
        this.passwordHash = passwordHash ;
    }
    public String getPasswordHash() {
        return this.passwordHash;
    }

    public void setCreated( Date created ) {
        this.created = created ;
    }
    public Date getCreated() {
        return this.created;
    }

    public void setUpdated( Date updated ) {
        this.updated = updated ;
    }
    public Date getUpdated() {
        return this.updated;
    }

    public void setLastExpires( Date lastExpires ) {
        this.lastExpires = lastExpires ;
    }
    public Date getLastExpires() {
        return this.lastExpires;
    }

    public void setAcceptTerms( Boolean acceptTerms ) {
        this.acceptTerms = acceptTerms ;
    }
    public Boolean getAcceptTerms() {
        return this.acceptTerms;
    }

    //--- GETTERS FOR LINKS
    public List<RefreshToken> getListOfRefreshToken() {
        return this.listOfRefreshToken;
    } 
    public void setListOfRefreshToken(List<RefreshToken> listOfRefreshToken) {
         this.listOfRefreshToken =listOfRefreshToken;
    } 

    public List<Role> getListOfRole() {
        return this.listOfRole;
    } 

    public ResetToken getResetToken() {
        return this.resetToken;
    } 

    public VerificationToken getVerificationToken() {
        return this.verificationToken;
    } 

    public AccountDetail getAccountDetail() {
        return this.accountDetail;
    } 


    //--- toString specific method
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

    public void setAccountDetail(AccountDetail accountDetail) {
        this.accountDetail = accountDetail;
        accountDetail.setAccount(this);
    }

    public void setListOfRole(List<Role> listOfRole) {
        this.listOfRole = listOfRole;
    }
    public void addToListOfRefreshToken(RefreshToken refreshToken) {
        this.listOfRefreshToken.add(refreshToken);
        setListOfRefreshToken(this.listOfRefreshToken);
    }
}
