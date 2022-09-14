// Operadores avanzados

// sugar sintax -> son simplificaciones 

// ++ -> incrementa en 1

let numero = 10;

numero++;

numero +=1;

numero *=2;

console.log(numero);

// operador ternario 

// condicion ? casoTrue ; casoFalse

// 20 > 10 ? alert("true") : alert("false");

// por más que no se vea hay un return

// let edad = 10;

// let votar = edad >= 18 ? true : false;
// console.log(votar);

// operador logico and && y or ||

// Falsy - NaN - null - 0 , undefined - "" - false -> devulve el primer elemento si es false
// truly -> devuelve el ultimo elemento si es true

console.log( 20 && 60 );
console.log( 0 && 10 );

// OR || -> retorna el primer elemento verdadero o el ultimo falso, si es que no encuentra verdadero

console.log( 40 || false);
console.log( 0 || NaN || 10);

// Operador si o si ===

console.log( 5 === 5 );
console.log( 5 === "5" )

// Operador Nullish -> null y undefined son operadores false, los demas son verdaderos

// Desestructuración -> traer diferentes propiedades de un elemento

let user = {
    nombre:"Matias",
    edad:"20"
}

//let { nombre } = user;

// Multiples propiedades -> acceder a los valores de forma más sensilla

//let { nombre , edad } = user;
// tienen que tener el mismo nombre dentro del arreglo user

// Alias

let superheroe = [
    "batman",
    "batichico"
];

let {nombre_heroe , nombre_real:nombre_secreto} = superheroe;
//forma de modificar la variable

// desetructurar arreglos

let lista_hermanos = [
    "Matias",
    "Kevin",
    "Ariel",
    "Chelo"
]

let [a , b , c , d] = lista_hermanos;

// para los arreglos van las []

// Spread  ...  -> cambia la forma en la que se presenta un onjeto o array

//console.log(lista_hermanos);
//console.log(...lista_hermanos);

// saca los valores dentro del arreglo o objeto y los presenta como string

let hermanos_super = [...superheroe , ...lista_hermanos];
console.log(hermanos_super);

// Max -> te muestra el numero más grande

console.log(Math.max(20, 30, 10, 2, 3, 4));
// necesita si o si numeros como valores, no arreglos ni objetos

// usando Spread ... -> podes sacar los valores de un arreglo o objeto y les da los resultados - tambien podes clonar cosas

// rest parameters -> podes juntar elementos para hacerlos array o objetos

function suma(...numeros){
 let suma_total = 0;
 for( let i = 0; i < numeros.length ; i++){
    suma_total += numeros[i]
 }
 console.log(suma_total);
}

suma(2,3,4,10);
suma(20,43);


