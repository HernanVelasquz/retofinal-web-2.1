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
    @Column(unique = true,nullable = false)
    private Long idListaTarea;

    @Column(unique = true,nullable = false, length = 50)
    private String nombreTarea;

    private boolean stado;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "listaid", nullable = false)

    @JsonBackReference
    private TarjetasModel listaid;

}
