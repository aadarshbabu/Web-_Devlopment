import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(1);
 
  function incrCounter() {
    setcount(count+1);
  }
  return (
    <>
      <div className="count">
        <p> {count}</p>
        <button onClick={incrCounter}>Click Hear</button>
      </div>
    </>
  );
}

export default Counter;
