package pl.kedziorek.silka.silownia.service;

import pl.kedziorek.silka.silownia.model.Sprzet;

import java.util.List;

public interface SprzetService {

    public Sprzet dodajSprzet(Sprzet sprzet);
    public void usunSprzet(Long id);
    public List<Sprzet> findAll();
}
