const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n\n");
let lengthAll = 0;
input.forEach((line) => {
  let hop = line.split(/\s+/).join('').split('');
  // console.log(hop)
  const unique = [...new Set(hop)];
  // console.log(unique)
  lengthAll += unique.length
});

console.log(lengthAll)