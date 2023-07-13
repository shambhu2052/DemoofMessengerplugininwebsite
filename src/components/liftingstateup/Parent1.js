import React,{useState} from 'react'
import Child from './Child'

const Parent1 = () => {
  const[receiveData,setReceiveData]=useState("");
    const getdata=(data)=>{
      console.log(data);
      setReceiveData(data);
    }
  return (
    <div>
        <Child onSubmit={getdata}/>
        <h1>Hello i am {receiveData}</h1>
    </div>
  )
}
export default Parent1;