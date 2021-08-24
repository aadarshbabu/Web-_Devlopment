import React from "react";
import "./App.css";
// import { Greet } from "./Component/Greet";
// import Card from "./Component/Card";
// import data from "./data";
// import Counter from "./Component/incDecCounter";
// import InputData from "./Component/dataInput"; // input Data Form componenet.
import TodoApp from "./Component/todo";

// Card

/* {data.map((data, index) => {
        return <Card key={index} value={data} />; // every card has a unick element that is key.
      })} */

//

// Master Component.
function App() {
  return (
    <>
      {/* <InputData /> */}
      <TodoApp />
    </>
  );
}
export default App;
