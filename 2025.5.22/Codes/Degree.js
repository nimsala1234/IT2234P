const mongoose = require('mongoose')
const degreeSchema = new mongoose.Schema({
    _id:{type:String, require: true},
    name:{type:String, require: true},
    credits:{type:Number, require: true},
    duration: {type:Number, require: true},
    faculty: {type:String}
})

const Degree = mongoose.model('degrees', degreeSchema)
/*const BIT = new Degree({
    _id: "FAS2021ICT",
    name: "BSc. IT",
    credits: 3,
    duration: 4,
    faculty:"Faculty of Applied Science"
})
BIT.save()*/
module.exports=Degree