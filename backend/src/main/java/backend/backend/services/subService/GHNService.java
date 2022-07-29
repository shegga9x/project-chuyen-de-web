package backend.backend.services.subService;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import backend.backend.helpers.payload.request.ghn.GHNStoreRegistRequest;
import backend.backend.helpers.utils.GHNUltils;

@Service
public class GHNService {
    public String token = "133bb4b2-065a-11ed-ad26-3a4226f77ff0";
    public String ghnAPI = "https://online-gateway.ghn.vn/shiip/public-api/v2/";
    RestTemplate restTemplate;

    public GHNService() {
        restTemplate = new RestTemplate();
    }

    public String getProvince() {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province";
        return GHNUltils.getResponse(restTemplate, token, null, url, "").getBody();
    }

    public String getDistrict(int province_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district";
        return GHNUltils.getResponse(restTemplate, token, null, url, Map.of("province_id", province_id)).getBody();
    }

    public String getWard(int district_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id";
        return GHNUltils.getResponse(restTemplate, token, null, url, Map.of("district_id", district_id)).getBody();
    }

    public String createStore(GHNStoreRegistRequest ghnModel) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shop/register";
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> map;
        try {
            map = mapper.readValue(GHNUltils.getResponse(restTemplate, token, null, url, ghnModel).getBody(),
                    Map.class);
            if (map.get("message").toString().equals("Success")) {
                return (map.get("data").toString().split("=")[1].replace("}", ""));
            }
        } catch (Exception e) {
        }
        return null;

    }

    public String getGen(String[] order_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/a5/gen-token";
        return GHNUltils.getResponse(restTemplate, token, null, url, Map.of("order_codes", order_id)).getBody();
    }

    public String printOrder(String[] order_id) {
        // System.out.println(getGen(order_id));
        String url = "https://online-gateway.ghn.vn/a5/public-api/print52x70?token="
                + "6ce4b6da-07e5-11ed-80c9-360847801e43";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Token", token);
        headers.set("ShopId", null);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET,
                entity, String.class);
        return response.getBody();
    }

}
