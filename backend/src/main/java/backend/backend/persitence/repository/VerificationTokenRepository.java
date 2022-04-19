package backend.backend.persitence.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.VerificationToken;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Integer> {
    boolean existsByVerificationTokenContent(String token);

    Optional<VerificationToken> findByVerificationTokenContent(String token);
}
