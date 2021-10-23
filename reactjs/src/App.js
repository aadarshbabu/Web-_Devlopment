import React from "react"; // { createContext } 
import { Link, Route, Switch } from 'react-router-dom'; //Router And Switch is improted from React_router_dom, Its is React Library which is us e to Navigate out site form clint side.
import "./Css/App.css";
import { Greet } from "./Component/Greet";
// import Card from "./Component/Card";
// import data from "./data";
import Counter from "./Component/incDecCounter";
import InputData from "./Component/dataInput"; // input Data Form componenet.
import TodoApp from "./Component/todo";
import Weather from "./Component/Weather";
// import ContextApis  from "./Component/ContextApi";
// import UseEffect from './Component/useEffect';
import Covid19Status from "./Component/Covid19Status";

/* {data.map((data, index) => {
        return <Card key={index} value={data} />; // every card has a unick element that is key.
      })} */

//ss

// const Fullname=createContext(); // create a context to To sent the value in component A to component B directly.
// const obj={
//     fname:" Aadarsh",
//     lname:" Singh"
// }

// Master Component.
function App() {
  return (
    <>
      {/* <UseEffect /> */}
      {/* <Fullname.Provider value={obj} >  // provider is use to sent the data in Directly Component A to Compnent B
        <ContextApis /> 
      </Fullname.Provider> */}

      {/* Link is use to go one page to another page. */}
      <ul className="navlink">
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/weather">Weather</Link></li>
        <li> <Link to="/input">Search</Link></li>
        <li> <Link to="/todo">Todo</Link> </li>
        <li> <Link to="/covid19"> Covid 19 </Link></li>
        <li> <Link to="/greet"> Greet </Link></li>
        <li> <Link to="/counter"> Counter </Link></li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/input" exact component={InputData} />
        <Route path="/weather" exact component={Weather} />
        <Route path="/todo" exact component={TodoApp} />
        <Route path="/covid19" component={Covid19Status} />
        <Route path="/greet" component={Greet} />
        <Route path="/counter" component={Counter} />
        <Route path="/:fullname" component={name} />
      </Switch>

    </>
  );
}
function Home() {
  return (
    <h1>Home page </h1>
  );
}


function name({ match }) {
  console.log(match)
  return (
    <>
      <h2> {match.params.fullname}This is name coponent</h2>
    </>
  );
};
export default App;
// export { Fullname };