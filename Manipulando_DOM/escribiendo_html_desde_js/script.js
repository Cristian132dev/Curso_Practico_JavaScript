/* metodos que selecciona etiquetas del html y elementos de css (para estos se usa el estandar de css) */
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")
const box = document.querySelector(".caja")

/* agrupa los elementos a mostrar en la consola en un objeto */
console.log({
   h1,
   p,
   parrafito,
   pid,
   input
});

console.log(h1);

/* innerHTML cambia el documento html y acepta etiquetas  */
h1.innerHTML = "<i>cambio con</i> <br>Javascript";

/*  innerText modifica unicamente el texto, hace el codigo mas seguro ante ataques */
parrafito.innerText = "nombre una cosa rebarbara"
input.placeholder = "i'm your father"


/*  la forma habitual de hacer este tipo de cambios es con getAtribute y setAtribute, que nos devuelve o modifica los atributos de nuestros elementos */

/* getAtribute obtiene el atributo de nuestros elementos */
console.log(h1.getAttribute("class"));

/* con setAtribute podemos cambiar el atributo, primero el atributo que vamos a cambiar y despues el valor */
//!cabe aclarar que lo que hace es cambiar el valor del atributo NO LO REEMPLAZA */
h1.setAttribute("class", "rojo")


/* añade una clase nueva al elemento, si la clase ya existe se ignorara */
h1.classList.add("verde")

/* elimina la clase que le indiquemos del elemento */
h1.classList.remove("rojo")

//* lo visto hasta ahora nos permite modificar elementos, para crearlos usamos

//todo: se crea el elemento
//todo: se añade contenido, atributos, valores, etc.
//todo: se incrusta en algun elemento del HTML (este debe estar creado directamente)


let spanglish = document.createElement("span")
spanglish.textContent = "A la madre soy un genio"

box.appendChild(spanglish)
console.log(spanglish);
