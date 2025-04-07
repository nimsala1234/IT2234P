function getMaxFromDigits(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(getMaxFromDigits(215));  
console.log(getMaxFromDigits(1093)); 
