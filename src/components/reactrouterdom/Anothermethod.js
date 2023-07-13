import React,{useState} from 'react'

const Anothermethod = () => {
    const[show,setShow]=useState("Home")
  return (
    <div>
        <div className="flex items-center justify-between">
            <h1 onClick={()=>setShow("Home")}>Home</h1>
            <h1 onClick={()=>setShow("About")}>About</h1>
            <h1 onClick={()=>setShow("Contact")}>Conatct</h1>
        </div>
        {show==='Home' && (<h1>This is a Home Page</h1>)}
        {show==="About" && (<h1>This is About Page</h1>)}
        {show==="Conatct" && (<h1>This is a Contact Page</h1>)}
    </div>
  )
}

export default Anothermethod