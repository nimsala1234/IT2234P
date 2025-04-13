const students = require('./studentsdb')

function getstudents(){
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regNo==id)
}

function getStudentbyGender(gen){
    return students.filter((student)=>student.gender==gen)
}

module.exports = {getstudents,getStudent,getStudentbyGender}