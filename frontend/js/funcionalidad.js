import { tareaHtml,trHtml, on } from './main.view.js';
const dom = document,
    $tarjetaContainer = dom.querySelector('.tajerContainer'),
    $btnGuardar = dom.querySelector('.btnGuardar'),
    $inputTarjeta = dom.querySelector('.inputTarjeta'),
    url = 'http://localhost:8080';


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
 * Se llamada a la api de manera dinamica al cargar la pagina para traer la informacion 
 * de la Api y consumirla en el fontEnd
 */
fetch(url+'/app/tarjata')
    .then(res => res.json())
    .then(tarjetJson => mostrarInfo(tarjetJson))
    .catch(error => alert(error.message));


const eliminar = async (id) => {
    fetch(url + `/app/tarjeta/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    location.reload()
}


$tarjetaContainer.addEventListener("click", (e)=>{
    if(e.target.classList[0] == "btnEliminarTarea"){
        eliminar(e.target.previousElementSibling.textContent);
    }   
})



// on(dom, 'click','.btnEliminarTarea', e =>{
//     const eliminar = (id) => {
//         fetch(url+`/app/tarjeta/${id}`,{
//             method: 'DELETE'
//         })
//         .then(response => response.json())
//         .then(() => location.reload())
//     }
    
//     if(e.target.classList[0] == "Eliminar"){
//         eliminar(e.target.previousElementSibling.textContent);
//     }   
// });
// on(dom, 'click', '.btnInsertar', e => {
//     e.preventDefault();
//     let $tbodyTh = dom.querySelector('.tbodyTh');
//     const $inserTareaInput = dom.querySelector('.inserTarea').value;
    
//     $tbodyTh.innerHTML += trHtml($inserTareaInput);
// });

/**
 * Funcion encargada de borrar las sub tareas
 */
// on(dom, 'click', '.btnEliminar', e =>{
//     e.preventDefault();
//     const fila = e.target.parentNode.parentNode;
//     const id = fila.firstElementChild.innerHTML;
// });