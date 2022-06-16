package org.sofka.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.sofka.backend.Services.TarjetasServices;
import org.sofka.backend.models.TarjetasModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
public class ContellerTarjeta {
    @Autowired
    private TarjetasServices tarjetasServices;

    @GetMapping(value = "app/tarjata")
    public Iterable<TarjetasModel> list(){
        return tarjetasServices.list();
    }

    @PostMapping(value = "app/tarjeta")
    public TarjetasModel crearTarea(@RequestBody TarjetasModel tarjeta){
        return tarjetasServices.createTarjeta(tarjeta);
    }

    @DeleteMapping(value = "app/tarjeta/{id}")
    public void borrarTarea(@PathVariable("id") Long id){
        tarjetasServices.deleteTarjeta(id);
    }
}
