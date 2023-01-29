let input1 = document.getElementById("calculo1")
let input2 = document.getElementById("calculo2")
const box2 = document.getElementById("box2")
const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", btnOnClick)

function btnOnClick() {
   input1 = input1.value
   input2 = input2.value
   box2.innerHTML = input1 + input2
}