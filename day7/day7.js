const fs = require('fs');
let input = fs.readFileSync('test').toString().split("\n");

let savedBags = 0
let shiny = 'shiny gold'
let objectBag;

const findShiny = (motcle) => {
  for (const [key, value] of Object.entries(objectBag)) {
    if (key.indexOf(motcle) !== -1) {
      let save = value
      save = save.split(', ').map((b) => {
        return b.substr(0, b.indexOf(' bag'));
      })
      console.log(save)
      save.forEach((b) => {
        const [number, bag] = b.split(/\s(.+)/);
        if (number !== 'no') {
          console.log('my number',number)
          savedBags += +number * findShiny(bag)
        }
      })
    }
  }
  console.log(savedBags)
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
// saved = [...new Set(saved)];
// console.log(saved)
// console.log(saved.length)