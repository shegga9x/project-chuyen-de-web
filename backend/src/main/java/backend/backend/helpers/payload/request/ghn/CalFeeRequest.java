package backend.backend.helpers.payload.request.ghn;

import java.util.List;

import backend.backend.helpers.payload.response.CartItemResponse;

public class CalFeeRequest {
    List<CartItemResponse> cartItemDTOsItemResponses;
    List<GHNServiceTypeRequest> ghnServiceTypeRequests;

    public List<CartItemResponse> getCartItemDTOsItemResponses() {
        return this.cartItemDTOsItemResponses;
    }

    public void setCartItemDTOsItemResponses(List<CartItemResponse> cartItemDTOsItemResponses) {
        this.cartItemDTOsItemResponses = cartItemDTOsItemResponses;
    }

    public List<GHNServiceTypeRequest> getGhnServiceTypeRequests() {
        return this.ghnServiceTypeRequests;
    }

    public void setGhnServiceTypeRequests(List<GHNServiceTypeRequest> ghnServiceTypeRequests) {
        this.ghnServiceTypeRequests = ghnServiceTypeRequests;
    }

}
