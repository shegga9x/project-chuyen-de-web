package backend.backend.helpers.payload.request;

import backend.backend.helpers.payload.dto.SingleProductPageDTO;

public class SalerProductAddRequest {
    SingleProductPageDTO singleProductPageDTO;

    public SingleProductPageDTO getSingleProductPageDTO() {
        return this.singleProductPageDTO;
    }

    public void setSingleProductPageDTO(SingleProductPageDTO singleProductPageDTO) {
        this.singleProductPageDTO = singleProductPageDTO;
    }

}   