// const arthmatic = require('./Export'); // if you want to use any func in another file first import the file and use 


// console.log(arthmatic.add())
// console.log(arthmatic.sub())
// console.log(arthmatic.mul())

// arthmatic is a object in the and add sub and mul is the function.


// when you export the mod in second way you should import the object in object d structor like

const { addmod, sub, mul } = require('./Export'); // order is not required when you import a multiple library.
// const { sub, mul, addmod} = require('./Export'); // it is fine.  No error.
console.log(addmod())
console.log(sub());
console.log(mul());
// you can use like this.