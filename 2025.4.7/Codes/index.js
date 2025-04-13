const express = require('express');
const app = express();
const port = 3001;

const studentRoute = require('./Student/studentroute')

app.use(express.json())
app.use('/student', studentRoute)

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
