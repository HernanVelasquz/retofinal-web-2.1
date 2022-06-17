import { tareaHtml,trHtml,mostrarTabla} from './main.view.js';
const dom = document,
    $tarjetaContainer = dom.querySelector('.tajerContainer'),
    $btnGuardar = dom.querySelector('.btnGuardar'),
    $inputTarjeta = dom.querySelector('.inputTarjeta'),
    url = 'http://localhost:8080';



/**
 * Se llamada a la api de manera dinamica al cargar la pagina para traer la informacion 
 * de la Api y consumirla en el fontEnd
 */
 fetch(url+'/app/tarjata')
 .then(res => res.json())
 .then(tarjetJson => mostrarInfo(tarjetJson))
 .then(res => obtenerSubTareas())
 .catch(error => alert(error.message));



/**
 * Funcion encargada de conectarse a la Api y crear una nueva tarea
 * Espera que el usuario haga click para poder guardar una tarea.
 */
$btnGuardar.addEventListener('click', () => {
    if($inputTarjeta.value != ''){
        fetch(url+'/app/tarjeta',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                tituloTarea:$inputTarjeta.value
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
    else{
        alert("Ingrese Informacio para crear la tarjeta");
    }
});

/**
 * Metodo encargado de mostrar la informacion de las tareas obtenidas en la base de datos
 * @param {*} tarjetas recibe un arreglo con en formato json para renderizar los datos
 */
const mostrarInfo = (tarjetas) =>{
    let tarjeta = '';   
    tarjetas.forEach(element => {
       tarjeta += tareaHtml(element.tituloTarea, element.id);
    });
    $tarjetaContainer.innerHTML = tarjeta;
}

/**
 * Funcion encargada de recibir el listado de las 
 * subtareas y permitiendo mostrarlas en el html 
 * @param {*} data lista de tareas parciadas.
 */
const mostrarSubtareas = (data) =>{
    const $tbodyTh = dom.querySelector(".tbodyTh");
    let subTarea = '';
    data.forEach(elemt =>{
        console.log(elemt);
        subTarea += trHtml(elemt)
    });
    $tbodyTh.innerHTML = subTarea;
}

/**
 * Funcion encargada de relizar la peticion al endPont
 * de las sub teareas para traer el listado de las subtareas
 */
const obtenerSubTareas = async () =>{
   const peticionSubTareas = await fetch(url+'/app/listareas');
   const parseoData = await peticionSubTareas.json();
   mostrarSubtareas(parseoData);
}

/**
 * Funcion encargada de realizar la eliminacion de la tarea en el listado
 * @param {*} id de la tarea a la cual se encuentra referenciada
 */
const eliminar = async (id) => {
    fetch(url + `/app/tarjeta/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    location.reload();
}


const crearListTarea = ({name, id}) =>{
    fetch(url+'/app/listareas',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombreTarea": name,
            "stado":false,
            "tarjetas": {
                "id" : id
            }
        })
    })
    // .then(res => obtenerSubTareas())
    obtenerSubTareas();
}


/**
 * Funcion encargada de detectar el evento emitido en el contenedor padre 
 * para poder realizar la busqueda entre los elementos de y obtener el 
 * boton que realizo el llamado a la funcionalidad para obtener el id y enviarlo 
 * a la funcion de eliminar.
 */
$tarjetaContainer.addEventListener("click", (e)=>{
    if(e.target.classList[0] == "btnEliminarTarea"){
        eliminar(e.path[0].value);
    }

    if(e.target.classList[0] == "btnInsertar"){
        e.preventDefault();
        let data = {
            name: e.target.previousElementSibling.value,
            id: e.path[0].value
        }

        crearListTarea(data)
    } 
})


 
