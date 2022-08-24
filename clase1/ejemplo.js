let nombre = prompt("Nombre");
let apellido = prompt("Apellido");
let correo = prompt("Ingrese su Correo Electronico");

console.log( nombre);
console.log( apellido);
console.log( correo);

let numUno = prompt("Escriba su edad");
let numDos = prompt("Escriba la edad de su perro");

let resultado = parseInt(numUno) + parseInt(numDos);

console.log("La edad de ambos sumada esa" , resultado)
// todo lo que viene por prompt es un string por lo tando no sumaria los numeros sino que los juntaria. Podemos forzar los datos para transformarlos a numeros

// parseInt, va a intentar convertir los valores en numeros enteros

// parseFloat, va a incluir tambien la parte decimal