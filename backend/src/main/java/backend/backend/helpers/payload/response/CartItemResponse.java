package backend.backend.helpers.payload.response;

public class CartItemResponse {

    private Integer idCustomer;

    private ProductResponse product;

    private Integer quantity;

    public CartItemResponse(Integer idCustomer, ProductResponse product, Integer quantity) {
        this.idCustomer = idCustomer;
        this.product = product;
        this.quantity = quantity;
    }

    public Integer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public ProductResponse getproduct() {
        return product;
    }

    public void setproduct(ProductResponse product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
