// Calculadora Iva Steam juegos

class Juegos_steam{
    constructor(usuario, juego, precio, cuotas, cantidad_cuotas){
        this.usuario = usuario;
        this.juego = juego;
        this.precio = precio;
        this.cuotas = cuotas;
        this.cantidad_cuotas = cantidad_cuotas;
        this.total = 0;
    };

    cuotas_si_no(){
        if(this.cuotas == "NO" || this.cuotas == "No" || this.cuotas == "no"){
            this.total = this.precio + (this.precio * 0.75);
        } else if(this.cuotas == "SI" || this.cuotas == "Si" || this.cuotas == "si"){
            this.cantidad_cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas: 3/6/12"));
            if(this.cantidad_cuotas == 3) {
                this.total = ((this.precio * 0.75) + this.precio) / this.cantidad_cuotas;
            } else if(this.cantidad_cuotas == 6) {
                this.total = ((this.precio * 0.75) + this.precio) / this.cantidad_cuotas;
            } else if(this.cantidad_cuotas == 12) {
                this.total = ((this.precio * 0.75) + this.precio) / this.cantidad_cuotas;
            }
        } else {
            this.total = this.precio + (this.precio * 2.75);
            console.log("_______________");
            console.log("Por gracioso el usuario va a pagar" , this.total);
            console.log("_______________");
        }
    };

    ticket_juego(){
        console.log("_______________");
        console.log("Ticket de compra:");
        console.log("Usuario:" , this.usuario);
        console.log("Juego:", this.juego);
        console.log("Precio:", this.precio);
        console.log("Cuotas:", this.cantidad_cuotas);
        console.log("IVA 75%");
        console.log("Total:", this.total);
        console.log("_______________");
    };

};

// Almacena los datos de los compradores
let lista_juegos = [];


// Puse que 5 personas puedan comprar para poder probar todas las opciones
for(let i = 0; i < 5; i++) {
    let usuario = prompt("Ingrese su nombre de usuario");
    let juego = prompt("Ingrese el nombre del juego");
    let precio = parseFloat(prompt("Ingrese el precio del juego"));
    let cuotas = prompt("Quiere pagar en cuotas? Si/No");
    
    let juegos_steam = new Juegos_steam( usuario , juego , precio , cuotas);
    juegos_steam.cuotas_si_no();

    lista_juegos.push(juegos_steam);
    console.log(lista_juegos);

    juegos_steam.ticket_juego();

    let total_juego = "El total es " + juegos_steam.total + " pesos";
    alert(total_juego);
};
