import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Getmethod = () => {
    const[userdata,setUserdata]=useState([]);
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        console.log(response.data);
        setUserdata(response.data)
      })
    },[])
  return (
    <div>
    <h2 className="head">Get user data from fakeapi</h2>
    {userdata.map((item)=>(
        <div>
         <h3>{item.username}</h3>
      <h3>{item.email}</h3>
      <h4>{item.address.street}</h4>
        </div>
      
    ))}
    </div>
  )
}

export default Getmethod