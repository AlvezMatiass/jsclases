// Segunda Manera de declarar Objetos
// Funccion Constructora

function usuario(usuario, correo, password){
    this.usuario = usuario;
    this.correo = correo;
    this.password = password;
}

// This(Objetos) -> Identificar de que objeto estoy hablando 

let usuario_uno = new usuario("Shenkku" , "matiasalvez2018@gmail.com" , "edad");
let usuario_dos = new usuario("Franciscois16" , "franciscogay10@gmail.com" , "monogatarifan1");

// New -> se usa para llamar a la funcion constructora, crea una nueva instancia, informacion, variable

console.log(usuario_uno);
console.log(usuario_dos);

// La funcion va a construir una funcion constructora