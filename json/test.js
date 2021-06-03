


// document.addEventListener("DOMContentLoaded", function(event) {
//     // "https://cdn-api.co-vin.in/api/v2/admin/location/states/"
//     function hello() {
//         fetch(url).then(response => response.json()).then(data => {

//              data.states.forEach(element => {
//                 console.log(element.state_id)
//                 console.log(element.state_name)

//             });
//         })
//     }


//     hello()
//     console.log(event);
// },true)


// document.addEventListener("DOMContentLoaded", function(event)
// {
//     // console.log("This is indipendent document")

//   async function fetchdata(){

//     // console.log("This is first document")

//     let response =  await fetch("data.json")
//     // console.log("This is second document")

//     let data = await response.json()
//     // console.log("This is third document")
//     //   let d = JSON.parse(data)
//     //   console.log(d);

//     //  console.log(data);
//     return data

// }
// },true)

// console.log("before calling futchdata")
// fetchdata()


// window.onload = function()
// {
// hello=function(){
//     hello={
//         Name: "aadarsh",
//         Email: "aadarshsingh121@gmail.com",
//         PIN : "824303",
//         Work: ["gogle","microsoft","amozon"]
//     }
//    console.log(typeof hello);
// //    console.log(JSON.parse(hello));
//    let ls=JSON.stringify(hello)
//    let dat =  document.querySelector("#o")
//    dat.innerHTML=ls
//    console.log(typeof ls);
//   let d=  JSON.parse(ls)
//   console.log(typeof d)
//   console.log(d);

// }
// hello()
// }
// console.log("after calling futchdata")

//  when you call the async function await statment is resolving. funcion execute the another statment. or js execute the another line of code
//  if promice is return then fucnion resume our execution.





window.onload = function () {
    const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=824301&date=23-05-2021";
    // const url = "https://cdn-api.co-vin.in/api/v2/admin/location/states/"
    const data = async function() 
    {

        const responce = await fetch(url)
        const State_name = await responce.json()
        // let data = JSON.stringify(State_name)  // use to convert javascript object into Json Text Formate.
        console.log(State_name)
        document.getElementById("data").append(Object.values(State_name.sessions[0]))
         
        // State_name.states.forEach(element => {
        //     console.log(element.state_id)
        //     console.log(element.state_name)
        //     let h1 = document.createElement("H4")
        //     console.log(h1)
        //     document.querySelector("#data").appendChild(h1).append(element.state_id)
        //     document.querySelector("#data").appendChild(h3 = document.createElement("h2")).append(element.state_name)
        // });
    }



    data().catch(error => {
        console.log(error);
    });
}