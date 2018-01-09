package pl.kedziorek.silka.silownia.service;

import pl.kedziorek.silka.silownia.model.Silownia;

import java.util.List;

public interface SilowniaService {
    public List<Silownia> findAll();
    public Silownia dodajSilownia(Silownia silownia);
    public void usunSilownia(Long id);
}
