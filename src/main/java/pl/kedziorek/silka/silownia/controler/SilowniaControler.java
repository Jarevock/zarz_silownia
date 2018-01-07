package pl.kedziorek.silka.silownia.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.kedziorek.silka.silownia.model.Silownia;
import pl.kedziorek.silka.silownia.service.SilowniaService;

import java.util.List;

import static java.sql.DriverManager.println;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SilowniaControler {

    @Autowired
    private SilowniaService silowniaService;


    @GetMapping("/znajdzSilownie")
    public List<Silownia> znajdzSilownie(){
        List<Silownia> silownias = silowniaService.findAll();
       return silownias;
    }
}
