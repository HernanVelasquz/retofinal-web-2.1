package org.sofka.backend.Services;

import org.sofka.backend.models.TarjetasModel;
import org.sofka.backend.repository.TareaListaRepository;
import org.sofka.backend.repository.TarjetasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TarjetasServices {
    @Autowired
    private TarjetasRepository repositoryTarjeta;

    public Iterable<TarjetasModel> list(){
        return repositoryTarjeta.findAll();
    }

    public TarjetasModel createTarjeta(TarjetasModel tarjeta){
        return repositoryTarjeta.save(tarjeta);
    }

    public void deleteTarjeta(Long id){
        repositoryTarjeta.deleteById(id);
    }

    public TarjetasModel get(Long id){
        return repositoryTarjeta.findById(id).orElseThrow();
    }
}
