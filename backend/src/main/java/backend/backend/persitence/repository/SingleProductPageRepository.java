package backend.backend.persitence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.SingleProductPage;

@Repository
public interface SingleProductPageRepository extends JpaRepository<SingleProductPage, Integer> {

}
