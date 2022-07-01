package backend.backend.helpers.payload.response;

import java.util.HashMap;
import java.util.Map;

import backend.backend.helpers.payload.dto.OrderMapValue;

public class SalerOrderItemResponse {
    Map<String, OrderMapValue> map = new HashMap<>();
    int totalPage;

    public Map<String, OrderMapValue> getMap() {
        return this.map;
    }

    public void setMap(Map<String, OrderMapValue> map) {
        this.map = map;
    }

    public int getTotalPage() {
        return this.totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

}
