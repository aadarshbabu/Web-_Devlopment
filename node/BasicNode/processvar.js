// 
//dotenv has use to import the invorment file. 
// it has two method 1. parse() this method is use to create a env variable. in current file
const env = require('dotenv').parse("USER_ID=323423");
console.log(env);

// once you create a env variable file spcrate in dir. You only require the dotenv module. and call the config(). bcz it has have a config function.
require('dotenv').config()

console.log(process.env.USER_ID);
console.log(process.env.USER_PASS);
console.log(process.env.HOST);


// What is process in node js.
// just like a Browser javascript Window(document ) is the Globle Object. in clint side javascript. 

// In node js
// process is a object in node. which is contain All info in your system. Node library. Local env variable. and Globle env variable. argv. Modules. and many more.



// console.log(process.memoryUsage());
// console.log(process.resourceUsage());
// console.log(process.cpuUsage());
// console.log(process.uptime());