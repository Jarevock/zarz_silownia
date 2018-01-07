package pl.kedziorek.silka.silownia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.kedziorek.silka.silownia.model.Klient;
import pl.kedziorek.silka.silownia.model.Silownia;

import java.util.List;

public interface KlientRepository extends JpaRepository<Klient,Long> {
   // List<Klient> findAllByKlient(Klient klient);
}
