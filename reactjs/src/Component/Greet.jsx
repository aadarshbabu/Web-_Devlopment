import React from 'react';
import '../App.css';
export function Greet() {
    const curDate = Date()
    console.log(curDate)
    let greet = "";
    let Time=10;

    let style ={
        textTransform: "capitalize"
        
    }
    if(Time>6 && Time <11)
    {
        greet="good Morning";
        style.color= "green";
    }
    else if (Time >= 12 || Time < 6 )
    {
        greet = "Good AfterNoon"
        style.color= "orange";
    }
    else if(Time > 4 && Time < 10){
        greet = "Good Night"
        style.color="Black"
    }
    
      


    return (
        <>
            <div className="greet">
                <h2> Hello Aadarsh <span style={style}> {greet} </span></h2>
            </div>
        </>
    );

}