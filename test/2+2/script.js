// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

/* let respuesta = prompt("Cuanto es 2+2")

while (respuesta != 4) {
   respuesta = prompt("Cuanto es 2+2")
}

console.log("felicidades");
*/

do {
   var respuesta = prompt("Cuanto es 2+2")
} while (respuesta != 4);

console.log("felicidades");