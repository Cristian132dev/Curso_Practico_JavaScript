/* metodos que selecciona etiquetas del html y elementos de css (para estos se usa el estandar de css) */
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

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


/*  la forma habitual de hacer este tipo de cambios es con getAtribute y setAtribute, que nos devuelve o modifica los atributos de nuestros elementos */

console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo")














