'use strict';

const display = document.getElementById("result-input");
const numbers = document.querySelectorAll('[id*=number]');
const operators = document.querySelectorAll('[id*=operator]');

const insertNumber = (event) =>updateDisplay(event.target.textContent);

function updateDisplay(number){
    display.value += number;
}

function selectOperator(operator){

}



numbers.forEach(number => number.addEventListener('click', insertNumber));
operators.forEach(operator => operator.addEventListener('click', selectOperator));