const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

let total = 0;

input.forEach((text, i) => {
    const regex = /[0-9]/g;
    const number = text.match(regex);
    let firstNum = number[0];
    let lastNum = number[number.length -1];
    let concatNum = firstNum + lastNum;
    total += parseInt(concatNum);
})

console.log(total)