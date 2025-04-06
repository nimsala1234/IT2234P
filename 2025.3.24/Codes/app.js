const express  = require('express');
const app = express();
const port = 3001;

//array of students JSON details
const students = require('./DB/studentsdb')

app.get('/', (req,res)=>{
    res.send('Hello IT Students');
});

app.get('/stu', (req,res)=>{
    res.send(students);
});

app.get('/stu/:id', (req,res)=>{
    const id = req.params.id
    const result = students.find(student => student.regNo == id)

    //check student is available or not; if not send an error message
    if(result==null){
        res.status(404).send("Student is not available")
    }
    else{
        res.send(result);
    }
    
});
//filter students by gender
app.get('/stu/gender/:gen', (req,res)=>{
    const gender = req.params.gen
    const result = students.filter(student => student.gender == gender)
    res.send(result);
});


//search by name
app.get('/stu/name/:name', (req,res)=>{
    const name = req.params.name
    const result = students.find(student => student.name == name)
    res.send(result)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})

//to run node .\app.js