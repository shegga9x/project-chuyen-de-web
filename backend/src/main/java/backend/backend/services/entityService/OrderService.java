package backend.backend.services.entityService;

import java.util.ArrayList;
import java.util.List;

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
                    orderItem.getStatus());
            result.add(orderItemResponse);
        }
        return result;
    }

    public String addCartItemToOrder() {
        int idUser = SubUtils.getCurrentUser().getId();
        List<CartItem> listCartItem = cartItemRepository.findByIdCustomer(idUser);
        double totalCart = 0;
        for (CartItem cartItem : listCartItem) {
            totalCart += cartItem.getQuantity() * cartItem.getProduct().getPrice();
        }
        // remove money
        walletCustomerService.removeMoneyFormCustomerWallet(totalCart);
        List<OrderItem> listOrderItem = new ArrayList<>();
        for (CartItem cartItem : listCartItem) {
            OrderItem orderItem = new OrderItem();
            orderItem.setIdCustomer(idUser);
            orderItem.setIdProduct(cartItem.getProduct().getIdProduct());
            orderItem.setStatus((byte) 1);
            listOrderItem.add(orderItem);
        }
        cartItemRepository.deleteAll(listCartItem);
        orderItemRepository.saveAll(listOrderItem);
        return "ok";
    }

}
