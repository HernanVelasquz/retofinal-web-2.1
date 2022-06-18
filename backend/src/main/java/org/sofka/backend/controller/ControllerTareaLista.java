package org.sofka.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.sofka.backend.Services.TareasListasServicio;
import org.sofka.backend.models.TareaListasModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
/**
 * Clase encargada de presentar los servicios a los usuarios para poder aplicar las
 * operaciones basicas del CRUD, para que los usuarios puedan editar las subtareas,
 * permitiendo mejorar las opraciones de trabajo y generando los endpoint de conexion para
 * cada metodo de trabajo desarrollado.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
@Slf4j
@CrossOrigin
@RestController
public class ControllerTareaLista {
    /**
     * Llamado de los servicios que se encuentran en el paquete de servicios de las subtareas.
     */
    @Autowired
    private TareasListasServicio listaTareasServices;

    /**
     * enpoint encargado de realizar el llamado para traer la informacion de las tareas
     * y enviarla al usuario.
     * @return lista de tareas almacenada en la base de datos.
     */
    @GetMapping(path = "app/listareas")
    public Iterable<TareaListasModel> list(){
        return listaTareasServices.list();
    }

    /**
     * Metodo encargado de realizar la insersion de las sub tareas
     * a la base de datos.
     * @param listTarea el listado de la tarea
     * @return el estado de la operacion realizada.
     */
    @PostMapping(path = "app/listareas")
    public TareaListasModel crearSubTarea(@RequestBody TareaListasModel listTarea){
        return listaTareasServices.createListTask(listTarea);
    }

    /**
     * Metodo encargado de realizar la actualizacion de las tareas en la base de datos,
     * recibindo como
     * @param tareaLista para actualizar en la base de datos
     * @param id para identificar la tarea a actualizar e ingresarle la tareaLista
     * @return null.
     */
    @PutMapping(path = "app/listarea/{id}")
    public TareaListasModel actualizarSubTareas(@RequestBody TareaListasModel tareaLista, @PathVariable(value = "id") Long id){
        listaTareasServices.updateListTarea(id, tareaLista);
        return null;
    }

    /**
     * Metodo encargado de realizar la eliminacion de una tarea. recibiendo como
     * @param id de la atarea que se quiere eliminar.
     */
    @DeleteMapping(path = "app/listarea/{id}")
    public void deleListTarea(@PathVariable("id") Long id){
        listaTareasServices.deleteListTarea(id);
    }
}
