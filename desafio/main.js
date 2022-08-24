// comprar juegos con impuesto o descuento

let iniciar = alert("Bienvenido a Shenkku Calculator");

let usuario = prompt("Ingrese su nombre de Usuario");
console.log("El usuario se registro con el nombre de"  , usuario);

let juego = prompt("Ingrese el nombre del juego");
let precio = parseFloat(prompt("Ingrese el valor del juego"));

console.log("-----");

console.log("El Juego es" , juego);
console.log("El precio del juego es" , precio , "pesos");

console.log("-----");

let mensaje = "Estamos calculando el total " + juego + "...";
alert(mensaje);

let consulta = prompt("Quiere realizar un descuento del 10%: Si/No");

function comprar_impuestos(precio_impuestos) {
    console.log("Agregaremos el 75% de Impuesto");

    let precio_iva = precio_impuestos + (precio_impuestos * 0.75);

    console.log("Precio total del juego es" , precio_iva , "pesos");
    let total = "El precio total del juego es " + precio_iva + " pesos";

    alert(total);
}

function pagar_cuotas(cantidad_cuotas, precio_juego){
    console.log("El usuario selecciono pagar en", cantidad_cuotas ," cuotas");

    let cuotas_totales = ((precio_juego * 0.75) + precio_juego) / cantidad_cuotas;
    let total_cuotas = "El total del juego en " + cantidad_cuotas + " es de " + cuotas_totales + " pesos";
    
    console.log("El total del juego en" , cantidad_cuotas , "es de" , cuotas_totales , "pesos");
    alert(total_cuotas);
}

function mensaje_mal() {
    alert("Ingresaste algo incorrecto, por favor reinicie la pagina");
    console.log(usuario , "se equivoco al dar las instrucciones");
}

if (consulta == "si" || consulta == "Si" || consulta == "SI"){

    let precio_descuento = precio - (precio * 0.10);
    let total_descuento = console.log("El precio del producto con el descuento aplicado es:" , precio_descuento , "pesos");

    comprar_impuestos(precio_descuento);

} else if (consulta == "no" || consulta == "No" || consulta == "NO"){
    
    comprar_impuestos(precio);

    console.log("-----");

    alert("Como selecciono sin descuento le damos la oportunidad de poder pagar el juego en cuotas sin interes");

    let cuotas = parseFloat(prompt("Si quiere pagar en cuotas seleccione en cuantas (3/6/12) En caso de no querer comprar en cuotas escriba no"));

    if(cuotas == 3){
        
        pagar_cuotas(cuotas, precio);
        
    } else if (cuotas == 6){

        pagar_cuotas(cuotas, precio);

    } else if(cuotas == 9){
        
        pagar_cuotas(cuotas, precio);

    } else if (cuotas == 12){
        
        pagar_cuotas(cuotas, precio);

    } else {
        console.log("El usuario decidio no pagar en cuotas");

        let cuotas_no_mensaje = "Al no queres pagar en cuotas o colocar algo incorrecto te obligamos a aceptar un descuento del 50%";
        alert(cuotas_no_mensaje);

        let cuotas_no = ((precio * 0.75) + precio) / 2;
        let cuotas_no_total = "El precio total del juego es " + cuotas_no + " pesos";
        console.log("El precio total es:" , cuotas_no , "pesos");

        alert(cuotas_no_total);
    }
} else {
    mensaje_mal();
}

 
