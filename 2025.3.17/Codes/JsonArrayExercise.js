//Define 10 student json
//store it in an array
//find the female students
//find the students who are following IT course
//find the max and average GPA among the students

let uniStudents = [
{regNo:'2021/ICT/78', name:'Dinithi',age:23,gender:'female',course:'IT',GPA:3.9},
{regNo:'2021/ICT/10', name:'James',age:25,gender:'male',course:'BS',GPA:3.8},
{regNo:'2021/ICT/12', name:'Jannie',age:28,gender:'female',course:'Art',GPA:3.5},
{regNo:'2021/ICT/23', name:'Katie',age:24,gender:'female',course:'IT',GPA:3.6},
{regNo:'2021/ICT/45', name:'Erica',age:23,gender:'female',course:'BS',GPA:3.4},
{regNo:'2021/ICT/18', name:'Evelyn',age:23,gender:'female',course:'ART',GPA:3.2},
{regNo:'2021/ICT/79', name:'Emily',age:24,gender:'female',course:'IT',GPA:3.8},
{regNo:'2021/ICT/100', name:'Fred',age:25,gender:'male',course:'ART',GPA:2.5},
{regNo:'2021/ICT/101', name:'Kim',age:23,gender:'female',course:'BS',GPA:2.8},
{regNo:'2021/ICT/104', name:'Rocky',age:27,gender:'male',course:'IT',GPA:2.9},
]

console.log("Female Students: ")
uniStudents.forEach((student) => {
	if(student.gender=="female"){
		console.log("  " + student.name)
	}
})

console.log("Students who follow IT: ")
uniStudents.forEach((student) => {
	if(student.course=="IT"){
		console.log("  " + student.name)
	}
})

let maxGPA = uniStudents[0].GPA
uniStudents.forEach((student) => {
	if(student.GPA>maxGPA){
		maxGPA = student.GPA
	}
})
console.log("Max GPA of Students: " + maxGPA)

let total = 0
uniStudents.forEach((student) => {
	total += student.GPA
})

let avg = total / 10
console.log("Average GPA of Students: " + avg)