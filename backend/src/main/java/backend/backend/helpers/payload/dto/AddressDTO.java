package backend.backend.helpers.payload.dto;

public class AddressDTO {

    private AddrressCellDTO provinceId;

    private AddrressCellDTO districtId;

    private AddrressCellDTO wardCode;

    private String subLocate;

    public AddressDTO(AddrressCellDTO provinceId, AddrressCellDTO districtId, AddrressCellDTO wardCode,
            String subLocate) {
        this.provinceId = provinceId;
        this.districtId = districtId;
        this.wardCode = wardCode;
        this.subLocate = subLocate;
    }

    public AddressDTO() {

    }

    public Integer getWardCode1() {
        return this.wardCode.getId();
    }

    public Integer getProvinceId1() {
        return this.provinceId.getId();
    }

    public Integer getDistrictId1() {
        return this.districtId.getId();
    }

    public AddrressCellDTO getProvinceId() {
        return this.provinceId;
    }

    public AddrressCellDTO getDistrictId() {
        return this.districtId;
    }

    public AddrressCellDTO getWardCode() {
        return this.wardCode;
    }

    public void setProvinceId(AddrressCellDTO provinceId) {
        this.provinceId = provinceId;
    }

    public void setDistrictId(AddrressCellDTO districtId) {
        this.districtId = districtId;
    }

    public void setWardCode(AddrressCellDTO wardCode) {
        this.wardCode = wardCode;
    }


    public AddrressCellDTO getProvince() {
        return this.provinceId;
    }

    public AddrressCellDTO getDistrict() {
        return this.districtId;
    }

    public AddrressCellDTO getWard() {
        return this.wardCode;
    }


    public String getSubLocate() {
        return this.subLocate;
    }

    public void setSubLocate(String subLocate) {
        this.subLocate = subLocate;
    }

    @Override
    public String toString() {
        return "{" +
            " provinceId='" + getProvinceId() + "'" +
            ", districtId='" + getDistrictId() + "'" +
            ", wardCode='" + getWardCode() + "'" +
            ", subLocate='" + getSubLocate() + "'" +
            "}";
    }

}
