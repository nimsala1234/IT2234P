function isPrimeNum(num){
	isPrime = true
	
	if(num<=1){
        isPrime = false;
    }
    else{
        for(let i=2; i<=num/2; ++i){
            if(num%i == 0){
                isPrime=false;
                break;
            }
        }
    }0
	return isPrime 
}

console.log(isPrimeNum(2))
console.log(isPrimeNum(3))
console.log(isPrimeNum(5))
console.log(isPrimeNum(4))
console.log(isPrimeNum(7))