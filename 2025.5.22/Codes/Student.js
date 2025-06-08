const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    regNo: {type:String, require:true},
    name:{type:String, require: true},
    age: {type:Number, require: true},
    courseCode: {type:String, require: true},
    degreeID: {
        type:String,
        require:true,
        ref:'degrees'
    },
    enrolled_courses:[{
        type:mongoose.Types.ObjectId,
        ref:'courses'
    }]
})

const Student = mongoose.model('students', studentSchema)
const student1 = new Student({
    regNo: "2021ICT78",
    name: "Dinithi",
    age: 23,
    courseCode: "IT2234",
    degreeID: "FAS2021ICT",
    enrolled_courses:['684545253bea9fc769034791', '6845458300b02ac68870597f']
})
student1.save()
module.exports=Student