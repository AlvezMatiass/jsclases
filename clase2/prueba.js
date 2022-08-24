let edad = prompt("ingrese su edad");
edad = parseFloat(edad);
let tutor = prompt("viniste con un tutor: si o no")


if (edad >= 18) {
    console.log("pasaste :)");
} else if (edad < 18 && tutor == "si"){
    console.log("pasas con tu tutor");
} else {
    console.log("no podes pasar");
}
