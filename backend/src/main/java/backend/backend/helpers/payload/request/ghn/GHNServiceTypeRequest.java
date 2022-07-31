package backend.backend.helpers.payload.request.ghn;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import backend.backend.helpers.payload.dto.ShopDTO;
import backend.backend.persitence.model.ghn.GHNServiceModel;

public class GHNServiceTypeRequest {
    ShopDTO shopDTO;
    GHNServiceModel ghnServiceModels;

    public ShopDTO getShopDTO() {
        return this.shopDTO;
    }

    public void setShopDTO(ShopDTO shopDTO) {
        this.shopDTO = shopDTO;
    }

    public GHNServiceModel getGhnServiceModels() {
        return this.ghnServiceModels;
    }

    public void setGhnServiceModels(GHNServiceModel ghnServiceModels) {
        this.ghnServiceModels = ghnServiceModels;
    }

}