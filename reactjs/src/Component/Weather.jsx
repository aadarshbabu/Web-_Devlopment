import React, { useState, useEffect } from "react";

export default function Weather() {
  const [data, setdata] = useState({
      name:"",
      temp:"",
      temp_max:"",
      temp_min:"",
      cod:"",
      message:"",
      Search:"Search Your city"
  });

  useEffect(() => {
    return () => {
      fetchweatherData("india");
    };
  },[]);

  let fetchweatherData = async (userData) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userData},IN&appid=91b42822b89e8b12fe0eaa7767c2204e`;
    let responce = await fetch(url);
    if(responce.status===200){
       let resdata= await responce.json();
        const {main,name}=resdata;
        setdata(main);
        setdata((prev)=>{
          return {...prev,name}
        });
    }else{
      let rejectdata= await responce.json();
      setdata(rejectdata)
      console.log(rejectdata);
    }
    
  }



  // debounce function is use to minimise the ststem calls.
  let debounce=(fun,timer)=>{
   let timerid; 

    return function over(args){
      if(timerid) 
        clearTimeout(timerid);

     timerid=setTimeout(() => {
        fun(args)
      }, timer)

    }
  }

  let api = (e) => {
      fetchweatherData(e.target.value);
      e.target.value="";
  };

  return (
    <>
      <div className="main">
        <input
          onKeyPress={debounce(api,1500)}
          className="inp"
          name="data"
          placeholder="Enter a city name"
        />

    {data.temp !=="" && data.cod !== "404"? 
      <div className="showdata">
          <h3>{data.name}</h3>
          <h2> {data.temp} </h2>
          <h6>Max Temp {data.temp_max} </h6>
          <h6>min Temp {data.temp_min} </h6> 
        </div>
      : data.cod==="404"? <span> {data.message} </span> : <span > {data.Search} </span> }
      </div>
    </>
  );
}
