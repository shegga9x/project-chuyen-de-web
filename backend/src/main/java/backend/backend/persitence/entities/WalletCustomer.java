/*
 * Created on 2022-05-06 ( 17:51:48 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.*;

/**
 * JPA entity class for "WalletCustomer"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name="Wallet_Customer", schema="dbo", catalog="shop" )
public class WalletCustomer implements Serializable {

    private static final long serialVersionUID = 1L;

    //--- ENTITY PRIMARY KEY 
    @Id
    @Column(name="id_customer", nullable=false)
    private Integer    idCustomer ;

    //--- ENTITY DATA FIELDS 
    @Column(name="total")
    private BigDecimal total ;


    //--- ENTITY LINKS ( RELATIONSHIP )
    @OneToOne
    @JoinColumn(name="id_customer", referencedColumnName="id_customer", insertable=false, updatable=false)
    private Customer   customer ; 


    /**
     * Constructor
     */
    public WalletCustomer() {
		super();
    }
    
    //--- GETTERS & SETTERS FOR FIELDS
    public void setIdCustomer( Integer idCustomer ) {
        this.idCustomer = idCustomer ;
    }
    public Integer getIdCustomer() {
        return this.idCustomer;
    }

    public void setTotal( BigDecimal total ) {
        this.total = total ;
    }
    public BigDecimal getTotal() {
        return this.total;
    }

    //--- GETTERS FOR LINKS
    public Customer getCustomer() {
        return this.customer;
    } 

    //--- toString specific method
	@Override
    public String toString() { 
        StringBuilder sb = new StringBuilder(); 
        sb.append(idCustomer);
        sb.append("|");
        sb.append(total);
        return sb.toString(); 
    } 

}