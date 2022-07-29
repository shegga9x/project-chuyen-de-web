package backend.backend.helpers.payload.dto;

public class ShopDTO {
    private Integer idShop;
    private String name;
    private String phoneNumber;
    private String imgUrl;
    private String description;
    private AddressDTO addressDTO;

    public Integer getIdShop() {
        return this.idShop;
    }

    public void setIdShop(Integer idShop) {
        this.idShop = idShop;
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

    public String getImgUrl() {
        return this.imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public AddressDTO getAddressDTO() {
        return this.addressDTO;
    }

    public void setAddressDTO(AddressDTO addressDTO) {
        this.addressDTO = addressDTO;
    }

    



}
