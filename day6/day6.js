const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n\n");
let lengthAll = 0;
input.forEach((line) => {
  let hop = line.split(/\s+/);
  // console.log(hop)
  // const unique = [...new Set(hop)];
  // console.log(unique)
  // lengthAll += unique.length
  if (hop.length === 1) {
    lengthAll += hop[0].length
  } else {
    // console.log(hop)
    const res = hop.reduce((a, b) => {
      let resultstring = [];
      for (let i of a){
          for(let n of b){
              if( n === i){
                  resultstring.push(n);
              }
          }
      };
      return resultstring;
    })
    lengthAll += res.length
  }
});

console.log(lengthAll)