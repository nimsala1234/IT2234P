//find the maximum no in an array using foreach 
//method 1 : using if
let arr = [10, 13, 24, 3, 18]
let maxNum = arr[0]
arr.forEach((i) =>{
	if(i>maxNum){
		maxNum = i;
	}
})
console.log("Using if: ")
console.log("  " + maxNum)

//method 2 : using ternary operator
maxNum = arr[0]
arr.forEach((i) =>{
	maxNum = (i>maxNum)? i:maxNum
})
console.log("Using ternary operator: ")
console.log("  " + maxNum)

//method 3 
maxNum = arr[0]
arr.forEach((i) =>{
	(i>maxNum) && (maxNum=i)
})
console.log("Another simple method: ")
console.log("  " + maxNum)