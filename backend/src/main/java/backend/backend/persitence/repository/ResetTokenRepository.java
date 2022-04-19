package backend.backend.persitence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.ResetToken;

@Repository
public interface ResetTokenRepository extends JpaRepository<ResetToken, Integer> {
    boolean existsByResetTokenContent(String token);

    ResetToken findByResetTokenContent(String token);

}
