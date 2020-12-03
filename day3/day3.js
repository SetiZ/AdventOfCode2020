const fs = require('fs');
const twentytwenty = 2020;
let input = fs.readFileSync('input').toString().split("\n");
let multiTrees = []
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
]

slopes.forEach((slope) => {
  let i = 0;
  let j = 0;
  let trees = 0;
  while (i < input.length - slope[1]) {
    // console.log(i)
    i += slope[1];
    j += slope[0];
    let line = input[i].split('');
    if (j >= line.length) {
      j = j - line.length;
    }
    // console.log(line.length, j)
    // console.log('line ' + i, line[j])
    if (line[j] === '#') {
      trees++
    }
  }
  multiTrees.push(trees)
  // console.log(trees);
})

// console.log(multiTrees);
console.log(multiTrees.reduce((a, b)=> a*b, 1))