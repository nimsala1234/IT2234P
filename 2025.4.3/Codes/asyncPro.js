const fs = require('fs')
fs.readFile('file.txt', 'utf8',(err,data)=>{
    if(err){
        console.error(err);
        return 0;
    }
    console.log(data)
});

console.log("File reading is done...")