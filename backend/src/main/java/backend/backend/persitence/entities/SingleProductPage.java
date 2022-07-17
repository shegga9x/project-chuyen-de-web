/*
 * Created on 2022-05-06 ( 17:51:48 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import backend.backend.helpers.payload.dto.ProductDTO;
import backend.backend.helpers.utils.SubUtils;

/**
 * JPA entity class for "SingleProductPage"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "Single_Product_Page", schema = "dbo", catalog = "shop")
public class SingleProductPage implements Serializable {

    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_single_product_page", nullable = false)
    private Integer idSingleProductPage;

    // --- ENTITY DATA FIELDS
    @Column(name = "id_shop")
    private Integer idShop;

    @Column(name = "id_category")
    private Integer idCategory;

    @Column(name = "id_shop_category")
    private Integer idShopCategory;

    @Column(name = "name", length = 2147483647)
    private String name;

    @Column(name = "description", length = 2147483647)
    private String description;

    @Column(name = "status")
    private Byte status;

    // --- ENTITY LINKS ( RELATIONSHIP )
    @ManyToOne
    @JoinColumn(name = "id_category", referencedColumnName = "id_category", insertable = false, updatable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "id_shop", referencedColumnName = "id_shop", insertable = false, updatable = false)
    private Shop shop;

    @ManyToOne
    @JoinColumn(name = "id_shop_category", referencedColumnName = "id_shop_category", insertable = false, updatable = false)
    private ShopCategory shopCategory;

    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_single_product_page")
    private List<Product> listOfProduct;

    /**
     * Constructor
     */
    public SingleProductPage() {
        super();
    }

    // util method
    public List<ProductDTO> getProductDTOs() {
        List<ProductDTO> dtos = new ArrayList<>();
        for (Product product : this.listOfProduct) {
            dtos.add((ProductDTO) SubUtils.mapperObject(product, new ProductDTO()));
        }
        return dtos;
    }

    public void setProductDTOs(List<ProductDTO> productDTOs) {
        List<Product> listOfProduct = new ArrayList<>();
        for (ProductDTO productDTO : productDTOs) {
            Product product = (Product) SubUtils.mapperObject(productDTO, new Product());
            product.setSoldCount(0);
            listOfProduct.add(product);
        }

        this.listOfProduct = listOfProduct;
    }

    public String getPriceRange() {
        try {
            List<Double> prices = listOfProduct.stream().map(Product::getPrice).collect(Collectors.toList());
            Collections.sort(prices);
            return prices.get(0) + "-" + prices.get(prices.size() - 1);
        } catch (Exception e) {
            return "0-0";
        }
    }

    public String getImgURL() {
        return this.getFirstURLImage();
    }

    public Integer getTotalSoldCount() {
        return listOfProduct.stream().map(Product::getSoldCount).mapToInt(Integer::intValue).sum();

    }

    public Integer getTotalQuantity() {
        return listOfProduct.stream().map(Product::getQuantity).mapToInt(Integer::intValue).sum();

    }

    public Integer getLastChildId() {
        List<Integer> prices = listOfProduct.stream().map(Product::getIdProduct).collect(Collectors.toList());
        Collections.sort(prices);
        return prices.get(prices.size() - 1);
    }

    public Double getLowestPrice() {
        return Double.parseDouble(getPriceRange().split("-")[0]);

    }

    public Double getHighestPrice() {
        return Double.parseDouble(getPriceRange().split("-")[1]);

    }

    public String getFirstURLImage() {
        try {
            return listOfProduct.get(0).getImgUrl();
        } catch (Exception e) {
            return null;
        }
    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setIdSingleProductPage(Integer idSingleProductPage) {
        this.idSingleProductPage = idSingleProductPage;
    }

    public Integer getIdSingleProductPage() {
        return this.idSingleProductPage;
    }

    public void setIdShop(Integer idShop) {
        this.idShop = idShop;
    }

    public Integer getIdShop() {
        return this.idShop;
    }

    public void setIdCategory(Integer idCategory) {
        this.idCategory = idCategory;
    }

    public Integer getIdCategory() {
        return this.idCategory;
    }

    public void setIdShopCategory(Integer idShopCategory) {
        this.idShopCategory = idShopCategory;
    }

    public Integer getIdShopCategory() {
        return this.idShopCategory;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }

    // --- GETTERS FOR LINKS
    public Category getCategory() {
        return this.category;
    }

    public Shop getShop() {
        return this.shop;
    }

    public ShopCategory getShopCategory() {
        return this.shopCategory;
    }

    public List<Product> getListOfProduct() {
        return this.listOfProduct;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Byte getStatus() {
        return this.status;
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(idSingleProductPage);
        sb.append("|");
        sb.append(idShop);
        sb.append("|");
        sb.append(idCategory);
        sb.append("|");
        sb.append(idShopCategory);
        sb.append("|");
        sb.append(name);
        sb.append("|");
        sb.append(description);
        return sb.toString();
    }

}
