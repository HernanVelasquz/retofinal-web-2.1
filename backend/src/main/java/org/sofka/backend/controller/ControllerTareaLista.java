package org.sofka.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.sofka.backend.Services.TareasListasServicio;
import org.sofka.backend.models.TareaListasModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
public class ControllerTareaLista {
    @Autowired
    private TareasListasServicio listaTareasServices;

    @GetMapping(path = "app/listtareas")
    public Iterable<TareaListasModel> list(){
        return listaTareasServices.list();
    }

    @PostMapping(path = "app/listtareas")
    public TareaListasModel crearSubTarea(@RequestBody TareaListasModel listTarea){
        return listaTareasServices.createListTask(listTarea);
}

    @PutMapping(path = "/app/listtarea/{id}")
    public TareaListasModel actualizarSubTareas(@RequestBody TareaListasModel tareaLista, @PathVariable(value = "id") Long id){
        listaTareasServices.updateListTarea(id, tareaLista);
        return null;
    }

    @DeleteMapping(path = "app/listtarea/{id}")
    public void deleListTarea(@PathVariable("id") Long id){
        listaTareasServices.deleteListTarea(id);
    }
}
