package backend.backend.helpers.payload.request.ghn;

import java.util.List;

import backend.backend.helpers.payload.dto.ShopDTO;
import backend.backend.persitence.model.ghn.GHNServiceModel;

public class GHNServiceTypeResponse {
    ShopDTO shopDTO;
    List<GHNServiceModel> ghnServiceModels;

    public GHNServiceTypeResponse(ShopDTO shopDTO, List<GHNServiceModel> ghnServiceModels) {
        this.shopDTO = shopDTO;
        this.ghnServiceModels = ghnServiceModels;
    }

    public ShopDTO getShopDTO() {
        return this.shopDTO;
    }

    public void setShopDTO(ShopDTO shopDTO) {
        this.shopDTO = shopDTO;
    }

    public List<GHNServiceModel> getGhnServiceModels() {
        return this.ghnServiceModels;
    }

    public void setGhnServiceModels(List<GHNServiceModel> ghnServiceModels) {
        this.ghnServiceModels = ghnServiceModels;
    }

}