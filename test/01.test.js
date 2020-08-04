const charLength = require('../src/01.js');

const text = "Belajar Unit Testing";
test(`Panjang Karakter dari Teks: ${text}`, () => {
  expect(charLength(text)).toBe(text.length);
});