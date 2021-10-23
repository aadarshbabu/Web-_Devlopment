
// Creating a async funcion. Its a kind of function which execute some event is occout.
// now i create a own call back funcions 
function resolve(callback, times) {
    return new Promise((resolve, reject) => {

        resolve(callback)

        if (times == 0) {
            throw reject(callback)
        }

    })
}


async function ownCallback(callback, times) {

    while (times--) {
        await resolve(callback, times)
            .then(res => res(times))
            .catch(res => console.log(res))
    }


}

console.log("hello")

ownCallback((times) => {
    console.log(times);
}, 5)

console.log("world");