package backend.backend.persitence.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Reset_Email_Token", schema = "dbo", catalog = "shop")
public class ResetEmailToken implements Serializable {
    private static final long serialVersionUID = 1L;
    //--- ENTITY PRIMARY KEY
    @Id
    @Column(name = "ID_ACCOUNT", nullable = false)
    private Integer idAccount;

    //--- ENTITY DATA FIELDS
    @Column(name = "reset_token_content", length = 6)
    private String resetTokenContent;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "reset_token_expires")
    private Date resetTokenExpires;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "email_reset")
    private Date emailReset;


    //--- ENTITY LINKS ( RELATIONSHIP )
    @OneToOne
    @JoinColumn(name = "ID_ACCOUNT", referencedColumnName = "ID_ACCOUNT", insertable = false, updatable = false)
    @MapsId
    private Account account;


    /**
     * Constructor
     */
    public ResetEmailToken() {
        super();
    }

    public ResetEmailToken(int idAccount, Date emailReset, String resetTokenContent, Date resetTokenExpires) {
        this.idAccount = idAccount;
        this.emailReset = emailReset;
        this.resetTokenContent = resetTokenContent;
        this.resetTokenExpires = resetTokenExpires;
    }

    //--- GETTERS & SETTERS FOR FIELDS
    public void setIdAccount(Integer idAccount) {
        this.idAccount = idAccount;
    }

    public Integer getIdAccount() {
        return this.idAccount;
    }

    public void setResetTokenContent(String resetTokenContent) {
        this.resetTokenContent = resetTokenContent;
    }

    public String getResetTokenContent() {
        return this.resetTokenContent;
    }

    public void setResetTokenExpires(Date resetTokenExpires) {
        this.resetTokenExpires = resetTokenExpires;
    }

    public Date getResetTokenExpires() {
        return this.resetTokenExpires;
    }

    public void setPasswordReset(Date emailReset) {
        this.emailReset = emailReset;
    }

    public Date getPasswordReset() {
        return this.emailReset;
    }

    //--- GETTERS FOR LINKS
    public Account getAccount() {
        return this.account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    //--- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(idAccount);
        sb.append("|");
        sb.append(resetTokenContent);
        sb.append("|");
        sb.append(resetTokenExpires);
        sb.append("|");
        sb.append(emailReset);
        return sb.toString();
    }

}
