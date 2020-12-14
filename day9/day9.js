const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");
input = input.map((m) => parseInt(m, 10));
const index = 25;
// console.log(input)
// console.log(preamble)

for (let i = index; i<input.length; i++) {
  let preamble = input.slice(i-25, i)
  // console.log(preamble)
  let found = false
  for (let j = 0; j < preamble.length; j++) {
    if (!found) {
      const test = input[i] - preamble[j]
      if (preamble.includes(test)) {
        // console.log("found", input[i])
        found = true;
      }
    }
  }
  if (!found) {
    console.log(input[i])
  }
}
