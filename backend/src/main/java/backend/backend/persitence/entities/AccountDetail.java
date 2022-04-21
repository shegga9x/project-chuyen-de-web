/*
 * Created on 2022-04-19 ( 18:58:27 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

/**
 * JPA entity class for "AccountDetail"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "ACCOUNT_Detail", schema = "dbo", catalog = "shop")
public class AccountDetail implements Serializable {

    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @Column(name = "ID_ACCOUNT", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idAccount;

    // --- ENTITY DATA FIELDS
    @Column(name = "first_name", length = 2147483647)
    private String firstName;

    @Column(name = "last_name", length = 2147483647)
    private String lastName;

    @Column(name = "address", length = 50)
    private String address;

    @Column(name = "phone_number", length = 10)
    private String phoneNumber;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "birthday")
    private Date birthday;

    private String imageUrl;

    // --- ENTITY LINKS ( RELATIONSHIP )
    @OneToOne
    @JoinColumn(name = "ID_ACCOUNT", referencedColumnName = "ID_ACCOUNT", insertable = false, updatable = false)
    @MapsId
    private Account account;

    /**
     * Constructor
     */
    public AccountDetail() {
        super();
    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setIdAccount(Integer idAccount) {
        this.idAccount = idAccount;
    }

    public Integer getIdAccount() {
        return this.idAccount;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress() {
        return this.address;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Date getBirthday() {
        return this.birthday;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    // --- GETTERS FOR LINKS
    public Account getAccount() {
        return this.account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(idAccount);
        sb.append("|");
        sb.append(firstName);
        sb.append("|");
        sb.append(lastName);
        sb.append("|");
        sb.append(address);
        sb.append("|");
        sb.append(phoneNumber);
        sb.append("|");
        sb.append(birthday);
        return sb.toString();
    }

}