// 

let curdate= Date(); // date is a method it's return the current date in the system


console.log(curdate.toLocaleString());
console.log(curdate.toString());
console.log(curdate);  
// both object is return the same value.



function time(){
    setInterval(()=>{
        console.log(curdate.toLocaleTimeString());
    },1000)
}

time();