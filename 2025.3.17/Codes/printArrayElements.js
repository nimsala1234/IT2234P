let stringArray = ["apple", "orange","banana","papaya"]
console.log(stringArray)

console.log("Using for loop:")
for(let i=0; i<stringArray.length;i++){
	console.log(" " + stringArray[i])
}

//foreach 
console.log("Using forEach loop: ")
stringArray.forEach((n) =>{
	console.log(" " + n)
})