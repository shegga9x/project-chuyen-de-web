package backend.backend.persitence.repository;

import backend.backend.persitence.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "SELECT c from Customer c where c.account.email = ?1")
    Optional<Customer> findByEmailCustomer(String email);

    Optional<Customer> findByIdCustomer(int idCustomer);
}
