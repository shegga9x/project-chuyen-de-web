package backend.backend.persitence.model.ghn;

public class GHNCalFeeResponseModel {
    Integer total;
    Integer service_fee;
    Integer insurance_fee;
    Integer pick_station_fee;
    Integer coupon_value;
    Integer r2s_fee;

    public Integer getTotal() {
        return this.total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getService_fee() {
        return this.service_fee;
    }

    public void setService_fee(Integer service_fee) {
        this.service_fee = service_fee;
    }

    public Integer getInsurance_fee() {
        return this.insurance_fee;
    }

    public void setInsurance_fee(Integer insurance_fee) {
        this.insurance_fee = insurance_fee;
    }

    public Integer getPick_station_fee() {
        return this.pick_station_fee;
    }

    public void setPick_station_fee(Integer pick_station_fee) {
        this.pick_station_fee = pick_station_fee;
    }

    public Integer getCoupon_value() {
        return this.coupon_value;
    }

    public void setCoupon_value(Integer coupon_value) {
        this.coupon_value = coupon_value;
    }

    public Integer getR2s_fee() {
        return this.r2s_fee;
    }

    public void setR2s_fee(Integer r2s_fee) {
        this.r2s_fee = r2s_fee;
    }

    @Override
    public String toString() {
        return "{" +
            " total='" + getTotal() + "'" +
            ", service_fee='" + getService_fee() + "'" +
            ", insurance_fee='" + getInsurance_fee() + "'" +
            ", pick_station_fee='" + getPick_station_fee() + "'" +
            ", coupon_value='" + getCoupon_value() + "'" +
            ", r2s_fee='" + getR2s_fee() + "'" +
            "}";
    }

}