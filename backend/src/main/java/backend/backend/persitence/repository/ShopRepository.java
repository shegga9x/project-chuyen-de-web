package backend.backend.persitence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.Shop;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Integer> {

    @Query(value = "insert into Shop values (?1,?2,?3,?4,?5,?6)", nativeQuery = true)
    void insertNewShop(Integer idShop, String name, String phoneNumber, String imgUrl, String addressId,
            String description);

}
