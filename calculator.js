

/* //NIVEL 1 y 2
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
     }
     else{
     display.value += buttonValue;
     }
}

/*
function calculate(event) {
     // current clicked buttons value
     const clickedButtonValue = event.target.value;
   
     if (clickedButtonValue === '=') {
       // check if the display is not empty then only do the calculation
       if (display.value !== '') {
         // calculate and show the answer to display
         display.value = eval(display.value);
       }
     } else if (clickedButtonValue === 'C') {
       // clear everything on display
       display.value = '';
     } else {
       // otherwise concatenate it to the display
       display.value += clickedButtonValue;
     }
   }
*/










