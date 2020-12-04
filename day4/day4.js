const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n\n");
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];
let valid = 0;
input.forEach((line) => {
  let pass = line.split(/\s+/);
  pass = pass.map((m) => {
    return m.substring(0, 3);
  })
  if (pass.length >= 7) {
    let diff = fields.filter((p) => pass.indexOf(p) === -1);
    // console.log(fields, pass, diff)
    if (diff.length === 0) {
      valid++
    } else if (diff.indexOf('cid') === 0) {
      valid++
    }
  }
})

console.log(valid)