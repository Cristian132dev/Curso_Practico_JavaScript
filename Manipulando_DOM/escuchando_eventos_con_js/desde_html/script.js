let input1 = document.getElementById("calculo1")
let input2 = document.getElementById("calculo2")
const box = document.getElementById("box")
const box2 = document.getElementById("box2")
const btnCalcular = document.getElementById("btnCalcular")

let asnwer = document.createElement("p")
input1 = parseInt(input1.value)
input2 = parseInt(input2.value)

function suma (value1, value2) {
   return value1 + value2
}

function btnOnClick() {
   asnwer.textContent = suma(input1, input2)
   box.appendChild(asnwer)

   //* solucion del profe, mas sencilla que la mia xD
   box2.innerHTML = asnwer2 = suma(input1, input2)
}

// btnCalcular.addEventListener("click", btnOnClick)