package org.sofka.backend.Services;

import org.sofka.backend.models.TareaListasModel;
import org.sofka.backend.repository.TareaListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
/**
 * Clase encargada de presentar los servicios que se implementaran en la base de datos
 * el cual tiene como objetivo modificar las sub teras y asocialar a la tarea principal.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
@Service
public class TareasListasServicio {
    /**
     * Llamado del archivo del repositorio, el cual permite realizar la conexcion
     * con el modelo de la base de datos y moficicar los datos .
     */
    @Autowired
    private TareaListaRepository listaTareasRespository;
    /**
     * Metodo encargado de realizar el listado de todas las subtareas generadas registradas en la
     * base de datos
     * @return listado de tareas de la base de datos.
     */
    public Iterable<TareaListasModel> list(){
        return listaTareasRespository.findAll();
    }

    /**
     * Realiza el registro de la subtarea ingresada por el usuario en la base de datos, e ingresando
     * el estado de la sub tarea como false por defecto.
     * @param tareaLista como parametro, el cual contendra el titulo de la tarea a ingresar
     * @return el estado de la operacion.
     */
    public TareaListasModel createListTask(TareaListasModel tareaLista){
        tareaLista.setStado(false);
        return listaTareasRespository.save(tareaLista);
    }

    /**
     * Reliza la eliminacion de una subtarea, recibiendo le id de la subtarea
     * @param id es de tipo long.
     */
    public void deleteListTarea(Long id){
        listaTareasRespository.deleteById(id);
    }

    public TareaListasModel get(Long id){
        return listaTareasRespository.findById(id).orElseThrow();
    }

    /**
     * Metodo encargado de realizar la actualizacion de las sub tareas
     * permitiendo a los usuarios darle informacion a los usuarios.
     * @param id de la tarea a editar
     * @param listTarea el titulo de la tarea a editar a actualizar
     * @return retorna la lista actualizada.
     */
    @Transactional
    public TareaListasModel updateListTarea(Long id, TareaListasModel listTarea){
        listTarea.setIdListaTarea(id);
        listaTareasRespository.save(listTarea);
        return listTarea;
    }
}
