const myName = (name)=>{console.log("My name is "+name)}

const greet = (msg, name)=>{
	console.log("Hi..." + msg)
	myName(name)
}

greet("Good morning", "Dinithi")

const greet1 = (msg, func)=>{
	console.log("Hi..." + msg)
	func()
}

greet1("Good morning", ()=>{console.log("My name is Dinithi")})