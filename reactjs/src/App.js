import React from "react"; // { createContext } 
import "./Css/App.css";
import "./Css/Weather.css"; // it is the weather App css file.
// import { Greet } from "./Component/Greet";
// import Card from "./Component/Card";
// import data from "./data";
// import Counter from "./Component/incDecCounter";
// import InputData from "./Component/dataInput"; // input Data Form componenet.
// import TodoApp from "./Component/todo";
// import Weather from "./Component/Weather";
// import ContextApis  from "./Component/ContextApi";
// import UseEffect from './Component/useEffect';
  import Covid19Status from "./Component/Covid19Status";

/* {data.map((data, index) => {
        return <Card key={index} value={data} />; // every card has a unick element that is key.
      })} */

//

// const Fullname=createContext(); // create a context to To sent the value in component A to component B directly.
// const obj={
//     fname:" Aadarsh",
//     lname:" Singh"
// }

// Master Component.
function App() {
  return (
    <>
      {/* <Greet /> */}
      {/* <InputData /> */}
      {/* <TodoApp /> */}
      {/* <Weather /> */}
      {/* <UseEffect /> */}
      {/* <Fullname.Provider value={obj} >  // provider is use to sent the data in Directly Component A to Compnent B
        <ContextApis /> 
      </Fullname.Provider> */}

      <Covid19Status />
    
    </>
  );
}
export default App;
// export { Fullname };