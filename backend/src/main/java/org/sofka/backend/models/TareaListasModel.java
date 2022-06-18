package org.sofka.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

/**
 * Clase encargada de relizar el modelo de la base de datos, el cual permite crear las tablas,
 * implementar las relaciones y la estructura general de las tablas de la base de datos para la lista
 * de sub tareas.
 * @autor Hernan Velasquez Meriño
 * @version 1.0 17/06/2022
 */
@Data
@Entity
@Table(name = "listaTareas")
public class TareaListasModel {
    /**
     * Atributos encrgado de realizar la estructura de las columnas en en la base de datos
     * atributo id autoincrementable
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long idListaTarea;
    /**
     * atributo de la tabla que recibe el nombre la SUBtarea
     */
    @Column(unique = true,nullable = false, length = 50)
    private String nombreTarea;
    /**
     * Atributo encargado de relizar el estado de las informacion de la tarea
     * true = realizado
     * false = sin realizar
     */
    private boolean stado;
    /**
     * Metodos encargados de realizar la relacion en la tabla de Tarjeta Model
     * el cual es el cargado de recibir la tarea el cual contendra las sub tareas
     * y permitiendo tener una relacion de Muchos a uno, o Uno a Muchos
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "listaid", nullable = false)
    /**
     * Se aplica a referencia a la tabla donde se crea la llave foranea en esta tabla
     * para poder vincularla con la tarea que se encntraran en Tarjetas.
     */
    @JsonBackReference
    private TarjetasModel listaid;

}
