import React from 'react'
import { Greet } from './Greet'
//Context api is use to delever a data into a one funcional component to another functional component. directly. 
export default function ContextApis() {
    //its a calling greet component and ContextApi called by a App component
    // how to pass directly data to app component ot Great component.
    return (
        <div>
            <Greet />  
        </div>
    );
}
