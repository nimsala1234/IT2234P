function printNum(n){
	if(n==1){
		console.log(n)
	}
	else{
		console.log(n)
		printNum(n-1)
	}
}

printNum(15)