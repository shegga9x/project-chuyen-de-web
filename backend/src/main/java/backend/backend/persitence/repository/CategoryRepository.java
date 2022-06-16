package backend.backend.persitence.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

    Optional<Category> findByIdCategory(Integer id);

    Optional<Category> findByName(String name);

    List<Category> findByIdCategoryIn(List<Integer> ids);

    List<Category> findByIdCategoryParent(Integer IdCategoryParent);
}
