/*
valores:
numeros = 20
string = "hola" ´hola´ 'hola'

 "=" = operador de asignacion
*/
// variables

var usuario = "matias";
// var casi ya no se usa

// otras forma de variable

let contraseña = "1234";
// la nueva forma de usar variable, var fue cambiado por let

let telefono;
let edad;
// podes crear variables vacias para despues darle valor
edad = 21;
// asignamos un valor a la variable vacia

const pagina = "coderhouse";
// se usa para valores que no cambian nunca

edad = 23; // las variables se declaran una sola vez, despues podes reasignarlas

edad = edad * 2; // se multiplica la edad, ya que edad ya esta asignado a un valor ej: 20 * 2= 40

let suma = 20 + 20;// podes usar suma, resta, multiplicacion y etc

let resultado = usuario + contraseña; // mostraria tanto el usuario como la contraseña

// mandar mensajes por la consola
console.log( usuario);
console.log( contraseña);
console.log( edad);
console.log( telefono);// da undefined ya que la variable esta vacia

// Ingresos y salidas de datos

prompt("cuantos años tienes?"); // pregunta al usuario para mandar datos a la consola
alert("cuidado!"); // alerta al usuario, no es para preguntar solo para poner un mensaje 

// ejemplos prompt

let correo = prompt("Ingrese su correo electronico");
console.log( correo);