package org.sofka.backend.repository;

import org.sofka.backend.models.TarjetasModel;
import org.springframework.data.repository.CrudRepository;
/**
 * Interfas encargada de relacionar el modelo y el llamado de la Listas de tareas, que recibe
 * el modelo de las Tarjetas y permite extenderla de la clase CrudRepository.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
public interface TarjetasRepository extends CrudRepository<TarjetasModel, Long> {

}
