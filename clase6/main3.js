// Parte 3
// Array de Objetos -> un arreglo que contiene objetos

class Alumnos{
    constructor(nombre,apellido,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

let lista_alumnos = [];

for( let i = 0 ; i < 3; i++){

    let nombre = prompt("Ingrese el nombre del alumno");
    let apellido = prompt("Ingrese el Apellido del Alumno");
    let dni = parseFloat(prompt("Ingrese el DNI del alumno"));

    let nuevo_alumno = new Alumnos(nombre, apellido, dni);

    lista_alumnos.push(nuevo_alumno);

}

console.log( lista_alumnos);

// For Of -> permite recorrer un array ejecutando un bloque

for(let alumno of lista_alumnos){
    console.log(alumno);
}

// -> da una vuelta por cada elemento del arreglo


for(let alumno of lista_alumnos){
    console.log("______________")
    console.log("Nombre:" , alumno.nombre);
    console.log("Apellido:" , alumno.apellido);
    console.log("DNI:" , alumno.apellido);
}

// -> el let dentro del for es una variable, vos le pones el nombre que quieras