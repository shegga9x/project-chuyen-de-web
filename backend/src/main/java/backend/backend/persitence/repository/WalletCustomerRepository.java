package backend.backend.persitence.repository;

import backend.backend.persitence.entities.WalletCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WalletCustomerRepository extends JpaRepository<WalletCustomer, Integer> {

    Optional<WalletCustomer> findByIdCustomer(int idCustomer);

    @Query(value = "select wc.total from WalletCustomer wc where wc.idCustomer = ?1")
    Optional<Double> getMoneyByIdCustomer(int idCustomer);
}
