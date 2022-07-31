package backend.backend.helpers.payload.response;

public class OrderItemResponse {
    private int idOrderItem;
    private ProductResponse product;
    private Byte status;
    private int quantity;
    private int shippingPrice;

    public OrderItemResponse(int idOrderItem, ProductResponse product, Byte status, int quantity, int shippingPrice) {
        this.idOrderItem = idOrderItem;
        this.product = product;
        this.status = status;
        this.quantity = quantity;
        this.shippingPrice = shippingPrice;
    }

    public int getIdOrderItem() {
        return idOrderItem;
    }

    public void setIdOrderItem(int idOrderItem) {
        this.idOrderItem = idOrderItem;
    }

    public ProductResponse getProduct() {
        return product;
    }

    public void setProduct(ProductResponse product) {
        this.product = product;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getShippingPrice() {
        return shippingPrice;
    }

    public void setShippingPrice(int shippingPrice) {
        this.shippingPrice = shippingPrice;
    }
}
