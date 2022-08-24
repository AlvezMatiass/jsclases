let juegos = [
    {nombre:"GTA V", precio:750},
    {nombre:"Genshin Impact", precio:1200},
    {nombre:"Tower of Fantasy", precio:1500},
    {nombre:"Multiversus", precio:6500},
    {nombre:"GTA VI", precio:11500}
];

function iva_calcular(juegos){
    
    let iva = juegos.precio * 0.75;
    
    return {
        nombre: juegos.nombre,
        precio: juegos.precio + iva
    }

}

let resultado = juegos.map (iva_calcular);
console.log("Total + iva:" , resultado);

