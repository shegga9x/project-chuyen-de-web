package backend.backend.persitence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.persitence.entities.Addrress;

@Repository
public interface AddressRepository extends JpaRepository<Addrress, Integer> {


}
