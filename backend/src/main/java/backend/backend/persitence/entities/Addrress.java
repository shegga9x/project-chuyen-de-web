/*
 * Created on 2022-07-19 ( 21:02:45 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.SQLInsert;

import backend.backend.helpers.payload.dto.AddrressCellDTO;
import backend.backend.helpers.utils.SubUtils;

/**
 * JPA entity class for "Addrress"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "Addrress", schema = "dbo", catalog = Account.CATALOG )
@SQLInsert( sql="EXECUTE updateAddrress    @district_id = ?, @province_id = ?,@sub_locate = ?, @ward_code = ?, @id = ?")
public class Addrress implements Serializable {

    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    // --- ENTITY DATA FIELDS
    @Column(name = "province_id", nullable = false)
    private Integer provinceId;

    @Column(name = "district_id", nullable = false)
    private Integer districtId;

    @Column(name = "ward_code", nullable = false)
    private Integer wardCode;

    @Column(name = "sub_locate", nullable = false, length = 50)
    private String subLocate;

    // --- ENTITY LINKS ( RELATIONSHIP )
    @OneToOne(mappedBy = "addrress")
    private Customer listOfCustomer;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "province_id", referencedColumnName = "id", insertable = false, updatable = false)
    private AddrressCell addrressCell3;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "district_id", referencedColumnName = "id", insertable = false, updatable = false)
    private AddrressCell addrressCell2;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ward_Code", referencedColumnName = "id", insertable = false, updatable = false)
    private AddrressCell addrressCell;

    @OneToOne(mappedBy = "addrress")
    private Shop shop;

    /**
     * Constructor
     */
    public Addrress() {
        super();
    }

    public Addrress(Integer provinceId, Integer districtId, Integer wardCode, String subLocate) {
        this.provinceId = provinceId;
        this.districtId = districtId;
        this.wardCode = wardCode;
        this.subLocate = subLocate;

    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return this.id;
    }

    public void setSubLocate(String subLocate) {
        this.subLocate = subLocate;
    }

    public String getSubLocate() {
        return this.subLocate;
    }

    // --- GETTERS FOR LINKS
    public Customer getListOfCustomer() {
        return this.listOfCustomer;
    }

    public AddrressCell getAddrressCell3() {
        return this.addrressCell3;
    }

    public AddrressCell getAddrressCell2() {
        return this.addrressCell2;
    }

    public AddrressCell getAddrressCell() {
        return this.addrressCell;
    }

    public Shop getShop() {
        return this.shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    public void setProvinceId(AddrressCellDTO provinceId) {
        this.provinceId = provinceId.getId();
    }

    public void setDistrictId(AddrressCellDTO districtId) {
        this.districtId = districtId.getId();
    }

    public void setWardCode(AddrressCellDTO wardCode) {
        this.wardCode = wardCode.getId();
    }

    public Integer getProvinceId1() {
        return this.provinceId;
    }

    public Integer getDistrictId1() {
        return this.districtId;
    }

    public Integer getWardCode1() {
        return this.wardCode;
    }

    public void setProvince(AddrressCellDTO province) {
        this.addrressCell3 = (AddrressCell) SubUtils.mapperObject(province, new AddrressCell());
    }

    public void setDistrict(AddrressCellDTO district) {
        this.addrressCell2 = (AddrressCell) SubUtils.mapperObject(district, new AddrressCell());
    }

    public void setWard(AddrressCellDTO ward) {
        this.addrressCell = (AddrressCell) SubUtils.mapperObject(ward, new AddrressCell());
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(id);
        sb.append("|");
        sb.append(provinceId);
        sb.append("|");
        sb.append(districtId);
        sb.append("|");
        sb.append(wardCode);
        sb.append("|");
        sb.append(subLocate);
        return sb.toString();
    }

}
