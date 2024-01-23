const calculator = require('./calculator');

test('take two numbers and return product of two numbers', () =>{
    expect(calculator.multiplication(3 , 2)).toBe(6);
});

test('take two numbers and return subtraction of two numbers', () => {
    expect(calculator.subtract(34.2, 12.9)).toBeCloseTo(21.3);
});