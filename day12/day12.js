const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");

let position = [0, 0];
let direction = 0;

input.forEach((line) => {
  let action = line.slice(0,1);
  let val = +line.slice(1)
  // console.log(action, val)

  switch (action) {
    case 'N':
      position[0] += val
      break;
    case 'S':
      position[0] -= val
      break;
    case 'E':
      position[1] += val
      break;
    case 'W':
      position[1] -= val
      break;
    case 'L':
      direction += val
      direction = (direction <= 360)? direction: direction - 360
      break;
    case 'R':
      direction -= val
      direction = (direction >= 0)? direction: direction + 360
      break;
    case 'F':
      switch (direction) {
        case 0:
        case 360:
          position[1] += val
          break;
        case 90:
          position[0] += val
          break;
        case 180:
          position[1] -= val
          break;
        case 270:
          position[0] -= val
          break;
      }
      break;
  }

  console.log(position, direction)
})

const absSum = position.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)
console.log(absSum)