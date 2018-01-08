package pl.kedziorek.silka.silownia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kedziorek.silka.silownia.model.Klient;
import pl.kedziorek.silka.silownia.repository.KlientRepository;

import java.util.List;

@Service
public class KlientServiceImpl implements KlientService{

    @Autowired
    private KlientRepository klientRepository;

    @Override
    public Klient dodajKlienta(Klient klient)
    {
        return klientRepository.save(klient);
    }

    @Override
    public void usunKlienta(Long id) {
        klientRepository.delete(id);
    }

    @Override
    public List<Klient> findAll()
    {
       return klientRepository.findAll();
    }
}
