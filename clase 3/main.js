/* Tipos de bucles:
for -> te permite repetir un numero de veces en especifico
while, do...while -> repite un bloque de codigo mientras la condicion es verdadera
*/

// estructura del for


for( let i = 0; i < 2; i++){
    console.log(i);
}


// for ( let i = 0 -> primero definis la variable -> i < 10 -> especificas la accion del bucle -> i++ -> definis la forma en la que se actualiza)

// i++ -> i = i + 1;

for (let i = 0; i < 3; i++) {
    let numero = parseFloat(prompt("Ingrese un numero"));
    console.log("el numero que le sigue es" , numero + 1);
}

let numero = parseFloat(prompt("Numero del 1 al 10"));

for (let i = 0; i <= 10; i++) {
    console.log(numero * i);
}


// break -> rompe el bucle, lo termina aunque falten vueltas

for(let i = 0; i < 3; i++) {
    let numUno = parseFloat(prompt("Pone un numero compa"));
    let numDos = parseFloat(prompt("Pone un numero compa"));

    if(numDos == 0) {
        console.log("anda a estudiar");
        break;
    }

    console.log("el resultado es:" , numUno / numDos);
}

// continue -> salta el bucle malo y continua con los demas

for(let i = 0; i < 3; i++) {
    let numUno = parseFloat(prompt("Pone un numero compa"));
    let numDos = parseFloat(prompt("Pone un numero compa"));

    if(numDos == 0) {
        console.log("anda a estudiar");
        continue;
    }

    console.log("el resultado es:" , numUno / numDos);
}

// WHILE -> mientras, es un bucle condicional

let ejemplo = "";

while( ejemplo != "salir"){
    ejemplo = prompt("Nombre o salir");
    console.log("Bienvenido:" , ejemplo)
};

let ejercicio = "";
let partidoA = 0;
let partidoB = 0;

while( ejercicio != "terminar"){
    ejercicio = prompt("Vota por el partido A o B");

    if(ejercicio == "A") {
        partidoA = partidoA + 1;
    } else if(ejercicio == "B") {
        partidoB = partidoB + 1;
    } else {
        console.log("voto nulo")
    }
}

if(partidoA > partidoB) {
    console.log("Gano el partido A");
} else if(partidoB > partidoA) {
    console.log("Gano el partido B");
} else {
    console.log("Empataron");
}

// do...while permite que si o si se pida el nombre y no se puede cancelar sin tener antes una respuesta

let nombreEjemplo;

do {
    nombreEjemplo = prompt("Nombre");
    console.log("Bienvenido" , nombreEjemplo);
}
while(nombreEjemplo != "terminar");
