const sumOfNums1 = (...n) => {
	return n.reduce((sum1, i)=>sum1+=i)
}

console.log(sumOfNums1(2,4,7,9,3,6))