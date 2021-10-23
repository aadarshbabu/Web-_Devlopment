const fs = require("fs");

// This is async Method to creat a folder in fs module...
// async funcion take two argument 1. 
// fs.mkdir("text", (err) => {
//     if (err) {
//         console.log(err)
//     } else {

//         console.log("Folder Create Sucessfully");
//     }
// }) // Asyc method a register a call. in call stack when function work is over then call the sync function with error

fs.readFile("rename.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data + "text");
}) // readFile funtion take a three argument 1. filename and 2nd is Incoding and 3rd is callback functions thats call when function work is over.

// this method is write the data in file; if file is not present the create the new file and put the data in file.
fs.writeFile("rename.txt", "Write the content in rename e", (err) => {
    if (err) {
        console.log(err);
    }
})

// This is async Method is appned the data in existng file. if file is not created then create a file and appent the data.
fs.appendFile("rename.txt", "its a text change", (err) => {
    if (err) {
        console.log(err)
    }
})

// All funcions are same in syncronous and Asyncronous Only diffrent is argumetn/ async function is one extra argument that is callback functions;
fs.unlink("test.txt", (err) => {
    if (err) {
        console.log(err);
    }
})


// change the file name.
// fs.rename("rename.txt", "test.txt", (err) => {
//     if (err) {
//         console.log(err);
//     }
// });


//remove the folder .
fs.rmdir("text", (err) => {
    if (err) {
        console.log(err);
    }
});
