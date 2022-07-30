package backend.backend.helpers.payload.request.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GHNServiceRequest {
    @JsonProperty("shop_id")
    Integer shop_id;
    @JsonProperty("from_district")
    Integer from_district;
    @JsonProperty("to_district")
    Integer to_district;


    public GHNServiceRequest(Integer shop_id, Integer from_district, Integer to_district) {
        this.shop_id = shop_id;
        this.from_district = from_district;
        this.to_district = to_district;
    }


    public Integer getShop_id() {
        return this.shop_id;
    }

    public void setShop_id(Integer shop_id) {
        this.shop_id = shop_id;
    }

    public Integer getFrom_district() {
        return this.from_district;
    }

    public void setFrom_district(Integer from_district) {
        this.from_district = from_district;
    }

    public Integer getTo_district() {
        return this.to_district;
    }

    public void setTo_district(Integer to_district) {
        this.to_district = to_district;
    }

}