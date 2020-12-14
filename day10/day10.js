const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");
input = input.map((m) => parseInt(m, 10));
// console.log(input)
const adapters = input.sort((a, b) => a - b)
// console.log(adapters)

let jolt = 0;
let jolt1 = 0, jolt3 = 1;

for (let i = 0; i < adapters.length; i++) {
  let diff = adapters[i] - jolt;
  console.log(diff, adapters[i], jolt)
  switch (diff) {
    case 1:
      jolt1++
      break;
    // case 2:
    //   break;
    case 3:
      jolt3++
      break;
  }
  jolt = adapters[i]
}

console.log(jolt1, jolt3, jolt1 * jolt3)