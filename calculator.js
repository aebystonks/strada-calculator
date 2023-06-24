const plus = '+';
const subtract = '-';
const multi = '*';

function calculator(firstOperand, secondOperand, operation) {
  switch (operation) {
    case plus:
      return Number(firstOperand + secondOperand);
    case subtract:
      return firstOperand - secondOperand;
    case multi:
      return firstOperand * secondOperand;
    default:
      break;
  }
}

console.log(calculator(5, 5, plus))
