package backend.backend.helpers.payload.request;

import backend.backend.helpers.payload.response.OrderItemResponse;

import java.util.List;

public class DigitalSignatureRequest {
    List<OrderItemResponse> listOrderItem;
    String imageBase64;
    String userName;

    public DigitalSignatureRequest(List<OrderItemResponse> listOrderItem, String imageBase64, String userName) {
        this.listOrderItem = listOrderItem;
        this.imageBase64 = imageBase64;
        this.userName = userName;
    }

    public List<OrderItemResponse> getListOrderItem() {
        return listOrderItem;
    }

    public void setListOrderItem(List<OrderItemResponse> listOrderItem) {
        this.listOrderItem = listOrderItem;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
