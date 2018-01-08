package pl.kedziorek.silka.silownia.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.kedziorek.silka.silownia.model.Klient;
import pl.kedziorek.silka.silownia.model.Silownia;
import pl.kedziorek.silka.silownia.service.KlientService;

import javax.annotation.Generated;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class KlientControler {

    @Autowired
    private KlientService klientService;


    @PostMapping("/dodajKlienta")
    public Klient dodajKlienta(@RequestBody Klient klient) {
        klient = klientService.dodajKlienta(klient);
        return klient;
    }

    @GetMapping(value ="/znajdzKlientow", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Klient> znajdzKlienta(){
        List<Klient> klentek = klientService.findAll();
        return klentek;
    }

    @DeleteMapping("/usunKlienta/{id}")
    public void usunKlienta(@PathVariable(value = "id") Long id){
        klientService.usunKlienta(id);
    }

}
