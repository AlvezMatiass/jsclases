// Funciones de Orden Superior

/*
function saludar() {
    console.log("hola");
};

let saludo = function(){
    console.log("hola")
};
*/

// retorna o recibe una funcion por parametro

/*
function doble(num){
    return num * 2;
}

function triple(num){
    return num * 3;
}

function cuadruple(num){
    return num * 4;
}

let resultado = doble(10);
console.log("El resultado es:" , resultado);
*/

/*
// dentro de una funcion podes crear una funcion anonima para poder retornar
function crear_multiplicador(multiplicador){
    return function(num){
        return num * multiplicador;
    }
}

let multiplicar = crear_multiplicador(parseFloat(prompt("Decida el multiplicador")));
// este es el x num

console.log(multiplicar(parseFloat(prompt("Decida el multiplicador"))));
// este es el numero que queres multiplicar
*/

/*

// funcion por parametro

function saludar_todos( arr , saludar){

    for(let nombre of arr){
        saludar(nombre);
    }

}

function saludar(nombre){
    console.log("Hola", nombre);
}

let lista = ["Matias","Kevin","Ariel","Chelo"];

saludar_todos(lista , saludar)

// cuando pones sin parentesis no la llamas sino que pasas una referencia

// primero la funcion y despues el arreglo

*/

// las siguientes funciones funcionan siempre iterando sobre el array

// forEach() -> ejecuta una funcion para cada uno de los elementos de un arreglo

let numero = [1,2];

numero.forEach( function(num){
    console.log("__________________")
    console.log("Numero:" , num);
    console.log("El doble es: " , num * 2);
    console.log("__________________")
})

// find() -> recibe una funcion de comparacion, retorna si es true o false

let lista = [
    {nombre:"Kevin" , apellido:"Alvez" , edad:22},
    {nombre:"Ariel" , apellido:"Alvez" , edad:26},
    {nombre:"Matias" , apellido:"Alvez" , edad:20},
    {nombre:"Chelo" , apellido:"Alvez" , edad:28}
]

function buscar_nombre( lista){
    return lista.nombre == "Matias";
}

// da una vuelta por cada elemento, si el elemento que buscar esta ultimo da una vuelta por todos hasta llegar ahi

let resultado_find = lista.find( buscar_nombre);
console.log("Usuario:" , resultado_find);

// filter() -> recibe una funcion comparadora y retorna un nuevo arreglo, si no hay nada retorna un array vacio

// find() buscar un solo valor filter() buscar todos los valores

let listaDos = [
    {nombre:"Kevin" , apellido:"Alvez" , edad:22},
    {nombre:"Ariel" , apellido:"Alvez" , edad:26},
    {nombre:"Matias" , apellido:"Alvez" , edad:12},
    {nombre:"Matias" , apellido:"Alvez" , edad:55},
    {nombre:"Matias" , apellido:"Alvez" , edad:23},
    {nombre:"Matias" , apellido:"Alvez" , edad:11},
    {nombre:"Matias" , apellido:"Alvez" , edad:4},
    {nombre:"Matias" , apellido:"Alvez" , edad:17},
    {nombre:"Chelo" , apellido:"Alvez" , edad:28}
]

function mayor_de_edad(usuario){
    return usuario.edad >= 26;
};

let resultado_filter = listaDos.filter(mayor_de_edad);
console.log(resultado_filter);

// busca a todos los usuarios mayores a 20 años, entonces los devuelve un nuevo array con los datos sacados. no modifica el array original

// map() -> crea un nuevo array con todos los elementos modificados del original

function triple(num){
    return num * 3;
}

let lista_num = [12,3,5,2,15,67,54];

let resultado_map = lista_num.map(triple);
console.log(resultado_map);
console.log("_________________")

// forEach te modifica el array, Map te crea un nuevo arreglo con las modificaciones

// reduce() -> obtiene un unico valor tras iterar sobre un array, resume el array a un solo resultado

let juegos_vendidos = [
    {nombre:"GTA V", precio:750},
    {nombre:"Genshin Impact", precio:1200},
    {nombre:"Tower of Fantasy", precio:1500},
    {nombre:"Multiversus", precio:6500},
    {nombre:"GTA VI", precio:11500}
];

// vamos a calcular el total 

function total_calcular( acu , producto){
    acu = acu + producto.precio;
    return acu;
}

let venta_total = juegos_vendidos.reduce( total_calcular , 0);
console.log("El total es:", venta_total);
console.log("_________________")

// Sort() -> sirve para reordenar un arreglo alfabeticamente

let paises = ["Argentina" , "Chile" , "España" , "USA" , "Canada"];

console.log(paises.sort());

// modifica el array original, hay que tener cuidado con eso

let numeros = [5, 6, 3, 1, 2];

console.log(numeros.sort());

// solo lee el primer caracteer, por eso sirve para ordenar alfabeticamente

function ordenar(a,b){
    return a - b;
}

let resultado_sort = numeros.sort(ordenar);






