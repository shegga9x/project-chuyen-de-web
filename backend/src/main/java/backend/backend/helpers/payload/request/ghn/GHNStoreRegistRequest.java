package backend.backend.helpers.payload.request.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GHNStoreRegistRequest {
    @JsonProperty("district_id")
    Integer district_id;
    @JsonProperty("ward_code")
    String ward_code;
    @JsonProperty("name")
    String name;
    @JsonProperty("phone")
    String phone;
    @JsonProperty("address")
    String address;

    public GHNStoreRegistRequest(Integer district_id, String ward_code, String name, String phone, String address) {
        this.district_id = district_id;
        this.ward_code = ward_code;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }

    public Integer getDistrict_id() {
        return this.district_id;
    }

    public void setDistrict_id(Integer district_id) {
        this.district_id = district_id;
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
}