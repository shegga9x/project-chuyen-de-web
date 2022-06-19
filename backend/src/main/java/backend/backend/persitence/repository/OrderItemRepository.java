package backend.backend.persitence.repository;

import backend.backend.persitence.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

    List<OrderItem> findByIdCustomer(int idCustomer);
}
