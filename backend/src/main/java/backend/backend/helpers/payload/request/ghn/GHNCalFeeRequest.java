package backend.backend.helpers.payload.request.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GHNCalFeeRequest {
    @JsonProperty("from_district_id")
    Integer from_district_id;
    @JsonProperty("service_id")
    Integer service_id;
    @JsonProperty("service_type_id")
    Integer service_type_id;
    @JsonProperty("to_district_id")
    Integer to_district_id;
    @JsonProperty("height")
    Integer height;
    @JsonProperty("length")
    Integer length;
    @JsonProperty("weight")
    Integer weight;
    @JsonProperty("width")
    Integer width;
    @JsonProperty("insurance_value")
    Integer insurance_value;
    @JsonProperty("to_ward_code")
    String to_ward_code;
    @JsonProperty("coupon")
    String coupon;

    public GHNCalFeeRequest(Integer from_district_id, Integer service_id, Integer service_type_id, Integer to_district_id, Integer height, Integer length, Integer weight, Integer width, Integer insurance_value, String to_ward_code, String coupon) {
        this.from_district_id = from_district_id;
        this.service_id = service_id;
        this.service_type_id = service_type_id;
        this.to_district_id = to_district_id;
        this.height = height;
        this.length = length;
        this.weight = weight;
        this.width = width;
        this.insurance_value = insurance_value;
        this.to_ward_code = to_ward_code;
        this.coupon = coupon;
    }

    public Integer getFrom_district_id() {
        return this.from_district_id;
    }

    public void setFrom_district_id(Integer from_district_id) {
        this.from_district_id = from_district_id;
    }

    public Integer getService_id() {
        return this.service_id;
    }

    public void setService_id(Integer service_id) {
        this.service_id = service_id;
    }

    public Integer getService_type_id() {
        return this.service_type_id;
    }

    public void setService_type_id(Integer service_type_id) {
        this.service_type_id = service_type_id;
    }

    public Integer getTo_district_id() {
        return this.to_district_id;
    }

    public void setTo_district_id(Integer to_district_id) {
        this.to_district_id = to_district_id;
    }

    public Integer getHeight() {
        return this.height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getLength() {
        return this.length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Integer getWeight() {
        return this.weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getWidth() {
        return this.width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getInsurance_value() {
        return this.insurance_value;
    }

    public void setInsurance_value(Integer insurance_value) {
        this.insurance_value = insurance_value;
    }

    public String getTo_ward_code() {
        return this.to_ward_code;
    }

    public void setTo_ward_code(String to_ward_code) {
        this.to_ward_code = to_ward_code;
    }

    public String getCoupon() {
        return this.coupon;
    }

    public void setCoupon(String coupon) {
        this.coupon = coupon;
    }


}
