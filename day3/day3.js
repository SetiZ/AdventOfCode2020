const fs = require('fs');
const twentytwenty = 2020;
let input = fs.readFileSync('input').toString().split("\n");
let i = 1;
let j = 0;
let trees = 0;
while (i < input.length) {
  let line = input[i].split('');
  i++;
  j += 3;
  // console.log(line.length, j)
  if (j >= line.length) {
    j = j - line.length;
  }
  // console.log('line ' + i, line[j])
  if (line[j] === '#') {
    trees++
  }
}

console.log(trees);