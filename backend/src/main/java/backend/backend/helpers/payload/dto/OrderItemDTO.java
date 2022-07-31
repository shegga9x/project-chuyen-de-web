package backend.backend.helpers.payload.dto;

public class OrderItemDTO {

    private Integer idOrderItem;

    private Integer idCustomer;

    private Integer idProduct;

    private Byte status;

    private Integer quantity;
    private Integer shippingPrice;

    private ProductDTO productDTO;

    private SingleProductPageDTO singleProductPageDTO;

    private CustomerDTO customerDTO;
    private Integer serviceId;
    private Integer serviceTypeId;

    public Integer getIdOrderItem() {
        return this.idOrderItem;
    }

    public void setIdOrderItem(Integer idOrderItem) {
        this.idOrderItem = idOrderItem;
    }

    public Integer getIdCustomer() {
        return this.idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public Integer getIdProduct() {
        return this.idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public Byte getStatus() {
        return this.status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public ProductDTO getProductDTO() {
        return this.productDTO;
    }

    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }

    public SingleProductPageDTO getSingleProductPageDTO() {
        return this.singleProductPageDTO;
    }

    public void setSingleProductPageDTO(SingleProductPageDTO singleProductPageDTO) {
        this.singleProductPageDTO = singleProductPageDTO;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public CustomerDTO getCustomerDTO() {
        return this.customerDTO;
    }

    public void setCustomerDTO(CustomerDTO customerDTO) {
        this.customerDTO = customerDTO;
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

    @Override
    public String toString() {
        return "{" +
                " idOrderItem='" + getIdOrderItem() + "'" +
                ", idCustomer='" + getIdCustomer() + "'" +
                ", idProduct='" + getIdProduct() + "'" +
                ", status='" + getStatus() + "'" +
                "}";
    }

}
