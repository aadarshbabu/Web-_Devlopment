const path = require('path')

// console.log(path.basename("/hello/world/singh/hello/hel.thml", ".thml")); // its retunr last partation of the path // its also take second args which file ext or if you put then this not rturn the file extension

// console.log(process.env.PATH);
//return string formate system vaiable (or path of the system)

// console.log(process.env.PATH.split(path.delimiter));
// (path.delimiter) constant is return the ; and split metod return the split string in delimiter.

// console.log(path.dirname("/hello/world/singh/hel/t.tt"))// return the dirname in a file path
// console.log(path.extname("/hello/world/singh/hel/t.tt"))// return the file extension name in the file.

console.log(path.parse("c:/hello/world/singh/hel/t.tt"));
// {
//     root: 'c:/',
//     dir: 'c:/hello/world/singh/hel',
//     base: 't.tt',
//     ext: '.tt',
//     name: 't'
//   }
// its return the object which is contain { root, dir, base, ext,name );


// const pathobj = path.parse("c:/hello/world/singh/hel/t.tt");
// console.log(path.format(pathobj)); //its combine the path obj and return the url.

// console.log(path.isAbsolute("/helloworld/")); //isAbsolute menthod check if path is absolute of not, if path is contain 0 string char. or left /. return false otherwise ture.

// console.log(path.join("/helloworld", "/super", "/helo")) // its join the multiple string and return the saprate the single string.

// console.log(path.normalize("c://hello//world///singh////hel//t.tt//..//"));
//its return the normalize path and removet he extra . or / in a path.

// console.log(path.normalize("c://hello//world///singh////hel//t.tt//..//").split(path.sep)); //path.sep is return the / in window. or split method return the array in split in /


console.log(path.resolve("c:/hello/world", "world/ans"));