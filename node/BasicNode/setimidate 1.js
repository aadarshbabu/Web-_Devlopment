// //When you execute a some tast in asynchronous but Imidatly then setimidate function is useful.
// let fun = () => {
//     console.log("fun func ");
// }
// let fun2 = () => {
//     console.log("fun func 2");
// }
// let fun3 = () => {
//     console.log("fun func 3");
// }
let callback = (str, obj) => {
    console.log("Hello", str)
    console.log(obj)

    console.log(obj.setSallary(44000));
    console.log(obj.sallary);

}
let obj = {
    name: "aadarsh",
    work: "software Engineer",
    sallary: 0,
    setSallary: function (salary) {
        this.sallary = salary;
        return "sucess Set"
    }
}
// SetTimeout(()=>{...},0 ) And SetImmediate() function both are same. 
function appz() {
    // fun2();
    setTimeout(callback, 2, "Aadarsh", obj); // You can pass parameater in settimeout funcion. like obj var, properity.

    // setImmeidate. You can also pass a parameater in setImmediate() funcion. only diffrent is its not accept the timer. You calt pass inteiger in setImmediate funcion. when you pass a intiger in setImmidate. Sometime is not take args. Implimentatin proublm

    setImmediate((t) => {
        console.log("Setimmidate", t)
    }, "F sT")
    // fun3();


}
appz();


