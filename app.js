//Globals - NO WINDOW !!!!

//__dirname - path to the current directory
//__filename - file name
//require - function to use modules
//modules - info about the current module
//process - info about env where the program is being executed

// console.log(__dirname)
// console.log(__filename)

// setInterval(()=>{
//     console.log('Hello world')
// },1000)

// console.log('Hi')
const names = require('./name')
const sayHi = require('./utils')
const alternative = require('./alternative-name')

sayHi('susan') 
sayHi(names.john)
sayHi(names.peter)

console.log(alternative )

require('./mind-granade')