// funciones, como crear una
// {} -> las llaves son bloques

function user() {
    console.log("Bienvenido")
};

// la funcion fue creada, pero necesita ser llamada para funcionar

//user();

// asi se llama a una funcion

function sumaDosNumeros() {
    let numUno = parseFloat(prompt("Ingrese un Numero"));
    let numDos = parseFloat(prompt("Ingrese otro numero"))
    let suma = numUno + numDos;
    console.log("La suma es:" , suma);    
};

//sumaDosNumeros();

// podes declarar los parametros dentro de los () de la funcion

function restaDosNumeros( numTres , numCuatro){
    let resta = numTres - numCuatro;
    console.log("El resultado es:" , resta);
};

//restaDosNumeros(90 , 20);

// return

function mayorDeEdad(edad){
    if (edad >= 18){
        return "Podes pasar";
    } else {
        return "No podes pasar";
    }
};

console.log(mayorDeEdad(18));

// tambien podes hacer return de booleanos, true or false

// funciones anonimas - funcion sin nombre

let saludar = function(){
    console.log("hola")
}

// te guardas la funcion dentro de una variable