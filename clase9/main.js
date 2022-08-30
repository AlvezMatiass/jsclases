
// Eventos -> controlar acciones de los usuarios, comportamientos de la pagina o aplicacion

// Onclick -> manera no recomendada de usar eventos, no llega el objeto evento a js -> el objeto evento es algo clave, perdes funcionalidad

// addEventListener() -> escuchar eventos sobre elementos seleccionados, podes hacer varios eventos

let btn_test = document.getElementById("btn_test");

btn_test.addEventListener("click" , function(){
    console.log("hola");
})

btn_test.addEventListener("click" , function(){
    console.log("adios");
})

// para un mismo evento podes hacer varios manejos

// eventHandler -> simplifica el uso, solo podes hacer un manejo. Poniendo on más el manejo que queres hacer

btn_test.onclick = () => {console.log(2)};

// mouse -> se oprime el boton sobre un elemento, eventos con los click del mouse

let btn_dos = document.getElementById("btn_dos");

btn_dos.addEventListener("mousedown" , function(e){
    if (e.button == 0){
        console.log("primer click")
    } else if (e.button == 2){
        console.log("segundo click")
    } else if (e.button == 1) {
        console.log("ruedita nashe")
    } else {
        console.log("nanananan nashe")
    }
})

btn_dos.addEventListener("mouseup" , function(e){
    console.log("se solto el click")
})

btn_dos.addEventListener("click" , function(e){
    console.log("click")
})

// mouseover ,  mouseout -> el puntero del mouse cuando se mueve sobre el elemento

let img = document.getElementById("imagen");

img.addEventListener("mouseover" , function(){
    img.src = "./img/img2.jpg"
})

img.addEventListener("mouseout" , function(){
    img.src = "./img/img1.jpg"
})

// eventos con el teclado

window.addEventListener("keydown" , function(e){
    
    if(e.key == "b"){
        document.body.style.background = "blue"
    } else if(e.key == "n"){
        document.body.style.background = "red"
    }

})

// evento change -> siempre se suele usar en los input










