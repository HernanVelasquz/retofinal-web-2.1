package org.sofka.backend.repository;

import org.sofka.backend.models.TareaListasModel;
import org.springframework.data.repository.CrudRepository;
/**
 * Interfas encargada de relacionar el modelo y el llamado de la Sublista de tareas
 * del modelo de nombre TareaListaModel y permite extenderla de la clase CrudRepository.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
public interface TareaListaRepository extends CrudRepository<TareaListasModel, Long> {
}
