var buttonPlus = document.getElementById ('buttonPlus');
var buttonMinus = document.getElementById ('buttonMinus');
var buttonMultiply = document.getElementById ('buttonMultiply');
var buttonDevide = document.getElementById ('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if  (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    }
    alert (result);
}


/*
function onButtonPlusClick() {
    makeOperation('+');
}
function onButtonMinusClick() {
    makeOperation('-');
}
function onButtonMultiplyClick() {
    makeOperation('*');
}
function onButtonDevideClick() {
    makeOperation('/');
}
*/

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);

}

var operationButton = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide] 

for (var index = 0; index < operationButton.length; index++) {
    var button = operationButton [index];
    button.addEventListener('click', onOperationButtonClick)
}