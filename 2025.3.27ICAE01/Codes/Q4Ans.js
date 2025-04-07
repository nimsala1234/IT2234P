const HexSWC = require('./Q4.js');

function decimalToHex(decimal, callback) {
    if (decimal === 0) return "";
    const rem = decimal % 16;
    return decimalToHex(Math.floor(decimal / 16), callback) + callback(rem);
}

console.log(decimalToHex(255, HexSWC)); 
console.log(decimalToHex(1234, HexSWC));