import React, { useState } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
const Putmethod = () => {
    const data1={username:'',email:''};
    const param= useParams();
    const[updatedata,setUpdatedata]=useState(data1);
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/$1",updatedata)
        .then((response)=>{
            console.log(response)
        })
    }
    const handlechange=(e)=>{
     setUpdatedata({...updatedata,[e.target.name]:e.target.value})
    }
  return (
    <div>
     <h1>we have to upadate username and email whose id number is 1 </h1>
     <form>
        <label>Username</label>
        <input type="text" name="username" onChange={handlechange}/><br/>
        <label>Email</label>
        <input type='email' name="email" onChange={handlechange}/><br/>
        <button onClick={handleSubmit}>Update</button>
     </form>
    </div>
  )
}

export default Putmethod