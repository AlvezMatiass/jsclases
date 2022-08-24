
/* repaso
palabras reservadas:
let -> donde almacenas un valor ej. let hola = ejemplo;
= -> operador de asignacion;
datos -> string, numeros, operadores, etc;
*/

// valores booleanos -> valores logicos, tiene 2 valores. true o false;

let falso = false;
let verdadero = true;
// valores boobleanos

// operadores relacionales

/*
== -> es igual a, puede comparar la igualdad de enteros y string ej. 10 == "10"; tambien diferencia la mayuscula de las minusculas;
> -> es mayor a;
< -> es menor a;
>= o <= -> es menor o igual a;
!= -> no es igual a;
*/

//ejemplos

let resultado = 10 == 10;
console.log( resultado);

let x = 3;
let y = 5;

console.log( x == y); // false
console.log( x == y + 2); // primero va a resolver las operaciones y despues va a comparar, por lo tanto da true

console.log( 40 > 50); // false
console.log( 10 > 5 + 5); // true
console.log( y > 8); // false
console.log( x + x > y); // true

console.log( 5 < 5); // false
console.log( x < y); // true
console.log( 10 < 20); // true
console.log( x + x < y); // false

let mayor = 18 >= 18; // true
let menor = 16 <= 18; // false
console.log( 10 >= 5 + 5); // false
console.log( 3 <= 3); // true

console.log( 10 != 11); // true
console.log( x != y); // true
console.log( 2 != 2); // false
console.log( x + 2 != y); // false

//conficionales if

if (1 == 1) {
    console.log("es igual");
}
// se cumple el if

if (1 == 2) {
    console.log("no es igual")
}
// no se cumple el if

// calculadora con prompt

let num_uno = prompt("ingrese un numero");
let num_dos = prompt("ingrese otro numero");
let operacion = prompt("ingrese un operador");

if (operacion == "+") {
    let suma = parseFloat(num_uno) + parseFloat(num_dos);
    console.log( "el resultado es" , suma);
} else if (operacion == "-") {
    let resta = parseFloat(num_uno) - parseFloat(num_dos);
    console.log( "el resultado es" , resta);
} else if (operacion == "*") {
    let multiplicacion = parseFloat(num_uno) * parseFloat(num_dos);
    console.log( "el resultado es" , multiplicacion);
} else if (operacion == "/") {
    let division = parseFloat(num_uno) / parseFloat(num_dos);
    console.log( "el resultado es" , division);
} else {
    console.log( "operacion no encontrada uwu")
}

/*
operadores and y &&;
vv = v
ff = f
vf = f
fv = f
lista importante

operador o, or, ||
vv = v
vf = v
fv = v
ff = f

ejemplo de or

if (operacion == "+" || operacion == "suma" || operacion == "SUMA") {
    let suma = parseFloat(num_uno) + parseFloat(num_dos);
    console.log( "el resultado es" , suma);
} else {
    console.log("tanto te cuesta poner operador de suma")
}
 */