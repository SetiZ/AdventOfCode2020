const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n\n");
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];
const byr = [1920, 2002];
const iyr = [2010, 2020];
const eyr = [2020, 2030];
const hgt = [[150, 193], [59, 76]];
const ecl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

let valid = 0;
input.forEach((line) => {
  const hop = line.split(/\s+/);
  // console.log(hop)
  let pass = hop.map((m) => {
    // return m.substring(0, 3);
    return m.split(':');
  })
  // console.log(pass)
  if (pass.length >= 7) {
    let diff = fields.filter((p) => pass.map(m => m[0]).indexOf(p) === -1);
    if (diff.length === 0 || diff.indexOf('cid') === 0) {
      const obj = Object.fromEntries(pass);
      const isValid = [];
      // console.log(obj)
      if (obj.byr >= byr[0] && obj.byr <= byr[1]) {
        isValid.push(true);
      } else {
        isValid.push(false);
      }
      if (obj.iyr >= iyr[0] && obj.iyr <= iyr[1]) {
        isValid.push(true);
      } else {
        isValid.push(false);
      }
      if (+obj.eyr >= eyr[0] && +obj.eyr <= eyr[1]) {
        isValid.push(true);
      } else {
        isValid.push(false);
      }
      // console.log(obj.hgt)
      if (obj.hgt.slice(-2) === 'cm') {
        if (obj.hgt.slice(0, -2) >= hgt[0][0] && obj.hgt.slice(0, -2) <= hgt[0][1]) {
            isValid.push(true);
        } else {
          isValid.push(false);
        }
      } else if (obj.hgt.slice(-2) === 'in') {
        if (obj.hgt.slice(0, -2) >= hgt[1][0] && obj.hgt.slice(0, -2) <= hgt[1][1]) {
          isValid.push(true);
        } else {
          isValid.push(false);
        }
      } else {
        isValid.push(false);
      }
      if (/^#[0-9a-f]{6}$/i.test(obj.hcl)) {
        isValid.push(true);
      } else {
        isValid.push(false);
      }
      if (ecl.indexOf(obj.ecl) !== -1) {
        isValid.push(true);
      } else {
        isValid.push(false);
      }
      if (obj.pid.length === 9 && /^\d+$/.test(obj.pid)) {
        isValid.push(true);
      } else {
        isValid.push(false);
      }
      // console.log(isValid);
      const sumValid = isValid.reduce((a,b) => a && b, true)
      // console.log(sumValid)
      if (sumValid) {
        valid++
      }
    }
  }
})

console.log(valid)