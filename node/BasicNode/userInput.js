// When you take a input in console into a nodejs / You shoud require a module. that is "readline"
// and call the createInterface() method. this method takes a object which is 

const obj = {
    input: process.stdin,
    output: process.stdout
}
const interface = require("readline")
const readline = interface.createInterface(obj)// createInterface take a obj which is same as obj object. 

readline.question("what is your name ", name => {
    console.log(name);
    readline.close() // close the readline funcio,
})