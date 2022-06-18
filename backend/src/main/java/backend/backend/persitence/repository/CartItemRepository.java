package backend.backend.persitence.repository;

import backend.backend.persitence.entities.CartItem;
import backend.backend.persitence.entities.CartItemId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, CartItemId> {

    Optional<CartItem> findById(CartItemId cartItemId);

    List<CartItem> findByIdCustomer(int idCustomer);
}
