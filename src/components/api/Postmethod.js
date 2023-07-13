import React, { useState } from 'react'
import axios from 'axios'
const Postmethod = () => {
  
    const[inputdata,setInputdata]=useState({
      username:'',
      email:'',
      address:{
        street:''
      }
  });

    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      await axios.post('https://jsonplaceholder.typicode.com/users',inputdata)
      .then((response)=>{
        console.log(response.data)
      })
      setInputdata({username:'',
      email:'',
      address:{
        street:''
      }})
    }
    const handlechange=(e)=>{
      setInputdata({...inputdata,[e.target.name] : e.target.value})
    }
    const handleaddresschange=(e)=>{
      setInputdata({...inputdata, address: {
        ...inputdata.address,
        [e.target.name]: e.target.value
      }})
    }
  return (
    <div>
     <h2>We have to post the email and username in this api url</h2>
     <form>
        <label>UserName:</label>
        <input type="text" name="username" value={inputdata.username} onChange={handlechange}/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={inputdata.email} onChange={handlechange}/><br/>
        <label>Street</label>
        <input type="text" name="street" value={inputdata.address.street} onChange={handleaddresschange}/><br/>
        <button onClick={handleSubmit}>Post</button>
     </form>
    </div>
  )
}

export default Postmethod