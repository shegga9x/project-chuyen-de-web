package backend.backend.persitence.repository;

import backend.backend.persitence.entities.ResetPhoneToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResetPhoneTokenRepository extends JpaRepository<ResetPhoneToken, Integer> {

    @Override
    Optional<ResetPhoneToken> findById(Integer integer);

    Optional<ResetPhoneToken> findByResetTokenContent(String sms);
}
