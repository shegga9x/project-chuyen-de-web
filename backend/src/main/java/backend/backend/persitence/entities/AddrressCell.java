/*
 * Created on 2022-07-19 ( 21:02:45 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.3.0
 */
package backend.backend.persitence.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.SQLInsert;

/**
 * JPA entity class for "AddrressCell"
 *
 * @author Telosys
 *
 */
@Entity
@Table(name = "Addrress_Cell", schema = "dbo", catalog = "shegga_shopvip132" )
@SQLInsert( sql="EXECUTE updateAddrress_Cell   @name = ?,@id = ?")
public class AddrressCell implements Serializable {

    private static final long serialVersionUID = 1L;

    // --- ENTITY PRIMARY KEY
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    // --- ENTITY DATA FIELDS
    @Column(name = "name", nullable = false, length = 50)
    private String name;

    // --- ENTITY LINKS ( RELATIONSHIP )
    @OneToMany(mappedBy = "addrressCell2")
    private List<Addrress> listOfAddrress2;

    @OneToMany(mappedBy = "addrressCell")
    private List<Addrress> listOfAddrress;

    @OneToMany(mappedBy = "addrressCell3")
    private List<Addrress> listOfAddrress3;

    /**
     * Constructor
     */
    public AddrressCell() {
        super();
    }

    // --- GETTERS & SETTERS FOR FIELDS
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return this.id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    // --- GETTERS FOR LINKS
    public List<Addrress> getListOfAddrress2() {
        return this.listOfAddrress2;
    }

    public List<Addrress> getListOfAddrress() {
        return this.listOfAddrress;
    }

    public List<Addrress> getListOfAddrress3() {
        return this.listOfAddrress3;
    }

    // --- toString specific method
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(id);
        sb.append("|");
        sb.append(name);
        return sb.toString();
    }

}
