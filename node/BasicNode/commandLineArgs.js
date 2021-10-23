//process.argv is a globle variable which is accept the Command line Argument. argv is a array. 

// console.log(process.argv); // it is a argv array. when you put the command line argument. node send the arguments in argv array. process
// process.argv.forEach((value, index) => {
//     console.log(index, value.slice(3)); //

// })

const val = process.argv.filter((value, index) => {
    return (Number(value));
})
    .map((value) => { return Number(value) })
    .reduce((Total, val) => { return Total += val });


console.log(val);