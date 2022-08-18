package backend.backend;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.itextpdf.text.DocumentException;

import backend.backend.helpers.payload.request.ghn.GHNStoreRegistRequest;
import backend.backend.persitence.repository.CustomerRepository;
import backend.backend.persitence.repository.ShopRepository;
import backend.backend.services.subService.GHNService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GHNTest {
    @Autowired
    GHNService ghnService;
    @Autowired
    ShopRepository shopRepository;
    @Autowired
    CustomerRepository customerRepository;

    @Test
    public void getProvince() {
        ghnService.getProvince();
    }

    @Test
    public void getDistrict() {
        ghnService.getDistrict(202);
    }

    @Test
    public void createStore() throws JsonProcessingException {
        GHNStoreRegistRequest ghnModel = new GHNStoreRegistRequest(1550, "21316", "05823016671", "0378876395",
                "334/35/12 Nguyễn Văn Nghi");
        System.out.println(ghnService.createStore(ghnModel));
    }


    @Test
    public void json() throws IOException, DocumentException {
        // GHNStoreRegistRequest ghnModel = new GHNStoreRegistRequest(1550, "21316",
        // "05823016671", "0378876395",
        // "334/35/12 Nguyễn Văn Nghi");
        // System.out.println();
        // ObjectMapper mapper = new ObjectMapper();
        // Map<String, Object> map = mapper.readValue(ghnService.createStore(ghnModel),
        // Map.class);
        // if (map.get("message").toString().equals("Success")) {
        // System.out.println(map.get("data").toString().split("=")[1].replace("}",
        // ""));
        // }

    }

    @Test
    @Transactional
    public void getServiceType() throws IOException, DocumentException {
        Map<Integer, List<Integer>> mapProductByIdShop = new HashMap<>();
        List<Integer> list = mapProductByIdShop.get(0);

        System.out.println(list.size());

    }

    @Test
    public void cancelOrder() throws IOException, DocumentException {
        System.out.println(ghnService.cancelOrder("GA4WNH6V", "3107502  "));
    }

}
