// DOM - estructura de objetos generado por el navegador,cada etiqueta HTML es un objeto llamado Nodo

/*

getElementByld() -> atrae un elemento por ID
getElementsByClassName() -> atrae elementos por nombre de clases
getElementsByTagName() -> atrae elementos por nombre de etiqueta

*/

// getElementbyId Ejemplo

/* 

let user = prompt("Ingrese su nombre de usuario");

let titulo = document.getElementById("titulo");

console.log(titulo.innerText);

titulo.innerHTML = "Bienvenido " + user;

*/

/*

// getElementsByClass

let texto = document.getElementsByClassName("texto");
console.log(texto);

// te genera una coleccion de objetos, parecido a un Array

*/

/*

// getElementsByTagName()

let li = document.getElementsByTagName("li");
console.log(li);

for(let elemento of li){
    console.log(elemento);
}

*/

/*

// Modificar nodos

let conteiner = document.getElementById("conteiner");

conteiner.innerHTML = '<p class="p_color_rojo">Hola<p>'
// agregas una etiqueta al conteiner div
// no podes generar más de una etiqueta

conteiner.className = 'p_color_azul';

*/

let conteiner = document.getElementById("conteiner");

let crear_tag = document.createElement("div");

// creas un tag con un texto
crear_tag.innerHTML = "<p>Hola<p>"

// podes agregar un estilo a un tag
crear_tag.style.fontSize = "2rem"

// agregas el tag creado al conteiner
conteiner.append(crear_tag);








