import {tareaHtml,trHtml, on} from './main.view.js';
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


const mostrarInfo = (tarjetas) =>{
    let tarjeta = '';
    tarjetas.forEach(element => {
       tarjeta += tareaHtml(element.tituloTarea);
    });
    $tarjetaContainer.innerHTML = tarjeta;
}

fetch(url+'/app/tarjata')
    .then(res => res.json())
    .then(tarjetJson => mostrarInfo(tarjetJson))
    .catch(error => alert(error.message));

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