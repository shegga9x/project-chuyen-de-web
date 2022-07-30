package backend.backend.persitence.model.ghn;

public class GHNServiceModel {
    Integer service_id;
    String short_name;
    Integer service_type_id;

    public Integer getService_id() {
        return this.service_id;
    }

    public void setService_id(Integer service_id) {
        this.service_id = service_id;
    }

    public String getShort_name() {
        return this.short_name;
    }

    public void setShort_name(String short_name) {
        this.short_name = short_name;
    }

    public Integer getService_type_id() {
        return this.service_type_id;
    }

    public void setService_type_id(Integer service_type_id) {
        this.service_type_id = service_type_id;
    }


    @Override
    public String toString() {
        return "{" +
            " service_id='" + getService_id() + "'" +
            ", short_name='" + getShort_name() + "'" +
            ", service_type_id='" + getService_type_id() + "'" +
            "}";
    }

}
