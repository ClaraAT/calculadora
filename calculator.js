

/* //NIVEL 1 y 2 EJEMPLO DE SUMA
var number1 = prompt("First Value");
var number2 = prompt ("Second Value");
var opperation = prompt ("Select operation typing 'SUM', 'REST', 'MULT' OR 'DIV'");

if (operation = "SUM"){
     result = parseFloat(number1) + parseFloat(number2);
     alert (result);
}
*/

//NIVEL 1
//HELP -> https://thecodingpie.com/post/how-to-build-a-simple-calculator-using-javascript-html-and-css/

const buttons = document.querySelectorAll('button'); //Array con todos los botones, números y operadores
const display = document.querySelector('.display'); //El display

//funtion dentro del Method forEach para Arays
buttons.forEach(function(button){
     button.addEventListener("click", calculate); //cuando haya click en un botón, lanzar función calculate()
});

function calculate(event){
     const buttonValue=event.target.value;
     if (buttonValue === '='&& display.value!== "") { //display.value!== "" >> evitar el "Undefined" en la pantalla por un cálculo vacio
          display.value = eval (display.value); //W3S: "The eval() function evaluates or executes an argument."
          if (display.value == Infinity){
            display.value = "WTF u doin'"
          }
     }
     else if (buttonValue === "C"){ //Para borrar
       display.value = "";
     }
     else{
     display.value += buttonValue;
     }
}









