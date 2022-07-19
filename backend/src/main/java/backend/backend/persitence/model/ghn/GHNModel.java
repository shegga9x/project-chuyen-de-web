package backend.backend.persitence.model.ghn;

public class GHNModel {
    String ward_code;
    String name;
    String phone;
    String address;
    Integer district_id;
    Integer province_id;

    public GHNModel(String ward_code, String name, String phone, String address, Integer district_id,
            Integer province_id) {
        this.ward_code = ward_code;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.district_id = district_id;
        this.province_id = province_id;
    }

    public String getWard_code() {
        return this.ward_code;
    }

    public void setWard_code(String ward_code) {
        this.ward_code = ward_code;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getDistrict_id() {
        return this.district_id;
    }

    public void setDistrict_id(Integer district_id) {
        this.district_id = district_id;
    }

    public Integer getProvince_id() {
        return this.province_id;
    }

    public void setProvince_id(Integer province_id) {
        this.province_id = province_id;
    }

    @Override
    public String toString() {
        return "{" +
                " ward_code='" + getWard_code() + "'" +
                ", name='" + getName() + "'" +
                ", phone='" + getPhone() + "'" +
                ", address='" + getAddress() + "'" +
                ", district_id='" + getDistrict_id() + "'" +
                ", province_id='" + getProvince_id() + "'" +
                "}";
    }

}
