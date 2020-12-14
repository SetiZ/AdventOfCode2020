const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");
input = input.map((m) => parseInt(m, 10));
const index = 25;
// console.log(input)
// console.log(preamble)
let id = 0;
let invalidNumber = 0;

for (let i = index; i<input.length; i++) {
  let preamble = input.slice(i-index, i)
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
    console.log(input[i], i)
    id = i;
    invalidNumber = input[i]
  }
}


const repeat = (index) => {
  let sum = 0;
  while (sum < invalidNumber) {
    sum += input[index]
    index++
  }
  return {sum, index};
}

let res = null
let startIndex = 0;
let endIndex = 0;
for (let i = 0; i<input.length-1; i++) {
  
  if (repeat(i).sum === invalidNumber && i < id) {
    // console.log(repeat(i), i)
    res = repeat(i)
    endIndex = repeat(i).index
    startIndex = i;
  }
}

console.log(startIndex, endIndex)
let contiguous = input.slice(startIndex, endIndex);
console.log(contiguous)
const min = Math.min(...contiguous)
const max = Math.max(...contiguous)
console.log(min, max, min + max)
// let i = 0;
// while (sum < invalidNumber) {
//   sum += input[i]
//   i++
// }
