package backend.backend.persitence.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.SingleProductPage;

@Repository
public interface SingleProductPageRepository extends PagingAndSortingRepository<SingleProductPage, Integer> {
    Page<SingleProductPage> findByIdCategoryIn(Integer[] ids, Pageable pageable);

}
