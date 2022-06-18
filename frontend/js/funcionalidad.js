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
    .then(location.reload())
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
    .then(location.reload())
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

const actualizaSubTarea = async (id, name, padre) => {
    console.log(id, name);
    await fetch(url+`/app/listarea/`+id ,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombreTarea": name,
            "stado": false,
            "listaid": {
                "id": padre
            }
        })
    })
    .then(location.reload())
    .catch(console.log(err))
}

const actualizarHtml = ({contend, idButton,inputReferent, buttonReferent}) =>{
    inputReferent.value = contend;
    buttonReferent.value = idButton;
    buttonReferent.textContent = 'Actualizar';
}

/**
 * Funcion encargada de detectar los eventos emitidos por los diferentes 
 * etiquetas dinmaicas, realizar su escucha y captura de informacion
 * permtiendo realizar las distintas opraciones corespondientes.
 */
$tarjetaContainer.addEventListener("click", (e) => {
    /**
     * Validacion encargada de realizar la eliminacion de las tareas
     */
    if (e.target.classList[0] == "btnEliminarTarea") {
        eliminar(e.path[0].value);
    }
    /**
     * Validacion encargada de detectar si se va ha insertar una sub tarea
     */
    if (e.target.textContent == "Insertar") {
        e.preventDefault();
        let data = {
            name: e.target.previousElementSibling.value,
            id: e.path[0].value
        }
        crearListTarea(data)
    }
    /**
     * Validacion encargada si se quiere realizar la eliminacion de la subTarea
     */
    if (e.target.classList[0] == "btnEliminarSubtarea"){
        eliminarSubtarea(e.path[0].value);
    }

    /**
     * Validacion encargada si se quiere actualizar una subtarea
     * realizar la busqueda de los distintos nodos y se les pasa a una funcion que 
     * actualiza el contenido del html
     */
    if (e.target.classList[0] == "btnEditar"){
        let editData = {
            contend: e.path[2].children[1].textContent,
            idButton:e.path[2].children[0].textContent,
            inputReferent: e.path[6].children[0].children[1].children[0].children[0].children[0].children[0],
            buttonReferent: e.path[6].children[0].children[1].children[0].children[0].children[0].children[1]
        }
        actualizarHtml(editData);
    }

    if(e.target.textContent == "Actualizar"){
        e.preventDefault();
        console.log( );
        actualizaSubTarea(e.path[0].value, e.target.previousElementSibling.value, e.path[5].children[0].children[1].textContent);   
    }
});