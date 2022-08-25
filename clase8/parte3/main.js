

function agregar(){
    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista");

    let texto = document.createElement("li");
    texto.innerText = producto.value;
    lista.append(texto);

}
