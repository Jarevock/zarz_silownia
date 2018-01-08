package pl.kedziorek.silka.silownia.service;

import pl.kedziorek.silka.silownia.model.Klient;

import java.util.List;

public interface KlientService {


   public Klient dodajKlienta(Klient klient);
   public void usunKlienta(Long id);
   public List<Klient> findAll();


}
