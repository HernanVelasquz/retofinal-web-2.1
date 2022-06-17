export const tareaHtml = (titulo, id) => {
    return `<div class="titles  ">
    <div class="d-flex p-2 justify-content-end">
        <h3 class="me-sm-2">${titulo}</h3>
        <spam class = "spamId">${id}</spam>
        <button class="btnEliminarTarea btn btn-secondary btn-sm" value="${id}" type="submit">Eliminar</button>
        <br>
    </div>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-3">
                <form class="d-flex">
                    <input class="form-control me-2 inserTarea" type="text" placeholder="Insertar tarea">
                    <button class="btnInsertar btn btn-secondary my-2 my-sm-0" value="${id}" type="submit">Insertar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex tablaContainer">
        <table class="table table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tarea</th>
                <th>Completado?</th>
                <th>Ediciones</th>
            </tr>
        </thead>
        <tbody class="tbodyTh"></tbody>
        </table>
    </div>
    <hr>`;
}


export const trHtml = (tarea) => {
    return `<tr>
                <td>${tarea.idListaTarea}</td>
                <td>${tarea.nombreTarea}</td>
                <td><input class="form-check-input" type="checkbox" id="completado"></td>
                <td>
                    <button type="button" class="btn btn-info btn-sm btnEditar">Editar</button>
                    <button type="button" class="btn btn-danger btn-sm btnEliminarSubtarea">Eliminar</button>
                </td>
            </tr>`;
}



export const mostrarTabla = (data) =>{
    let resultado = '';
    console.log(data);
}