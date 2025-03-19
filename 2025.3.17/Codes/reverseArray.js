//reverse the array using push and pop

let arr4 = ['m','a','d']
let reversedarr = []
console.log("Array: " + arr4)

for(let i =arr4.length; i>0;i--){
	reversedarr.push(arr4.pop())
}
console.log("Reversed Array: " + reversedarr)