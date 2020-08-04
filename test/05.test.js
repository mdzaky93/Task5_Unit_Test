const isPrime = require('../src/05.js');

const num = 25;
test(`Fungsi Prime Number, number = ${num}`, () => {
  expect(isPrime(num)).toBeFalsy();
});

const num1 = 23;
test(`Fungsi Prime Number, number = ${num1}`, () => {
  expect(isPrime(num1)).toBeTruthy();
});