
let usuario_registrado = "Matias";


function saludar(){

    let nombre = document.getElementById("nombre_usuario");

    console.log("Bienvenido" , nombre.value)

}
/*
function validar(){

    let nombre = document.getElementById("nombre_usuario");
    let mensaje = document.getElementById("mensaje");

    if(nombre.value == usuario_registrado){
    
        let texto = document.createElement("p");
        error.innerHTML = "";
        texto.innerText = "Bienvenido a la consola";
        mensaje.append(texto);

    } else {
        
    let error = document.createElement("p");
    error.innerHTML = "";
    error.innerText = "Usuario incorrecto";
    mensaje.append(error)
    
    }

}
*/

// Plantillas o Strings literales -> podes insertar el valor de una variable

function validar(){

    let nombre = document.getElementById("nombre_usuario");
    let mensaje = document.getElementById("mensaje");

    if(nombre.value == usuario_registrado){
    
        let texto = document.createElement("p");
        error.innerHTML = "";
        texto.innerText = "Bienvenido a la consola";
        mensaje.append(texto);

    } else {
        
    document.body.innerHTML = `<p> Usuario: ${nombre.value} no registrado </p>`;
    }

}


