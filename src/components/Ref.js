import React,{useRef, useState} from 'react'

export const Ref = () => {
    const[name,setName]=useState('')
    const refElement=useRef();
    function handlesubmit(e){
      e.preventDefault();
      refElement.current.focus();
      refElement.current.style.color="red";
      refElement.current.style.fontSize="30px";
      refElement.current.value="Kamal";
      console.log(name)
    }
  return (
    <div>
     <form onSubmit={handlesubmit}>
        <input type="text" ref={refElement} value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <button>Submit</button>
     </form>
    </div>
  )
}
