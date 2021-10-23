
// in node js, You print string to the console You have amazing method that is Console.log()// But there are lost of method you in console printing. 

// 1. Spicyfy the formate spicifier in console.log() funcions

let name = "aadarsh";
let id = 44;
let address = {
    vill: "simari",
    post: "nabinager",
    Dis: "Aurangabad"
}
// consolei have three variable 1 is string 2nd is number , 3rd is Object.

// console.log("Your name is %s id is %d address is %o ", name, id, address); //You can print like this Obisily. You print a formated string. formate spicifier is useful. in some condition.

// console.clear();
// let i = 4;
// while (i) {
//     console.count(1); //its print the count in particular number; or obj how many times print this number or objs.
//     i--;
//     // reset the no of count
// }
// console.countReset(1);

// let fun1 = () => console.trace();  // print the stack execution in funcion. how func is call and release. the meme.

// fun1(); //

// time and TimeEnd console method, mesore the time between execution point A to execution point B. 
// in console.time("lable")  Lable is same as console.timeEnd("lable"). Compiler Execute line no 32 to line no 41 and maser how much time taken by compile to execute the code.
// and after ececution print time in console
// Rembeber its only consider a synchronous Execution time. or You can say Call Stack time.
console.time("func")
let func = () => {
    let i = 245234;
    while (i) {
        i--;

    }

    setTimeout(() => {

    }, 3000);
}
func();
console.timeEnd("func");

// console.error("errroe Data");// its use to print the error in console.