const multwo = (n)=>n*2

//rest parameter must be always last in parameter list
const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multwo,2,4,7,9,3,6)