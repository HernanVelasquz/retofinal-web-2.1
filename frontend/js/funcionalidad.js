import { tareaHtml, trHtml, mostrarTabla } from './main.view.js';
const dom = document,
    $tarjetaContainer = dom.querySelector('.tajerContainer'),
    $btnGuardar = dom.querySelector('.btnGuardar'),
    $inputTarjeta = dom.querySelector('.inputTarjeta'),
    url = 'http://localhost:8080';



/**
 * Se llamada a la api de manera dinamica al cargar la pagina para traer la informacion 
 * de la Api y consumirla en el fontEnd
 */
fetch(url + '/app/tarjata')
    .then(res => res.json())
    .then(tarjetJson => mostrarInfo(tarjetJson))
    .catch(error => alert(error.message));



/**
 * Funcion encargada de conectarse a la Api y crear una nueva tarea
 * Espera que el usuario haga click para poder guardar una tarea.
 */
$btnGuardar.addEventListener('click', () => {
    if ($inputTarjeta.value != '') {
        fetch(url + '/app/tarjeta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tituloTarea: $inputTarjeta.value
            })
        })
            .then(response => response.json())
            .then(data => {
                const tarjeta = [];
                tarjeta.push(data)
                mostrarInfo(tarjeta)
                location.reload()
            });
        $inputTarjeta.value = '';
    }
    else {
        alert("Ingrese Informacio para crear la tarjeta");
    }
});

/**
 * Metodo encargado de mostrar la informacion de las tareas obtenidas en la base de datos
 * @param {*} tarjetas recibe un arreglo con en formato json para renderizar los datos
 */
const mostrarInfo = async (tarjetas) => {
    let tarjeta = '';
    let tarea = '';
    await tarjetas.forEach(e => {
        tarea = '';
        e.listTask.forEach(taks => {
            tarea += trHtml(taks.idListaTarea, taks.nombreTarea);
        })
        tarjeta += tareaHtml(e.tituloTarea, e.id, tarea);
    });

    $tarjetaContainer.innerHTML = tarjeta;
}

/**
 * Funcion encargada de realizar la eliminacion de la tarjeta que 
 * contiene el listado de tareas
 * @param {*} id de la tarea a la cual se encuentra referenciada
 */
const eliminar = async (id) => {
    await fetch(url + `/app/tarjeta/${id}`, {
        method: 'DELETE'
    })
    .then(response => location.reload())
    .catch(error => console.log(error))
}

/**
 * Fucion encargada de creaar la lista de tareas aplicando
 * la desestrcturacion de archivos para poder enviar la informacionn
 * a los parametros requeridos que necesita la api en el backend
 * @param {*} param0 
 */
const crearListTarea = async ({ name, id }) => {
    await fetch(url + '/app/listareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombreTarea": name,
            "stado": false,
            "listaid": {
                "id": id
            }
        })
    })
    .then(res => location.reload())
}

/**
 * Metodo encargada de realizar la eliminacion de las sun tareas
 * recibiendo un id en forma de parametro.
 * @param {number} id 
 */
const eliminarSubtarea = async (id) => {
    await fetch(url + `/app/listarea/${id}`, {
        method: 'DELETE'   
    }).then(location.reload())
    .catch(console.log(err))
}

/**
 * Funcion encargada de detectar los eventos emitidos por los diferentes 
 * etiquetas dinmaicas, realizar su escucha y captura de informacion
 * permtiendo realizar las distintas opraciones corespondientes.
 */
$tarjetaContainer.addEventListener("click", (e) => {
    if (e.target.classList[0] == "btnEliminarTarea") {
        eliminar(e.path[0].value);
    }

    if (e.target.classList[0] == "btnInsertar") {
        e.preventDefault();
        let data = {
            name: e.target.previousElementSibling.value,
            id: e.path[0].value
        }

        crearListTarea(data)
    }

    if (e.target.classList[0] == "btnEliminarSubtarea"){
        eliminarSubtarea(e.path[0].value);
    }
});