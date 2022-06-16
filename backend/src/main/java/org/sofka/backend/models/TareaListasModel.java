package org.sofka.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "listaTareas")
public class TareaListasModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long idListaTarea;

    @Column(nullable = false, length = 50)
    private String nombreTarea;

    private boolean stado;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_Tarjeta_listaTareas", nullable = false)
    @JsonBackReference
    private TarjetasModel tarjetas;

}
