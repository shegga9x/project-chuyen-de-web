package backend.backend.helpers.payload.dto;

public class CartItemDTO {
  private Integer idCustomer;

  private Integer idProduct;

  private Integer quantity;

  private CustomerDTO customer;

  private ProductDTO product;

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

  public Integer getQuantity() {
    return this.quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public CustomerDTO getCustomer() {
    return this.customer;
  }

  public void setCustomer(CustomerDTO customer) {
    this.customer = customer;
  }

  public ProductDTO getProduct() {
    return this.product;
  }

  public void setProduct(ProductDTO product) {
    this.product = product;
  }

}
