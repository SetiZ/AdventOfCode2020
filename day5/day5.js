const fs = require('fs');
let input = fs.readFileSync('input').toString().split("\n");
let seatIds = []
input.forEach((line) => {
  const splitted = line.split('')
  const row = splitted.slice(0, -3)
  const seat = splitted.slice(-3)
  // console.log(row)
  const rowNum = [0, 127];
  let rowSelect;
  row.slice(0, -1).forEach((c) => {
    if (c === 'F') {
      rowNum[1] = Math.floor((rowNum[0] + rowNum[1])/2)
    } else if (c === 'B') {
      rowNum[0] = Math.ceil((rowNum[0] + rowNum[1])/2)
    }
  })
  if (row[6] === 'F') {
    rowSelect = rowNum[0]
  } else if (row[6] === 'B') {
    rowSelect = rowNum[1]
  }
  const seatNum = [0, 7];
  // console.log(seat)
  let seatSelect;
  seat.slice(0, -1).forEach((c) => {
    if (c === 'L') {
      seatNum[1] = Math.floor((seatNum[0] + seatNum[1])/2)
    } else if (c === 'R') {
      seatNum[0] = Math.ceil((seatNum[0] + seatNum[1])/2)
    }
  })
  if (seat[2] === 'L') {
    seatSelect = seatNum[0]
  } else if (seat[2] === 'R') {
    seatSelect = seatNum[1]
  }
  // console.log(seatSelect)
  seatIds.push(rowSelect * 8 + seatSelect)
})

// console.log(seatIds)
console.log(Math.max(...seatIds));
