const fs = require('fs');
const twentytwenty = 2020;
let input = fs.readFileSync('input').toString().split("\n");
let numbers = 0;
input.map((m) => {
  const line = m.split(' ');
  const limits = line[0].split('-').map(Number);
  const letter = line[1].substring(0, 1);
  const char1 = line[2].charAt(limits[0]-1)
  const char2 = line[2].charAt(limits[1]-1)
  if (letter === char1 ^ letter === char2) {
    numbers++;
  }
});

console.log(numbers)