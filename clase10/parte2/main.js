
let btn_enviar = document.getElementById("btn_enviar");
let btn_borrar = document.getElementById("btn_borrar");

let arreglo_usuario = [];

function setData(){
    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");

    let usuario_final = {nombre:usuario.value , password:pass.value};

    arreglo_usuario.push(usuario_final);

    let arregloJSON = JSON.stringify(arreglo_usuario);
    localStorage.setItem("arreglo_usuarios" , arregloJSON);

    let recuperando_json = localStorage.getItem("arreglo_usuarios")

    recuperando_json = JSON.parse(recuperando_json);

    console.log(recuperando_json);
/*

    let usuario_json = JSON.stringify( usuario );
   
    //localStorage.setItem("Usuario" , usuario_json);

    //console.log(usuario_json);

    let recuperando_json = localStorage.getItem("Usuario")

    recuperando_json = JSON.parse(recuperando_json);

    console.log(recuperando_json);
*/
}

btn_enviar.addEventListener("click", setData);

