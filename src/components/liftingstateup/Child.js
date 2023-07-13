import React,{useState} from 'react'

const Child = (props) => {
const[name,setName]=useState('');
const handlechange=(e)=>{
    setName(e.target.value);
}
const handleSubmit=(e)=>{
e.preventDefault();
props.onSubmit(name);
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handlechange}/><br/>
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Child