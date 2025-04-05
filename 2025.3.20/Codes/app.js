const express  = require('express');
const app = express();
const port = 3001;

app.get('/', (req,res)=>{
    res.send('Hello express JS');
});

app.get('/msg', (req,res)=>{
    res.send('Hello IT students!');
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})

//to run node .\app.js
