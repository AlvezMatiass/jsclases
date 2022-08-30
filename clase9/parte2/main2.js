// evento change

let usuario = document.getElementById("nombre_usuario");

/*
usuario.addEventListener("input" , function(e){
    console.log(e.target.value)
})
*/
usuario.addEventListener("change", function(e){
    console.log(e.target.value)

    if(e.target.value == "Matias"){
        console.log("que onda capo")
    } else {
        console.log("hahahaha")
    }

})

// event submit -> activa cuando el formulario se envia

let form = document.getElementById("form");

form.addEventListener("submit" , function(e){

    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let pass = document.getElementById("pass");

    
    console.log("Usuario:" , nombre.value);
    console.log("Password:" , pass.value);

})





