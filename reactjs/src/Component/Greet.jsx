import React from 'react';
import '.././Css/App.css';
// import { Fullname } from '.././App';

export function Greet() {

    // const val = useContext(Fullname); // Use context is use for Get the value from  provider..

    const curDate = Date()
    console.log(curDate)
    let greet = "";
    let Time = 10;

    let style = {
        textTransform: "capitalize"

    }
    if (Time > 6 && Time < 11) {
        greet = "good Morning";
        style.color = "green";
    }
    else if (Time >= 12 || Time < 6) {
        greet = "Good AfterNoon"
        style.color = "orange";
    }
    else if (Time > 4 && Time < 10) {
        greet = "Good Night"
        style.color = "Black"
    }


    return (
        <>
            <div className="greet">
                <h1 className='info'>Hello Aadarsh<span style={style}> {greet}</span></h1>
            </div>

        </>
    );

}