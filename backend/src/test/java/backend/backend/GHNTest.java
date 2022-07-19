package backend.backend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;

import backend.backend.persitence.model.ghn.GHNModel;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GHNTest {
    public String token = "133bb4b2-065a-11ed-ad26-3a4226f77ff0";
    public String shopID = "3107502";
    public String ghnAPI = "https://online-gateway.ghn.vn/shiip/public-api/v2/";

    @Test
    public void getProvince() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Token", token);
        HttpEntity<String> entity = new HttpEntity<String>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        System.out.println(response.getBody());
    }

    @Test
    public void getDistrict() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Token", token);
        HttpEntity<GHNModel> entity = new HttpEntity<GHNModel>(
                new GHNModel(null, null, null, null, 0, 202), headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        System.out.println(response.getBody());
    }

    @Test
    public void createStore() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shop/register";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        headers.set("Token", token);
        GHNModel ghnModel = new GHNModel( "21316", "05823016671", "0378876395", "334/35/12 Nguyễn Văn Nghi",1550,0);
        HttpEntity<GHNModel> entity = new HttpEntity<GHNModel>(ghnModel, headers);
        
        ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
        System.out.println(response.getBody());
    }
}
