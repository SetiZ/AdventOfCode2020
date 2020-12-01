const fs = require('fs');
const twentytwenty = 2020;
let input = fs.readFileSync('input').toString().split("\n");
input = input.map((m) => parseInt(m, 10));
// console.log(input)
for (let i = 0; i <input.length; i++) {
  for (let j = i + 1; j <input.length - 1; j++) {
    for (let k = j + 1; k <input.length - 2; k++) {
      if (input[i] + input[j] + input[k]=== twentytwenty) {
        console.log(input[i] * input[j] * input[k])
      }
    }
  }
}
