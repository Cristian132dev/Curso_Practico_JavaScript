// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function read_array(array) {
   console.log(array[0]);
}

numbers = [7, 54, 1, 2, 5, 54,]

read_array(numbers)

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

// creado por mi
function print_array(array) {
   for (let i = 0; array.length >= i; i++) {
      console.log(array[i]);
   }
}

print_array(numbers)

console.log("---------------");

// creado por mozilla
numbers.forEach(number => {
   console.log(number);
});

console.log("---------------");

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let persona = {
   nombre: "cristian",
   edad: 21,
   altura: 184,
   peso: 85
}

// que no se me olvide esto xD
function print_object (object) {
   for (const key in object) {
      console.log(`${key}: ${object[key]}`) ;
   }
}

print_object(persona)