package pl.kedziorek.silka.silownia.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.kedziorek.silka.silownia.model.Sprzet;
import pl.kedziorek.silka.silownia.service.SprzetService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SprzetControler {
    @Autowired
    private SprzetService sprzetService;

    @PostMapping("/dodajSprzet")
    public Sprzet dodajSprzet(@RequestBody Sprzet sprzet) {
        sprzet = sprzetService.dodajSprzet(sprzet);
        return sprzet;
    }

    @GetMapping(value ="/znajdzSprzet")
    public List<Sprzet> znajdzSprzet(){
        List<Sprzet> klentek = sprzetService.findAll();
        return klentek;
    }

    @DeleteMapping("/usunSprzet/{id}")
    public void usunSprzet(@PathVariable(value = "id") Long id){
        sprzetService.usunSprzet(id);
    }
}
