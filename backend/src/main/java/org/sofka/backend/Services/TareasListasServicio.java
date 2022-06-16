package org.sofka.backend.Services;

import org.sofka.backend.models.TareaListasModel;
import org.sofka.backend.repository.TareaListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TareasListasServicio {
    @Autowired
    private TareaListaRepository listaTareasRespository;

    public Iterable<TareaListasModel> list(){
        return listaTareasRespository.findAll();
    }

    public TareaListasModel createListTask(TareaListasModel tareaLista){
        tareaLista.setStado(false);
        return listaTareasRespository.save(tareaLista);
    }

    public void deleteListTarea(Long id){
        listaTareasRespository.deleteById(id);
    }

    public TareaListasModel get(Long id){
        return listaTareasRespository.findById(id).orElseThrow();
    }

    @Transactional
    public TareaListasModel updateListTarea(Long id, TareaListasModel listTarea){
        listTarea.setIdListaTarea(id);
        listaTareasRespository.save(listTarea);
        return listTarea;
    }
}
