// Array -> tipo de dato que sirve para almacenar valorares en forma de lista
// Tienen un indice que va de 0 en adelante
// Array -> [], arreglo vacio. Los valores se separan por ,

let alumnos = ["Matias", "Kevin", "Ariel", "Chelo"];

// alumnos = "Josele"; -> no se puede agregar al Array, cambiaria el valor a solo Josele

console.log( alumnos[0]); // -> accede a Matias, ya que comienza a contar desde 0

let random = ["Messi" , 20 , "Zanahoria" , ["Cannie" , "Minnie" , "Meme" , "Arthur"] , 40 , true]; // -> arreglo anidado, un Array dentro de un Array

console.log( random[1]); // -> Llama a 20
console.log( random[4]); // -> llama a 40 ya que el array dentro del array cuenta como uno
console.log( random[3]); // -> llamo al array dentro del array, me da los 3 valores
console.log( random[3][2]); // -> llamo al tercer valor dentro del array anidado

// Los Array son objetos iterables

console.log("___________________");

for( let i = 0 ; i < 4 ; i++){
    console.log("Señor" , alumnos[i])
};

// Ponemos i dentro del Array ya que i = 0 y asi se va sumando
// propiedades y metodos de arreglos

// Lenght -> te cuenta cuantas propiedades tiene un arreglo

console.log("Alunmos:" , alumnos.length);

// ejemplo for con length

for( let i = 0 ; i < alumnos.length ; i++){
    console.log("Señor" , alumnos[i])
};

// Si se llega a sumar algun alumno el length va a contarlo los arreglos


