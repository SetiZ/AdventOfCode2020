const fs = require('fs');
const twentytwenty = 2020;
let input = fs.readFileSync('input').toString().split("\n");
let numbers = 0;
input.map((m) => {
  const line = m.split(' ');
  const limits = line[0].split('-').map(Number);
  const letter = line[1].substring(0, 1);
  const length = (line[2].match(new RegExp(letter, "g")) || []).length;
  if (length !== 0 && length >= limits[0] && length <= limits[1]) {
    numbers++
  }
});

console.log(numbers)