package pl.kedziorek.silka.silownia.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.kedziorek.silka.silownia.model.Silownia;
import pl.kedziorek.silka.silownia.service.SilowniaService;

import java.util.List;

import static java.sql.DriverManager.println;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SilowniaControler {

    @Autowired
    private SilowniaService silowniaService;


    //@GetMapping(value = "/znajdzSilownie", produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping(value = "/znajdzSilownie", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Silownia> znajdzSilownie(){
        List<Silownia> silownias = silowniaService.findAll();
       return silownias;
    }

    @PostMapping("/dodajSilownie")
    public Silownia dodajSilownia(@RequestBody Silownia silownia) {
        silownia = silowniaService.dodajSilownia(silownia);
        return silownia;
    }

    @DeleteMapping("/usunSilownia/{id}")
    public void usunSilownia(@PathVariable(value = "id") Long id){
        silowniaService.usunSilownia(id);
    }
}
