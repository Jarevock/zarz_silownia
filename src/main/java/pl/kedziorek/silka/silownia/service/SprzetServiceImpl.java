package pl.kedziorek.silka.silownia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kedziorek.silka.silownia.model.Sprzet;
import pl.kedziorek.silka.silownia.repository.SprzetRepository;

import java.util.List;

@Service
public class SprzetServiceImpl implements SprzetService {
    @Autowired
    private SprzetRepository sprzetRepository;

    @Override
    public Sprzet dodajSprzet(Sprzet sprzet)
    {
        return sprzetRepository.save(sprzet);
    }

    @Override
    public void usunSprzet(Long id) {
        sprzetRepository.delete(id);
    }

    @Override
    public List<Sprzet> findAll()
    {
        return sprzetRepository.findAll();
    }
}
