package backend.backend.helpers.payload.request.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;

import backend.backend.persitence.model.ghn.GHNCalFeeResponseModel;

public class GHNCalFeeResponse {
    @JsonProperty("code")
    Integer code;
    @JsonProperty("message")
    String message;
    @JsonProperty("data")
    GHNCalFeeResponseModel data;



    public Integer getCode() {
        return this.code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public GHNCalFeeResponseModel getData() {
        return this.data;
    }

    public void setData(GHNCalFeeResponseModel data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "{" +
            " code='" + getCode() + "'" +
            ", message='" + getMessage() + "'" +
            ", data='" + getData() + "'" +
            "}";
    }

}