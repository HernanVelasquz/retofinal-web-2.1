package org.sofka.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.sofka.backend.Services.TarjetasServices;
import org.sofka.backend.models.TarjetasModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
/**
 * Clase encargada de presentar los servicios a los usuarios para poder aplicar las
 * operaciones basicas del CRUD, para que los usuarios puedan editar las tareas,
 * permitiendo mejorar las opraciones de trabajo y generando los endpoint de conexion para
 * cada metodo de trabajo desarrollado.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
@Slf4j
@CrossOrigin
@RestController
public class ContellerTarjeta {
    /**
     * Llamado de los servicios desarrollados e el paquete de servicios de las tareas.
     */
    @Autowired
    private TarjetasServices tarjetasServices;

    /**
     * Metodo encargado de realizar el llamado a todas las tareas registradas en la base de datos.
     * @return el listado de tareas de la base de datos.
     */
    @GetMapping(value = "app/tarjata")
    public Iterable<TarjetasModel> list(){
        return tarjetasServices.list();
    }

    /**
     * Metodo encargado de realizar la insercion de la tarea a la base de datos, recibiendo como
     * @param tarjeta el nombre de la tarea a insertar en la base de datos
     * @return el estado de la opracion de insercion.
     */
    @PostMapping(value = "app/tarjeta")
    public TarjetasModel crearTarea(@RequestBody TarjetasModel tarjeta){
        return tarjetasServices.createTarjeta(tarjeta);
    }

    /**
     * Metodo encargado de la eliminacion de las tareas en la base de datos, recibiendo como
     * @param id para relizar la busqueda y eliminarlo en la base de datos.
     */
    @DeleteMapping(value = "app/tarjeta/{id}")
    public void borrarTarea(@PathVariable("id") Long id){
        tarjetasServices.deleteTarjeta(id);
    }
}
