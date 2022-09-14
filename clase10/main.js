// STORAGE API -> guardar datos en el navegador de forma local en el navegador, hay 2 tipos: localStorage y sessionStorage

// localStorage: setitem

let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");
let btn_enviar = document.getElementById("btn_enviar");
let btn_borrar = document.getElementById("btn_borrar");

// definimos claves para almacenar valores

//almacenamos elementos

/*
localStorage.setItem("cliente_uno" , "Matias");
localStorage.setItem("edad" , 20);
localStorage.setItem("lista" , ["azul" , "amarillo" , "rojo" , "verde"]);


//recuperamos los elementos mediante la llave

let cliente = localStorage.getItem("cliente_uno");
let edad = localStorage.getItem("edad");
let lista = localStorage.getItem("lista");

console.log(cliente , edad , lista);

// se puede obtener todos los valores almacenados en localStorage o sessionStorage con un bucle -> no se puede usar for...of porque no son objetos iterables ni tampoco for...in porque se obtienen propiedades del objetos que no son valores almacenados

console.log(localStorage.length);

for(let i = 0; i < localStorage.length ; i++){

    let clave = localStorage.key(i);
    console.log(clave);
    console.log(localStorage.getItem(clave));

}
*/

// key -> da un paseo por todas las key, asi no hace falta ingresar la clave de uno en uno

// sessionStorage -> se almacena hasta que el usuario cierre la ventana

/*
function guardar_session(){

    sessionStorage.setItem("cliente_dos", "Kevin");
    sessionStorage.setItem("edad_dos" , 23);
    sessionStorage.setItem("lista_dos" , ["Amarillo" , "Negro" , "Azul"]);

}

btn_enviar.addEventListener("click" , guardar_session);
*/

let clientes = [{"nombre":"Matias" , "apellido":"Alvez"},{"nombre":"Kevin" , "apellido":"Alvez"}];

localStorage.setItem(clientes);

// JSON -> notacion de objetos de js -> formato de texto plano que esta formateado como objetos de js



