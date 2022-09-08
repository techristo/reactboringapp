import React from 'react';
import './index.css';
import { useState } from "react";
import axios from 'axios';

interface Post {
  activity: string,
	accessibility: number,
	type: string,
	participants: number,
	price: number,
	key: string
}


function App() {
  const [typeData, setTypeData] = useState<Post>();
  const [type, setType] = useState("education");
  const handleType = (event:any) => {
    setType(event.target.value)
    console.log(event.target.value);
   
  }
  
   const handleSubmit =(event:any) => {
    event.preventDefault();
    console.log('click')
    const act = type;
    const url = `https://www.boredapi.com/api/activity?type=${act}`;
    axios({
      method: 'get',
      url,
      responseType: 'json'
    },)
      .then(function (response) {
        setTypeData(response.data);
        console.log(typeData);

        
      })
  }
 
    
  
  return (
    <div className="App">
     <div className="bored">Are you bored?</div>
     <form onSubmit={handleSubmit}>
     <label className="typeLabel">Select a Type of Activity:</label>
  <select className="type" value={type} onChange={handleType}>
    <option value="education">education</option>
    <option value="recreational">recreational</option>
    <option value="social">social</option>
    <option value="diy">diy</option>
    <option value="charity">charity</option>
    <option value="cooking">cooking</option>
    <option value="relaxation">relaxation</option>
    <option value="music">music</option>
    <option value="busywork">busywork</option>
  </select>
  <input className="typeButton" type="submit" value="GET IT" />
  </form>
<div>

 <div className="boredac">{typeData?.activity}</div>
</div>
  </div>




  );
}


export default App;
