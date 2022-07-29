package backend.backend.helpers.utils;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class GHNUltils {

        public static ResponseEntity<String> getResponse(RestTemplate restTemplate, String token, String idShop,
                        String url,
                        Object object) {
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.set("Token", token);
                headers.set("ShopId", idShop);
                HttpEntity<String> entity = new HttpEntity<String>(SubUtils.toJson(object),
                                headers);
                ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST,
                                entity, String.class);
                return response;
        }
}
