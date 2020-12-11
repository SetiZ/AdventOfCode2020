const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");

const instructions = input.map((line) => {
  return [...line.split(' '), ...[false]];

})

let accumumlator = 0;
let step = 0;

const stepper = (instruc) => {
  step = 0;
  accumumlator = 0;
  // console.log(instruc)
  while (step < instruc.length && step >=0) {
    if (!instruc[step][2]) {
      // console.log(instruc[step])
      switch (instruc[step][0]) {
        case 'nop':
          instruc[step][2] = true
          step++;
          break;
        case 'acc':
          instruc[step][2] = true
          accumumlator += +instruc[step][1]
          step++;
          break;
        case 'jmp':
          instruc[step][2] = true
          step += +instruc[step][1]
          break;
      }
    } else {
      break;
    }
    // console.log(accumumlator, step)
  }
}

let temp = JSON.parse(JSON.stringify(instructions));
let i = 0;
while (i < instructions.length) {
  if (instructions[i][0] === 'nop') {
    temp = JSON.parse(JSON.stringify(instructions));
    temp[i][0] = 'jmp';
    // console.log(temp)
    stepper(temp);
    // console.log(temp)
    if (temp[temp.length-1][2]) {
      console.log(accumumlator, step)
    }
  }
  i++
}

temp = JSON.parse(JSON.stringify(instructions));
i = 0
while (i < instructions.length) {
  if (instructions[i][0] === 'jmp') {
    temp = JSON.parse(JSON.stringify(instructions));
    temp[i][0] = 'nop';
    // console.log(temp)
    stepper(temp);
    // console.log(temp)
    if (temp[temp.length-1][2]) {
      console.log(accumumlator, step)
    }
  }
  i++
}

console.log(accumumlator)