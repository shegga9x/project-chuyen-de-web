
package backend.backend.helpers.payload.dto;

import java.util.List;

public class SingleProductPageDTO {

    private Integer idSingleProductPage;

    private Integer idShop;

    private Integer idCategory;

    private Integer idShopCategory;

    private String name;

    private String description;

    private String priceRange;

    private String imgURL;

    private Byte status;

    private List<ProductDTO> productDTOs;

    public Integer getIdSingleProductPage() {
        return this.idSingleProductPage;
    }

    public void setIdSingleProductPage(Integer idSingleProductPage) {
        this.idSingleProductPage = idSingleProductPage;
    }

    public Integer getIdShop() {
        return this.idShop;
    }

    public void setIdShop(Integer idShop) {
        this.idShop = idShop;
    }

    public Integer getIdCategory() {
        return this.idCategory;
    }

    public void setIdCategory(Integer idCategory) {
        this.idCategory = idCategory;
    }

    public Integer getIdShopCategory() {
        return this.idShopCategory;
    }

    public void setIdShopCategory(Integer idShopCategory) {
        this.idShopCategory = idShopCategory;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriceRange() {
        return this.priceRange;
    }

    public void setPriceRange(String priceRange) {
        this.priceRange = priceRange;
    }

    public String getImgURL() {
        return this.imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public List<ProductDTO> getProductDTOs() {
        return this.productDTOs;
    }

    public void setProductDTOs(List<ProductDTO> productDTOs) {
        this.productDTOs = productDTOs;
    }

    public Byte getStatus() {
        return this.status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "{" +
                " idSingleProductPage='" + getIdSingleProductPage() + "'" +
                ", idShop='" + getIdShop() + "'" +
                ", idCategory='" + getIdCategory() + "'" +
                ", idShopCategory='" + getIdShopCategory() + "'" +
                ", name='" + getName() + "'" +
                ", description='" + getDescription() + "'" +
                ", priceRange='" + getPriceRange() + "'" +
                ", imgURL='" + getImgURL() + "'" +
                ", productDTOs='" + getProductDTOs() + "'" +
                "}";
    }

}