// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Expert";

switch (tipoDeSuscripcion) {
   case "Free":
      console.log("Solo puedes tomar los cursos gratis");
      break;
   case "Basic":
      console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
      break;
   case "Expert":
      console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
      break;
   case "ExpertPlus":
      console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
      break;
}

// Replica usando Condicionales IF, ELSE IF y ELSE

if (tipoDeSuscripcion == "Free") {
   console.log("Solo puedes tomar los cursos gratis");

} else if (tipoDeSuscripcion == "Basic") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

} else if (tipoDeSuscripcion == "Expert") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

} else if (tipoDeSuscripcion == "ExpertPlus") {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}

// Ahora solo con IF

if (tipoDeSuscripcion == "Free") {
   console.log("Solo puedes tomar los cursos gratis");

} if (tipoDeSuscripcion == "Basic") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

} if (tipoDeSuscripcion == "Expert") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

} if (tipoDeSuscripcion == "ExpertPlus") {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}