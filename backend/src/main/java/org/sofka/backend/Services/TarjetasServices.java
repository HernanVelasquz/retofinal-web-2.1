package org.sofka.backend.Services;

import org.sofka.backend.models.TarjetasModel;
import org.sofka.backend.repository.TareaListaRepository;
import org.sofka.backend.repository.TarjetasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * Clase encargada de presentar los servicios que se implementaran en la base de datos
 * el cual tiene como objetivo modificar las tareas que se encuntran asociadas a ellas.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
@Service
public class TarjetasServices {
    /**
     * Llamado del archivo del repositorio, el cual permite realizar la conexcion
     * con el modelo de la base de datos y moficicar los datos .
     */
    @Autowired
    private TarjetasRepository repositoryTarjeta;

    /**
     * Metodo encargado de realizar el listado de todas las tareas generadas registradas en la
     * base de datos
     * @return listado de tareas de la base de datos.
     */
    public Iterable<TarjetasModel> list(){
        return repositoryTarjeta.findAll();
    }

    /**
     * Realiza el registro de la tarea ingresada por el usuario en la base de datos
     * @param tarjeta como parametro, el cual contendra el titulo de la tarea a ingresar
     * @return el estado de la operacion.
     */
    public TarjetasModel createTarjeta(TarjetasModel tarjeta){
        return repositoryTarjeta.save(tarjeta);
    }

    /**
     * Reliza la eliminacion de una tarea, recibiendo le id de la tarea
     * @param id es de tipo long.
     */
    public void deleteTarjeta(Long id){
        repositoryTarjeta.deleteById(id);
    }

    /**
     * Metodo que permite realizar el filtrado por id de todas las tareas que se encuentren
     * relacionadas con el id de la tarea.
     * @param id es de tipo Long de alguna tarea asociada a la base de datos.
     * @return listado de tareas relacionadas con el id
     */
    public TarjetasModel get(Long id){
        return repositoryTarjeta.findById(id).orElseThrow();
    }
}
