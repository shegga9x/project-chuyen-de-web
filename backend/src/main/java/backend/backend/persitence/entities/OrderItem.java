/*
 * Created on 2022-05-06 ( 17:51:47 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * JPA entity class for "OrderItem"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "Order_Item", schema = "dbo", catalog = "shop")
public class OrderItem implements Serializable {

    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_item", nullable = false)
    private Integer idOrderItem;

    // --- ENTITY DATA FIELDS
    @Column(name = "id_customer")
    private Integer idCustomer;

    @Column(name = "id_product")
    private Integer idProduct;

    @Column(name = "status")
    private Byte status;

    // --- ENTITY LINKS ( RELATIONSHIP )
    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "id_product", insertable = false, updatable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "id_customer", referencedColumnName = "id_customer", insertable = false, updatable = false)
    private Customer customer;

    /**
     * Constructor
     */
    public OrderItem() {
        super();
    }

    public OrderItem(Integer idOrderItem, Integer idCustomer, Integer idProduct, Byte status) {
        this.idOrderItem = idOrderItem;
        this.idCustomer = idCustomer;
        this.idProduct = idProduct;
        this.status = status;

    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setIdOrderItem(Integer idOrderItem) {
        this.idOrderItem = idOrderItem;
    }

    public Integer getIdOrderItem() {
        return this.idOrderItem;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public Integer getIdCustomer() {
        return this.idCustomer;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public Integer getIdProduct() {
        return this.idProduct;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Byte getStatus() {
        return this.status;
    }

    // --- GETTERS FOR LINKS
    public Product getProduct() {
        return this.product;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(idOrderItem);
        sb.append("|");
        sb.append(idCustomer);
        sb.append("|");
        sb.append(idProduct);
        sb.append("|");
        sb.append(status);
        return sb.toString();
    }

    public byte[] toByteArray() throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(this);
        oos.flush();
        return bos.toByteArray();

    }

}
