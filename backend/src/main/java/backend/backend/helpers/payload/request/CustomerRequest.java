package backend.backend.helpers.payload.request;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import backend.backend.helpers.payload.dto.AddressDTO;

public class CustomerRequest {

    private Integer idCustomer;

    private String name;

    private String email;

    private String phoneNumber;

    private String gender;

    private String birthday;

    private String imgUrl;

    private AddressDTO addressDTO;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthday() {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(birthday);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void setBirthday(Date birthday) {
        this.birthday = new SimpleDateFormat("yyyy-MM-dd").format(birthday);
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public AddressDTO getAddressDTO() {
        return this.addressDTO;
    }

    public void setAddressDTO(AddressDTO addressDTO) {
        this.addressDTO = addressDTO;
    }

}
