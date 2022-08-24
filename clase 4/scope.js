
// el scope tiene el ambito global y el local, dentro o fuera de un bloque {}

{
    let hola = "hola"
}

console.log(hola);

// no la va a llamar ya que hola es una funcion local y no global

let nashe = 10;

{
    console.log(nashe)
}

// lo va a llamar ya que la variable es global y puede ser llamada

// var ya no se usa ya que aunque se cree de forma local se puede usar de global y podria causar problemas