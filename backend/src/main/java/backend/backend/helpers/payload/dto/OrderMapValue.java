package backend.backend.helpers.payload.dto;

import java.util.ArrayList;
import java.util.List;

public class OrderMapValue {
    int count;
    List<OrderItemDTO> itemDTOs = new ArrayList<>();
    SingleProductPageDTO singleProductPageDTO;

    public OrderMapValue(int count, List<OrderItemDTO> itemDTOs, SingleProductPageDTO singleProductPageDTO) {
        this.count = count;
        this.itemDTOs = itemDTOs;
        this.singleProductPageDTO = singleProductPageDTO;
    }

    public int getCount() {
        return this.count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<OrderItemDTO> getItemDTOs() {
        return this.itemDTOs;
    }

    public void setItemDTOs(List<OrderItemDTO> itemDTOs) {
        this.itemDTOs = itemDTOs;
    }

    public SingleProductPageDTO getSingleProductPageDTO() {
        return this.singleProductPageDTO;
    }

    public void setSingleProductPageDTO(SingleProductPageDTO singleProductPageDTO) {
        this.singleProductPageDTO = singleProductPageDTO;
    }
}