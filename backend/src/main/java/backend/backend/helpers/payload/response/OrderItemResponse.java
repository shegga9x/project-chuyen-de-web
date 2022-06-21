package backend.backend.helpers.payload.response;

public class OrderItemResponse {
    private int idOrderItem;
    private ProductResponse product;
    private Byte status;

    public OrderItemResponse(int idOrderItem, ProductResponse product, Byte status) {
        this.idOrderItem = idOrderItem;
        this.product = product;
        this.status = status;
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
}
