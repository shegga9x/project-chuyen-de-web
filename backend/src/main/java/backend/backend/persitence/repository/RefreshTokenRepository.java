package backend.backend.persitence.repository;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.RefreshToken;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {
    Optional<RefreshToken> findByToken(String token);


    boolean existsByToken(String token);

    @Query("SELECT m FROM RefreshToken m  WHERE m.idAccount = ?1")
    Set<RefreshToken> getTokenListOfUser(int accountId);

}
