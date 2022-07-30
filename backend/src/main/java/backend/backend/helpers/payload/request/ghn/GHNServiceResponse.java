package backend.backend.helpers.payload.request.ghn;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import backend.backend.persitence.model.ghn.GHNServiceModel;

public class GHNServiceResponse {
    @JsonProperty("code")
    Integer code;
    @JsonProperty("message")
    String message;
    @JsonProperty("code_message_value")
    String code_message_value;
    @JsonProperty("data")
    List<GHNServiceModel> data;



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

    public String getCode_message_value() {
        return this.code_message_value;
    }

    public void setCode_message_value(String code_message_value) {
        this.code_message_value = code_message_value;
    }

    public List<GHNServiceModel> getData() {
        return this.data;
    }

    public void setData(List<GHNServiceModel> data) {
        this.data = data;
    }


}