// calculator.tests.js
// Unit tests for calculator functions (add, sub, mul, div)

const { add, sub, mul, div } = require('../calculator.functions');

describe('Calculator Basic Operations', () => {
  test('Addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('Subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('Multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('Division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('Division by zero throws error', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
  });

  test('Negative numbers: -5 + 3 = -2', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test('Floating point: 2.5 * 4 = 10', () => {
    expect(mul(2.5, 4)).toBe(10);
  });
});