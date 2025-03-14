console.log("Reverse number")
let num=17
let mid = parseInt(num/2)+1
let tmid=mid-1
let start=1
let end=num
let tend=end

while(start<=end){
	if(tmid>0){
		console.log(tmid)
		tmid--
	}
	else if(start == mid){
		console.log("-"+mid+"-")
	}
		
	else{
		console.log(tend)
		tend--
	}
	start++
	
}
