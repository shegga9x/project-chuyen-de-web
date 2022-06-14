/*
 * Created on 2022-05-06 ( 17:51:47 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * JPA entity class for "Category"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "Category", schema = "dbo", catalog = "shop")
public class Category implements Serializable {

    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_category", nullable = false)
    private Integer idCategory;

    // --- ENTITY DATA FIELDS
    @Column(name = "id_category_parent")
    private Integer idCategoryParent;

    @Column(name = "name", length = 2147483647)
    private String name;

    // --- ENTITY LINKS ( RELATIONSHIP )
    @ManyToOne
    @JoinColumn(name = "id_category_parent", referencedColumnName = "id_category", insertable = false, updatable = false)
    private Category categoryParent;

    @OneToMany(mappedBy = "categoryParent")
    private List<Category> listOfCategory;

    @OneToMany(mappedBy = "category")
    private List<SingleProductPage> listOfSingleProductPage;

    /**
     * Constructor
     */
    public Category() {
        super();
    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setIdCategory(Integer idCategory) {
        this.idCategory = idCategory;
    }

    public Integer getIdCategory() {
        return this.idCategory;
    }

    public void setIdCategoryParent(Integer idCategoryParent) {
        this.idCategoryParent = idCategoryParent;
    }

    public Integer getIdCategoryParent() {
        return this.idCategoryParent;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    // --- GETTERS FOR LINKS
    public Category getCategoryParent() {
        return this.categoryParent;
    }

    public List<Category> getListOfCategory() {
        return this.listOfCategory;
    }

    public List<SingleProductPage> getListOfSingleProductPage() {
        return this.listOfSingleProductPage;
    }

    public List<SingleProductPage> getListOfSingleProductPageFromChild() {
        List<SingleProductPage> result = listOfSingleProductPage;
        for (Category category : listOfCategory) {
            result.addAll(category.getListOfSingleProductPageFromChild());
        }
        return result;
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(idCategory);
        sb.append("|");
        sb.append(idCategoryParent);
        sb.append("|");
        sb.append(name);
        return sb.toString();
    }

}
