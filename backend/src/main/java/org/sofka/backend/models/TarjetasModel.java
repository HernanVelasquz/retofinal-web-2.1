package org.sofka.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Data
@Entity
@Table(name = "tarjetas")
public class TarjetasModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false, length = 50)
    private Long id;
    @Column(unique = true, nullable = false, length = 50)
    private String tituloTarea;

    @OneToMany(fetch = FetchType.EAGER,
            targetEntity = TareaListasModel.class,
            cascade = CascadeType.REMOVE,
            mappedBy = "listaid")

    @JsonBackReference
    private List<TareaListasModel>ListTask = new ArrayList<>();
}
