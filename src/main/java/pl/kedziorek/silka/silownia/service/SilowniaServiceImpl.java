package pl.kedziorek.silka.silownia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kedziorek.silka.silownia.model.Silownia;
import pl.kedziorek.silka.silownia.repository.SilowniaRepository;

import java.util.List;

@Service
public class SilowniaServiceImpl implements SilowniaService {
    @Autowired
    private SilowniaRepository silowniaRepository;


    @Override
    public List<Silownia> findAll() {
        return silowniaRepository.findAll();
    }

}
