import React, { useState } from "react";

const InputData = () => {
  // Main Funcion

  const [Userdata, setdata] = useState({}); // state.
  const [showData, setShowData] = useState([]); //state

  const data = (e) => {
    const { name, value } = e.target; //object Dstructure.
    setdata({ ...Userdata, [name]: value }); // its set the value in the state..
  };

  const submit = (e) => {
    e.preventDefault();
   setShowData([...showData, Userdata]);

    // both are array as object. append the object.
    // it's meane  [...showData, Userdata], Set the ShowData object and append the Userdataobject. and append the State.
    // it's a ilusion every time add the one array data. every time append a privious array as Object and new object.

    // setShowData(()=>{
    //   return[
    //     ...showData,Userdata
    //   ]
    // })
  };

  return (
    <>
      <div className="inputbox">
        <form>
          <h2> </h2>
          <label htmlFor="name">Enter a name</label>

          <input
            placeholder="Enter a name"
            onChange={data}
            type="text"
            name="name"
            value={Userdata.name}
            id=""
          />

          <input
            placeholder="Enter a email id"
            onChange={data}
            type="Email"
            name="email"
            value={Userdata.email}
            id=""
          />

          <input
            placeholder="Enter a Phone No"
            onChange={data}
            type="text"
            name="phone"
            value={Userdata.phone}
            id=""
          />

          <button onClick={submit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputData;
