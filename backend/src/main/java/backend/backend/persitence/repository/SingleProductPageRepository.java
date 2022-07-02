package backend.backend.persitence.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.SingleProductPage;

@Repository
public interface SingleProductPageRepository extends PagingAndSortingRepository<SingleProductPage, Integer> {

    List<SingleProductPage> findAll();

    List<SingleProductPage> findByIdShop(Integer idShop);

    List<SingleProductPage> findByIdShopAndStatus(Integer idShop, Byte status);

    List<SingleProductPage> findByStatus(Byte status);

    List<SingleProductPage> findByIdCategoryInAndStatus(Integer[] ids, Byte status);

    Optional<SingleProductPage> findByIdSingleProductPage(Integer idSingleProductPage);

}
