
// call apply bind method in js.

let obj1 = {
    firstname: "aadarsh",
    lastname: "Singh",

}

// obj1.printfullname(); // this function print full name of the obj1. Bcz its call with the help of obj1. 

let obj2 = {
    firstname: "Ram",
    lastname: "Singh",
}
// what is if you print the obj2 full name. There are the traditonal method. 1) copy past the function in another object. 2) is Function borrowing. firt method is not good bcz its take repation.

// funcion borrowing.

// obj1.printfullname.call(obj2);
// this printfullname() function is spacific for obj1. But in genrail senario this type functions present outside the obj..

let printfullname = function (locatin, parmanentadress) {
    console.log(this.firstname + " " + this.lastname + " " + locatin + " " + parmanentadress);
}
// there are no need to spicify object.
printfullname.call(obj1, "meerut", "india");
printfullname.call(obj2, "delhi", "india");


// APPLY()

// THER ARE ONLY DIFFRENT BITWEEN CALL AND APPLY METHOD IS PASSING ARGUMENT.

// apply pass the args in array.
// recive the array in diffret variable. or rest oprator.

// send the 0th element as a first args. and 1st args as a second arge. and so on.


printfullname.apply(obj1, ["meerut", "india"]);
printfullname.apply(obj2, ["delhi", "india"]);


//BIND()
// bind method return a saprate funtion with bind with the passing object.
// Its also teke a args in array.
// no need to recive this array args to diffrent varaible.
// you can send a multiple array argument.
// its send a array refrence in calling function. 

let arr = ['meerut', 'india']
let sapratefunc = printfullname.bind(obj1, arr, ['aurangabad', 'bihar']);
// console.log(sapratefunc);
sapratefunc()

// sapratefunction() is a copy of the printfullname() that is bind with 1st passing objcet argument as well as 2nd array argumet and 3re 4th and so on.



