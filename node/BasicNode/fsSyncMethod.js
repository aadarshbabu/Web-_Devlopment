
// File System module In Node js.? This module is use to creating and reading the file dirictory in node js
//  require() is use to import the Inbulid Module into you file. Thats Way you use the module function and perform the operoation.

let fs = require("fs") // fs is a module in the node which is use into a file operations.



fs.writeFileSync("hell.txt", "NO need to say thanks. OK..."); // writeFileSync is a syncronous
//  method which is use to write the file. If file name is not exist This method is crate the
//  file and put data. if file is exist then this func is erase the data and put the new data.
//   like 
//   fs.writeFileSync("hell.txt", "Go Now");

// let data = fs.readFileSync("hello.txt") // it s return the Buffer Data

let data = fs.readFileSync("hell.txt", "utf-8") // its a syncronous funcion its return a buffer data. if not pass second argument in Text Incoding. 
// Q what is text incoding : - Text incoding is a technique where we say the node js this buffer data convete in a text formnate like utf-8 formate.
// utf-8 is a text incoding techinque where we convert the Unicode into the text file.
console.log(data)

fs.appendFileSync("hello.txt", "No its a my name"); //its a appent the data. into existiong file this func take a first argument in file location and second aurgs is Value which is appent into a file. IF first args is not exist then create a new file and put the data

fs.renameSync("hello.txt", "rename.txt");// its is way to rename the file.


fs.unlinkSync("hell.txt"); // its remove the file ..


// Dirictory Commands. in Node js..


fs.mkdirSync("hello"); // its a way to Create a folder.

// fs.rmdirSync("h"); // its is the way to delete the folder in a perticular dir..

// create folder inside a folder 
//  fs.mkdirSync("hello/hii");

// remove folder inide a folder..
// fs.rmdirSync("hello/hii");
fs.rmdirSync("hello");



