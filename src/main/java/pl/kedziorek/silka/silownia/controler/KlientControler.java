package pl.kedziorek.silka.silownia.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.kedziorek.silka.silownia.model.Klient;
import pl.kedziorek.silka.silownia.service.KlientService;

import javax.annotation.Generated;

@RestController
public class KlientControler {

    @Autowired
    private KlientService klientService;


    @PostMapping("/dodajKlienta")
    public Klient dodajKlienta(@RequestBody Klient klient) {
        return klient;
    }


    @DeleteMapping("/usunKlienta/{id}")
    public void usunKlienta(@PathVariable(value = "ID") Long id){
        klientService.usunKlienta(id);
    }

}
