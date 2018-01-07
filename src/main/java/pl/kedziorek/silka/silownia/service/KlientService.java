package pl.kedziorek.silka.silownia.service;

import pl.kedziorek.silka.silownia.model.Klient;

public interface KlientService {


   public Klient dodajKlienta(Klient klient);
   public void usunKlienta(Long id);


}
