package backend.backend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.core.JsonProcessingException;

import backend.backend.helpers.payload.request.ghn.GHNStoreRegistRequest;
import backend.backend.services.subService.GHNService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GHNTest {
    @Autowired
    GHNService ghnService;

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
        ghnService.createStore(ghnModel);
    }
}
