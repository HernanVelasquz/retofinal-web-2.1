package org.sofka.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Clase encargada de relizar el modelo de la base de datos, el cual permite crear las tablas,
 * implementar las relaciones y la estructura general de las tablas de la base de datos para la lista
 * de las tareas.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
@RequiredArgsConstructor
@Data
@Entity
@Table(name = "tarjetas")
public class TarjetasModel {
    /**
     *  Atributos encrgado de realizar la estructura de las columnas en en la base de datos
     * atributo id autoincrementable
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false, length = 50)
    private Long id;
    /**
     * Atriburo encargado de realizar la estructura de la columna de el titulo de la tarea
     * la cual contendra las sub tareas.
     */
    @Column(unique = true, nullable = false, length = 50)
    private String tituloTarea;
    /**
     * Creacion de la relacion de Unos a muchos con la tabla de TareasLista Model, de la base de datos
     * donde se podran asociar las sub tareas a la tarea principal.
     */
    @OneToMany(fetch = FetchType.EAGER,
            targetEntity = TareaListasModel.class,
            cascade = CascadeType.REMOVE,
            mappedBy = "listaid")
    /**
     * Lista encargada de contener todas las relaciones obtenidas en la base de datos
     * el cual le permite obtener las relaciones que se presentan en la tabla de subtareas.
     */
    @JsonBackReference
    private List<TareaListasModel>ListTask = new ArrayList<>();
}
