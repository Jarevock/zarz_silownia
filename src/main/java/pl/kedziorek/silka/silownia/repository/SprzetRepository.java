package pl.kedziorek.silka.silownia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.kedziorek.silka.silownia.model.Sprzet;

public interface SprzetRepository extends JpaRepository<Sprzet,Long> {
}
