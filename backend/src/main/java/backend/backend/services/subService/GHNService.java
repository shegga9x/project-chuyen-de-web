package backend.backend.services.subService;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;

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

    public void getProvince() {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province";
        System.out.println(GHNUltils.getResponse(restTemplate, token, null, url, "").getBody());
    }

    public void getDistrict(int province_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district";
        System.out.println(GHNUltils.getResponse(restTemplate, token, null, url, province_id).getBody());
    }

    public void createStore(GHNStoreRegistRequest ghnModel) throws JsonProcessingException {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shop/register";
        System.out.println(GHNUltils.getResponse(restTemplate, token, null, url, ghnModel).getBody());
    }

}