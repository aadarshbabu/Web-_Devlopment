// element loop in javascript.
// This is the element loop in javascript..


var arr=Array();  // decleared the array object.
arr.push("hello");
arr.push("world");
arr.push("how");
arr.push("are","buddy"); // You can store the more then one value in push fuction. it's return the size of array..
console.log(arr.push("you"));

arr.unshift("No hello"); // inset the value first index in array
// console.log(arr);

// forecah loop the is value base loop it work on the value.

// foreach loop funcion work on array. It run all the value in the array and value and index pass the fucntion.

 // This is for each loop. every value of array repeat the foreach loop. and every time call the funciton and pass the value and index.

// if you accept the third argument for each loop funcion. pass the funcion. 
// arr.forEach(team);
// function team(value, index, array){
//     console.log(value, index);
//     // console.log(array);

// }









// this the way to define the for loop method. call back funcion
arr.forEach( (value,index)=>{
    console.log(value,index);
})

let str = String();
console.log("Type of variable."+typeof(str));


// // This is value base loop it is execute array value..
// for(let element of arr)
// {
//     console.log(element);
// }

// // it is range base loop it's execute the value accoding to value...

// for(let element in arr)
// {
//     console.log(element);
// }