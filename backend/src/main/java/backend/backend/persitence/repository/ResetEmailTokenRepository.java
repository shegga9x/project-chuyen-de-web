package backend.backend.persitence.repository;

import backend.backend.persitence.entities.ResetEmailToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResetEmailTokenRepository extends JpaRepository<ResetEmailToken, Integer> {

    @Override
    Optional<ResetEmailToken> findById(Integer integer);

    Optional<ResetEmailToken> findByResetTokenContent(String sms);
}
