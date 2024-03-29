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

import backend.backend.helpers.payload.dto.CustomerDTO;
import backend.backend.helpers.payload.dto.ProductDTO;
import backend.backend.helpers.payload.dto.SingleProductPageDTO;
import backend.backend.helpers.utils.SubUtils;

/**
 * JPA entity class for "OrderItem"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "Order_Item", schema = "dbo", catalog = Account.CATALOG )
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

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "shipping_price")
    private Integer shippingPrice;
    @Column(name = "service_id")
    private Integer serviceId;
    @Column(name = "service_type_id")
    private Integer serviceTypeId;
    @Column(name = "order_ship_id")
    private String orderShipId;
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

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    // --- GETTERS FOR LINKS
    public Product getProduct() {
        return this.product;
    }

    public Integer getShippingPrice() {
        return this.shippingPrice;
    }

    public void setShippingPrice(Integer shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public Integer getServiceId() {
        return this.serviceId;
    }

    public void setServiceId(Integer serviceId) {
        this.serviceId = serviceId;
    }

    public Integer getServiceTypeId() {
        return this.serviceTypeId;
    }

    public void setServiceTypeId(Integer serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
    }

    public String getOrderShipId() {
        return this.orderShipId;
    }

    public void setOrderShipId(String orderShipId) {
        this.orderShipId = orderShipId;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    // --- GETTERS FOR DTO

    public ProductDTO getProductDTO() {
        return (ProductDTO) SubUtils.mapperObject(this.product, new ProductDTO());
    }

    public SingleProductPageDTO getSingleProductPageDTO() {
        return (SingleProductPageDTO) SubUtils.mapperObject(this.product.getSingleProductPage(),
                new SingleProductPageDTO());
    }

    public CustomerDTO getCustomerDTO() {
        return (CustomerDTO) SubUtils.mapperObject(this.customer, new CustomerDTO());
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
