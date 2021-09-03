function debounce(fun, timmer) {
  let timerid;

  return function over(args) {
   // it is use to clear a timeout
     if (timerid){ // if already settimeout funcion in wating to timer timer id is 1 and after call anothr event 
      clearTimeout(timerid);  // this line kill the privious event.. 
     }
      
    timerid = setTimeout(() => {
      console.log(timerid) 
      fun(args); // calling the func function...
    }, timmer);
  
  
  }; // over function...
}

function test(e) {
  console.log(e.target.value);
  console.log("This is the test. funcion");
}

var a = document.getElementById("clickme");
a.addEventListener("keypress", debounce(test, 1000));
