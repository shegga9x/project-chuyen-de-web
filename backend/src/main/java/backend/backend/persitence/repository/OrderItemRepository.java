package backend.backend.persitence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import backend.backend.persitence.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

    List<OrderItem> findByIdCustomer(int idCustomer);

    List<OrderItem> findByIdCustomerAndStatus(int idCustomer, byte status);

    @Query("Select o from OrderItem  o JOIN Product p on o.idProduct = p.idProduct JOIN SingleProductPage spg on spg.idSingleProductPage = p.idSingleProductPage WHERE spg.idShop = ?1 AND o.status = ?2")
    List<OrderItem> findByIdShopAndStatus(Integer idShop, byte byteValue);

    @Query("Select o from OrderItem  o JOIN Product p on o.idProduct = p.idProduct JOIN SingleProductPage spg on spg.idSingleProductPage = p.idSingleProductPage WHERE spg.idShop = ?1 ")
    List<OrderItem> findByIdShop(Integer idShop);
}
