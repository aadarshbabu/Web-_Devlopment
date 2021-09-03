import React, {useEffect, useState} from 'react'

function UseEffect() {
    // it is a hook its render after component was render. 
    // useEffect is call atlest one time in component.
    const [key, setKey] = useState(1)
    

    useEffect(() => {   // if document is rerender then useEffect is call
        return () => {
           document.title = key;
           console.log("render")
        }
    },[key])

// when [] is empty its render only one time. but when you pass some value its render when these value is update. but value must be state. 
    
    const data =()=>{
       setKey(key+1); // 
       console.log(key)
     
    }
    return (
        <div>
            <button onClick={data}> Click hear {key}</button>
            <h1>Hello world </h1>
        </div>
    )
}

export default UseEffect;
