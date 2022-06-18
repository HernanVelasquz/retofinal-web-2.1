/**
 * Funcion encargada de retornar la estructura
 * del html y los datos que se requieran envar la subtarea con los 
 * parametros recibidos
 * @param {*} idListaTarea 
 * @param {*} nombreTarea 
 * @param {*} obj 
 * @returns estructura html con los parametros enviados
 */
export const trHtml = (idListaTarea, nombreTarea, obj) => {
    let check;
    let clase; 
    let dis;
    if(obj.stado){
        check = 'checked'
        clase = 'danger'
        dis = 'd-none'
    }else{
        check = 'unchecked'
        clase = 'active'
        dis = ''
    }
    return `<tr class ="table-${clase}">
                <td>${idListaTarea}</td>
                <td value="${nombreTarea}">${nombreTarea}</td>
                <td><input class="form-check-input completado" ${check} type="checkbox"></td>
                <td>
                    <button type="button" class="btnEditar btn btn-info btn-sm ${dis}">Editar</button>
                    <button type="button" class="btnEliminarSubtarea btn btn-danger btn-sm" value="${idListaTarea}">Eliminar</button>
                </td>
            </tr>`;
}

/**
 * Los parametos de los datos encargado de agrega la tarjeta de la tarea principal 
 * generando los datos de manera dinamica permitiendo insertar los datos y tareas 
 * que provienen de la base de datos 
 * @param {*} titulo 
 * @param {*} id 
 * @param {*} listTask 
 * @returns la estructura html con los datos insertados
 */
export const tareaHtml = (titulo, id, listTask) => {
    return `<div class="titles ">
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
        <tbody class="tbodyTh">
            ${listTask}
        </tbody>
        </table>
    </div>
    <hr>`;
}
