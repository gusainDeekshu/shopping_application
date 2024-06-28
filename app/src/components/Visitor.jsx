import React from 'react'
import { useState, useEffect } from "react";

function Visitor() {
    
    const url = "http://localhost:7000/api/users";
    const [data, setData] = useState([]);
    

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, [])
    console.log(data)
  return (
    <div style={{alignContent:'center',textAlign:'center',padding:'20%'}}>
        <h1>
      Number of visitor {data}
      </h1>
    </div>
  )
}

export default Visitor
