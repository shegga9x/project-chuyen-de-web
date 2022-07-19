package backend.backend.services.subService;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import backend.backend.helpers.payload.request.ghn.GHNStoreRegistRequest;
import backend.backend.helpers.utils.GHNUltils;
import backend.backend.helpers.utils.SubUtils;

@Service
public class GHNService {
    public String token = "133bb4b2-065a-11ed-ad26-3a4226f77ff0";
    public String ghnAPI = "https://online-gateway.ghn.vn/shiip/public-api/v2/";
    public String shopID = "3107502";
    RestTemplate restTemplate;

    public GHNService() {
        restTemplate = new RestTemplate();
    }

    public void getProvince() {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province";
        System.out.println(GHNUltils.getResponse(token, null, url, "").getBody());
    }

    public void getDistrict(int province_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district";
        System.out.println(GHNUltils.getResponse(token, null, url, province_id).getBody());
    }

    public void createStore(GHNStoreRegistRequest ghnModel) throws JsonProcessingException {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shop/register";
        System.out.println(GHNUltils.getResponse(token, null, url, ghnModel).getBody());
    }

}
