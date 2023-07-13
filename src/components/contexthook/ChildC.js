import React,{useContext} from 'react'
import { data1,data2 } from './Parent'
const ChildC = () => {
    const firstname=useContext(data1);
    const gender=useContext(data2);
  return (
    <div>
        <h1>Hi i am {firstname} and my gender is {gender}</h1>
    </div>
  )
}

export default ChildC