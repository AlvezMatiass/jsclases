
let boton = document.getElementById("btn");

boton.addEventListener("click" , function(){
    let producto = document.getElementById("producto");
    let precio = document.getElementById("precio");
    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    li.innerHTML = `<p> Producto: ${producto.value}</p>
                    <p> Precio: ${precio.value}</p>
                    <button class="borrar">Eliminar</button>`;

    lista.append(li)

    let boton_borrar = document.querySelectorAll(".borrar");

    console.log( boton_borrar);

    for(let boton of boton_borrar){
        boton.addEventListener("click" , borrar_elemento);
    }

})

function borrar_elemento(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    padre.remove();

}
