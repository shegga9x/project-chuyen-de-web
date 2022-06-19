package backend.backend.helpers.payload.response;

public class OrderItemResponse {
    private int idOrderItem;
    private ProductResponse productResponse;
    private Byte status;

    public OrderItemResponse(int idOrderItem,ProductResponse productResponse,Byte status) {
        this.idOrderItem = idOrderItem;
        this.productResponse = productResponse;
        this.status = status;
    }

    public int getIdOrderItem() {
        return idOrderItem;
    }

    public void setIdOrderItem(int idOrderItem) {
        this.idOrderItem = idOrderItem;
    }

    public ProductResponse getProductResponse() {
        return productResponse;
    }

    public void setProductResponse(ProductResponse productResponse) {
        this.productResponse = productResponse;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }
}
