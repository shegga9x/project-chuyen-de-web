package backend.backend.persitence.repository;

import backend.backend.persitence.entities.Evaluate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvaluateRepository extends JpaRepository<Evaluate, Integer> {

    List<Evaluate> findByIdSingleProductPage(int idSingleProductPage);

}
