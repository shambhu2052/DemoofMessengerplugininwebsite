//It can be used together with the usestate hook to share the data between nested component deeply .
//Supose we have three child component such as ChildA, childB,childc .if parent comonent want to pass the data to childC then we have to use useContext
//in this context hook we have to do first of all createcontext and provider and consumer
import React from 'react'
import { createContext } from 'react';
import ChildA from './ChildA';
const data1=createContext();
const data2=createContext();
const Parent = () => {
   
    const name="Shambhu Chaudhary"//This is a content we have to pass to ChildC
    const gender="Male" // This is a content we have to pass to childC component
  return (
    <div>
    <data1.Provider value={name}>
    <data2.Provider value={gender}>
     <ChildA/>
    </data2.Provider>
    </data1.Provider>
    </div>
  )
}

export default Parent;
export {data1,data2};