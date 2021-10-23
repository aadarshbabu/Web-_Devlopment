// in Node js every file is a module. if you use any functions which is preset in diffretn directory you should import the directory.
// And if you have a module. and you give the excess to all dirictory. You shoud export this dirictry method.
function addmod() {
    return 5 + 7;
}
function sub() {
    return 5 - 7;
}
function mul() {
    return 5 * 7;
}
//if you want to use this func in another file. first you export this funtion. bcz by defult this func if private.

// module.exports.add = addmod;
// module.exports.sub = sub;
// module.exports.mul = mul;
//if you exprot the module in this type that meance you export the module as an object. module.exports.(add) is a key and addmod is a key.

// there are one anothe way to export the multiple methods.\ like


module.exports = {
    addmod, sub, mul
}
