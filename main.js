const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let operator = '';
let previousNumber = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      currentNumber += value;
      screen.value = currentNumber;
    }

    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
      operator = value;
      previousNumber = currentNumber;
      currentNumber = '';
      screen.value = previousNumber + operator;
    }

    if (value === '=') {
      if (previousNumber && currentNumber) {
        let result;
        if (operator === '+') {
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
        } else if (operator === '-') {
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
        } else if (operator === '*') {
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
        } else if (operator === '/') {
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
        } else if (operator === '%') {
          result = parseFloat(previousNumber) / 100;
        }

        screen.value = result.toString();
        currentNumber = result.toString();
        previousNumber = '';
        operator = '';
      }
    }

    if (value === 'AC') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      screen.value = '';
    }

    if (value === 'DEL') {
      currentNumber = currentNumber.slice(0, -1);
      screen.value = currentNumber;
    }
  });
});