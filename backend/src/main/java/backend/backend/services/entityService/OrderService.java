package backend.backend.services.entityService;

import backend.backend.helpers.payload.response.OrderItemResponse;
import backend.backend.helpers.payload.response.ProductResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.OrderItem;
import backend.backend.persitence.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItemResponse> getOrderItemByIdCustomer() {
        int idUser = SubUtils.getCurrentUser().getId();
        List<OrderItem> listOrderItem = orderItemRepository.findByIdCustomer(idUser);
        List<OrderItemResponse> result = new ArrayList<>();
        for (OrderItem orderItem : listOrderItem) {
            ProductResponse productResponse = (ProductResponse) SubUtils.mapperObject(orderItem.getProduct(), new ProductResponse());
            OrderItemResponse orderItemResponse = new OrderItemResponse(orderItem.getIdCustomer(), productResponse, orderItem.getStatus());
            result.add(orderItemResponse);
        }
        return result;
    }
}
