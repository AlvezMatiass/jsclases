

function agregar(){

    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista");
    let precio = document.getElementById("precio");

    let texto = document.createElement("p");
    texto.innerText = "Producto: " + producto.value;
    lista.append(texto);

    let texto_precio = document.createElement("p");
    texto_precio.innerText = "Precio: " + precio.value;
    lista.append(texto_precio);

    let separar = document.createElement("p");
    separar.innerText = "-----------------------------------------------";
    lista.append(separar);

}
