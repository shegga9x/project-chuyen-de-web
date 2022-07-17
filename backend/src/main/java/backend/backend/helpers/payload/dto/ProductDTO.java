
package backend.backend.helpers.payload.dto;

public class ProductDTO {

    private String name;

    private Integer quantity;

    private Integer soldCount;

    private Double price;

    private String imgUrl;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getSoldCount() {
        return this.soldCount;
    }

    public void setSoldCount(Integer soldCount) {
        this.soldCount = soldCount;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return this.imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    @Override
    public String toString() {
        return "ProductDTO{" +
                "name='" + name + '\'' +
                ", quantity=" + quantity +
                ", soldCount=" + soldCount +
                ", price=" + price +
                ", imgUrl='" + imgUrl + '\'' +
                '}';
    }
}