#!/usr/bin/env node
// Node.js CLI Calculator
// Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷)

const [,, operation, a, b] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Operations: add (+), sub (-), mul (×), div (÷)');
  console.log('Example: node calculator.js add 2 3');
}

if (!operation || !a || !b) {
  printUsage();
  process.exit(1);
}

const num1 = parseFloat(a);
const num2 = parseFloat(b);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Both arguments must be valid numbers.');
  process.exit(1);
}

let result;
switch (operation) {
  case 'add':
  case '+':
    result = num1 + num2;
    break;
  case 'sub':
  case '-':
    result = num1 - num2;
    break;
  case 'mul':
  case 'x':
  case '*':
    result = num1 * num2;
    break;
  case 'div':
  case '/':
    if (num2 === 0) {
      console.error('Error: Division by zero.');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    printUsage();
    process.exit(1);
}

console.log(`Result: ${result}`);