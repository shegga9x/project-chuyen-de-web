package backend.backend.helpers.payload.request;

public class CartItemRequest {
    ProductRequest product;
    int quantity;

    public ProductRequest getProduct() {
        return product;
    }

    public void setProduct(ProductRequest product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "CartItemRequest{" +
                "product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
