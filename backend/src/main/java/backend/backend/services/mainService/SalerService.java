package backend.backend.services.mainService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.dto.OrderItemDTO;
import backend.backend.helpers.payload.request.SalerProductAddRequest;
import backend.backend.helpers.payload.response.PageSingleProductResponse;
import backend.backend.helpers.payload.response.SalerOrderItemResponse;
import backend.backend.services.entityService.OrderService;
import backend.backend.services.entityService.SingleProductPageService;

@Service
public class SalerService {

    @Autowired
    OrderService orderService;
    @Autowired
    SingleProductPageService singleProductPageService;

    // manage product
    // // product view
    public PageSingleProductResponse productSalerList(Integer idShop, Integer page, Integer size, Integer sorter,
            Integer status) {
        return singleProductPageService.productSalerList(idShop, page, size, sorter, status);
    }

    // // product add
    public boolean productSalerUpdate(SalerProductAddRequest salerProductAddRequest) {
        return singleProductPageService.productSalerUpdate(salerProductAddRequest);
    }

    // manage order
    // // order view
    public SalerOrderItemResponse orderSalerList(Integer idShop, Integer page, Integer size, Integer sorter,
            Integer status) {
        return singleProductPageService.orderSalerList(idShop, page, size, sorter, status);
    }

    // // order search
    public boolean orderSalerUpdateStatus(OrderItemDTO orderItemDTO) {
        return singleProductPageService.orderSalerUpdateStatus(orderItemDTO);
    }
    // // order update

    // voucher and sale

    // profile edit

    // evaluate

    // statistics
}