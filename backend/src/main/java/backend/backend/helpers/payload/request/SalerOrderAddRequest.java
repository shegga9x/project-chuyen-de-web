package backend.backend.helpers.payload.request;

import backend.backend.helpers.payload.dto.OrderItemDTO;

public class SalerOrderAddRequest {
    OrderItemDTO singleProductPageDTO;

    public OrderItemDTO getSingleProductPageDTO() {
        return this.singleProductPageDTO;
    }

    public void setSingleProductPageDTO(OrderItemDTO singleProductPageDTO) {
        this.singleProductPageDTO = singleProductPageDTO;
    }

}