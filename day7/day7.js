const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");

let savedBags = []
let shiny = 'shiny gold'
let objectBag;

const findShiny = (motcle) => {
  for (const [key, value] of Object.entries(objectBag)) {
    if (value.indexOf(motcle) !== -1) {
      savedBags.push(key)
      findShiny(key)
    }
  }
  return savedBags
}

const bigBags = input.map((line) => {
  let bags = line.split(' contain ')
  // console.log(bags)
  bags[0] = bags[0].substring(0, bags[0].indexOf(' bags'));
  // bags[1] = bags[1].split(', ').map((b) => {
  //   return b.substr(0, b.indexOf(' bag'));
  // });
  return bags
})

objectBag = Object.fromEntries(bigBags);
// console.log(objectBag)

let saved = findShiny(shiny)
// console.log(saved)
saved = [...new Set(saved)];
// console.log(saved)
console.log(saved.length)