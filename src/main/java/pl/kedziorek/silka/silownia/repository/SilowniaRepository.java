package pl.kedziorek.silka.silownia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.kedziorek.silka.silownia.model.Silownia;

import java.util.List;

public interface SilowniaRepository extends JpaRepository<Silownia,Long> {
}
