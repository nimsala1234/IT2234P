/*promise is an object which mentions the status of an operation.

there are 3 states:
        1) waiting / pending
        2) fulfilled / resolved - done 
        3) rejected / error
*/

const fs  = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file.txt', 'utf-8') //return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})
.catch((err)=> {
    console.error(err)
})