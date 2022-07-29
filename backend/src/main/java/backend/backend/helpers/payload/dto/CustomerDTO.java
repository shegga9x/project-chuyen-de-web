
package backend.backend.helpers.payload.dto;

import java.util.Date;

public class CustomerDTO {

    private Integer idCustomer;

    private String name;

    private String email;

    private String phoneNumber;

    private String gender;

    private Date birthday;

    private String imgUrl;

    private String addressId;

    private AddressDTO addressDTO;

    public Integer getIdCustomer() {
        return this.idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthday() {
        return this.birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getImgUrl() {
        return this.imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getAddressId() {
        return this.addressId;
    }

    public void setAddressId(String addressId) {
        this.addressId = addressId;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public AddressDTO getAddressDTO() {
        return this.addressDTO;
    }

    public void setAddressDTO(AddressDTO addressDTO) {
        this.addressDTO = addressDTO;
    }

}