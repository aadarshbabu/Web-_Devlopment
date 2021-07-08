// import Header from './Header'; // if you want to access or call any functional component which is present in another file. first import the  Header.
 //.. if any component file is default exported. You can import in any name.
// import {Sidebar} from "./Header" // when you are export the specific funcional component. import the component in {Component Name} this way.
import React from 'react';
import './App.css';
// Ensure that your functional component First charctore is Captioal later
function Data() {
    return (
      <div>
      <h2>Welcome to Data component </h2>
    
      </div>
    );
    
}

function App() {
  let name= "aadarsh";
  return (
    <div className="App">

      <h1>{name}</h1>
      
      <Data />
    
      {/* <Header />
      <Sidebar /> */}
    </div>
    
  );
}

export default App;
