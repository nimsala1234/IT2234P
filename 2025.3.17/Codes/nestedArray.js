//print the nested array
//[[11,2,30],[5,6],[8,5,3]]

let nestedArr = [[11,2,30],[5,6],[8,5,3]]
console.log("Using for loop : ")
//using for loop
for(let i=0;i<nestedArr.length;i++){
	for(let j=0;j<nestedArr[i].length;j++){
		console.log("   "+ nestedArr[i][j])
	}
}

//using foreach loop
console.log("Using forEach loop : ")
nestedArr.forEach((i) => {
	i.forEach((j) => {
		console.log("   "+ j)
	})
})