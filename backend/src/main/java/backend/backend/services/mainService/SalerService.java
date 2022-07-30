package backend.backend.services.mainService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.dto.OrderItemDTO;
import backend.backend.helpers.payload.dto.ShopDTO;
import backend.backend.helpers.payload.dto.SingleProductPageDTO;
import backend.backend.helpers.payload.response.PageSingleProductResponse;
import backend.backend.helpers.payload.response.SalerOrderItemResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.services.entityService.OrderService;
import backend.backend.services.entityService.ShopService;
import backend.backend.services.entityService.SingleProductPageService;

@Service
public class SalerService {

    @Autowired
    OrderService orderService;
    @Autowired
    ShopService shopService;
    @Autowired
    SingleProductPageService singleProductPageService;

    // manage product
    // // product view
    public PageSingleProductResponse productSalerList(Integer idShop, Integer page, Integer size, Integer sorter,
            Integer status) {
        return singleProductPageService.productSalerList(idShop, page, size, sorter, status);
    }

    // // product add
    public boolean productSalerUpdate(SingleProductPageDTO singleProductPageDTO) {
        return singleProductPageService.productSalerUpdate(singleProductPageDTO);
    }

    // manage order
    // // order view
    public SalerOrderItemResponse orderSalerList(Integer idShop, Integer page, Integer size, Integer sorter,
            Integer status) {
        return singleProductPageService.orderSalerList(idShop, page, size, sorter, status);
    }

    // // order update
    public boolean orderSalerUpdateStatus(OrderItemDTO orderItemDTO) {
        return singleProductPageService.orderSalerUpdateStatus(orderItemDTO);
    }
    // // order search

    // voucher and sale

    // profile edit
    public ShopDTO getShopProfile() {
        return (ShopDTO) SubUtils.mapperObject(shopService.getShop(), new ShopDTO());
    }

    public ShopDTO getShopProfile(int idShop) {
        return (ShopDTO) SubUtils.mapperObject(shopService.getShop(idShop), new ShopDTO());
    }

    // evaluate
    public Integer updateShop(ShopDTO request) {
        return shopService.updateShop(request);
    }

    // statistics
}