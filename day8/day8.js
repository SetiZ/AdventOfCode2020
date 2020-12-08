const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");

const instructions = input.map((line) => {
  return [...line.split(' '), ...[false]];

})

let accumumlator = 0;
let step = 0;

while (step < instructions.length && step >=0) {
  if (!instructions[step][2]) {
    switch (instructions[step][0]) {
      case 'nop':
        instructions[step][2] = true
        step++;
        break;
      case 'acc':
        instructions[step][2] = true
        accumumlator += +instructions[step][1]
        step++;
        break;
      case 'jmp':
        instructions[step][2] = true
        step += +instructions[step][1]
        break;
    }
  } else {
    break;
  }
  // console.log(accumumlator, step)
  // console.log(instructions)
}

console.log(accumumlator)