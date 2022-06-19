package backend.backend.persitence.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.SingleProductPage;

@Repository
public interface SingleProductPageRepository extends PagingAndSortingRepository<SingleProductPage, Integer> {

    List<SingleProductPage> findByIdCategoryIn(Integer[] ids);

    List<SingleProductPage> findAll();

    Optional<SingleProductPage> findByIdSingleProductPage(Integer idSingleProductPage);


}
