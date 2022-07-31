package backend.backend.services.entityService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.response.OrderItemResponse;
import backend.backend.helpers.payload.response.ProductResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.CartItem;
import backend.backend.persitence.entities.OrderItem;
import backend.backend.persitence.repository.CartItemRepository;
import backend.backend.persitence.repository.OrderItemRepository;

@Service
public class OrderService {

    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private WalletCustomerService walletCustomerService;

    public List<OrderItemResponse> getOrderItemByIdCustomer() {
        int idUser = SubUtils.getCurrentUser().getId();
        List<OrderItem> listOrderItem = orderItemRepository.findByIdCustomer(idUser);
        List<OrderItemResponse> result = new ArrayList<>();
        for (OrderItem orderItem : listOrderItem) {
            ProductResponse productResponse = (ProductResponse) SubUtils.mapperObject(orderItem.getProduct(),
                    new ProductResponse());
            OrderItemResponse orderItemResponse = new OrderItemResponse(orderItem.getIdCustomer(), productResponse,
                    orderItem.getStatus(), orderItem.getQuantity(),orderItem.getShippingPrice());
            result.add(orderItemResponse);
        }
        return result;
    }

    public String addCartItemToOrder(List<String> listShipingPrice) {
        Map<Integer, Integer> map = new HashMap<>();
        for (String string : listShipingPrice) {
            map.put(Integer.parseInt(string.split("-")[0]), Integer.parseInt(string.split("-")[1]));
        }
        int idUser = SubUtils.getCurrentUser().getId();
        List<OrderItem> listOrderItem = new ArrayList<>();
        List<CartItem> listCartItem = cartItemRepository.findByIdCustomer(idUser);
        double totalCart = 0;
        for (CartItem cartItem : listCartItem) {
            totalCart += cartItem.getQuantity() * cartItem.getProduct().getPrice();
        }
        // remove money
        walletCustomerService.removeMoneyFormCustomerWallet(totalCart);

        for (CartItem cartItem : listCartItem) {
            OrderItem orderItem = new OrderItem();
            orderItem.setIdCustomer(idUser);
            orderItem.setIdProduct(cartItem.getProduct().getIdProduct());
            orderItem.setStatus((byte) 1);
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setShippingPrice(map.get(cartItem.getProduct().getIdProduct()));
            listOrderItem.add(orderItem);
        }
        cartItemRepository.deleteAll(listCartItem);
        orderItemRepository.saveAll(listOrderItem);
        return "ok";
    }

}
