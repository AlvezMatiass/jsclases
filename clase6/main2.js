// Parte 2 de la Clase
// Push -> es un metodo para agregar un valor al array

let users = ["Matias" , "Ariel" , "Kevin" , "Fernando" , "Marcela" , "Cannie" , "Meme"];

console.log("Usuarios Iniciales" , users);

// users[1] = "Pedro"; -> cambiaria el valor de Ariel, ya que estas llamando al valor 1 dentro del array

// Push ejemplos

users.push("Chelo"); // -> se agrega Chelo al final del Array

console.log("Usuarios Actualizados" , users);

// Unshift -> agrega el valor al inicio del array

users.unshift("Jose");

console.log("Usuarios" , users);

// shift -> elimina/saca el primer elemento del array

users.shift();

console.log("Usuarios" , users);

// pop -> elimina/saca el ultimo elemento del array

users.pop();

console.log("Usuarios" , users);

// saca el primer elemento Matias y lo muestra en la consola, no solo lo elimina

let ej_shift = users.shift();
console.log(ej_shift);

console.log("Usuarios" , users);

// Estos 4 metodos sirven para la manipulacion

// Splice -> permite eliminar uno o varios elementos

users.splice(2,1); // -> selecciona el tercer elemento y el segundo sirve para cuantos elementos queres eliminar

console.log("Usuarios" , users);

users.splice(2,1, "Chelo"); // -> Borra el tercer elemento y agrega uno en su lugar

console.log("Usuarios" , users);

// Join -> te devuelve un string con todos los valores de un arreglo

let ej_join = users.join(); //-> le podes decir con que queres separarlo
console.log("Usuarios con Join" , ej_join);

// Concat -> te permite combinar 2 arrays en uno solo

let perro_padres = ["Cannie" , "Minnie"];
let perro_hijos = ["Meme" , "Margo" , "Arthur"];

let perros = perro_padres.concat(perro_hijos);
console.log(perros);

// -> te fusiona ambos arrays, creando asi un tercer arreglo sin modificar los 2 anteriores

// Slice -> copia una parte del array dentro de un nuevo array -> es como cortar partes del arreglo

console.log(users);

let corto = users.slice(1,3);
console.log("Usuarios" , corto);

// -> corta del elemento 2 al 4

let ej_corte = perros.slice(1,3);
console.log(ej_corte);

// -> si le pedis que te corte del 1 al 5, te va a devolver el 1,2,3,4 y te los devuelve en un nuevo arreglo

// Indexof -> nos permite obtener el primer indice del array

console.log("________________");
console.log(users);

// Indexof Ejemplo

console.log("Que numero de Elemento es" , users.indexOf("Kevin"));

// Si el elemento no existe te devuelve un -1

let elemento_eliminar = users.indexOf("Cannie");
users.splice( elemento_eliminar, 1);
console.log(users);

// te permite seleccionar un elemento y eliminarlo con el splice o saber si este existe

// -> da vuelta los resultados, nada complicado. Modifica el original

users.reverse();
console.log(users);








