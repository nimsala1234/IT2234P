const sumOfNums = (...n) => {
	let sum = 0
	n.forEach((i) =>{
		sum+=i
	})
	console.log(sum)
}

sumOfNums(2,4,7,9,3,6)