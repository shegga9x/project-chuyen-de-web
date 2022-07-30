package backend.backend.helpers.payload.response;

public class ProductResponse {

    private Integer idProduct;

    private Integer idSingleProductPage;

    private String name;

    private Integer quantity;

    private Integer soldCount;

    private Double price;

    private String imgUrl;

    private Integer idShop;

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public Integer getIdSingleProductPage() {
        return idSingleProductPage;
    }

    public void setIdSingleProductPage(Integer idSingleProductPage) {
        this.idSingleProductPage = idSingleProductPage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getSoldCount() {
        return soldCount;
    }

    public void setSoldCount(Integer soldCount) {
        this.soldCount = soldCount;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }


    public Integer getIdShop() {
        return this.idShop;
    }

    public void setIdShop(Integer idShop) {
        this.idShop = idShop;
    }

    @Override
    public String toString() {
        return "ProductResponse{" +
                "idProduct=" + idProduct +
                ", idSingleProductPage=" + idSingleProductPage +
                ", name='" + name + '\'' +
                ", quantity=" + quantity +
                ", soldCount=" + soldCount +
                ", price=" + price +
                ", imgUrl='" + imgUrl + '\'' +
                '}';
    }
}
