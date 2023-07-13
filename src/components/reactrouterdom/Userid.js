import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
const Userid = () => {
    const param=useParams();
    const userid=param.userid;
    const[searchparam,setSearchparam]=useSearchParams();
    const showActiveuser=searchparam.get('filter')==='active';
    const showUnactiveuser=searchparam.get('filter')==='offline';
  return (
    <div>
        <h2>The person of user id is {userid}</h2>
        <button onClick={()=>setSearchparam({filter:'active'})}> Active User</button>
        <button onClick={()=>setSearchparam({filter:'offline'})}> Reset Filter</button>
        {showActiveuser ? (<h1>This is a active user</h1>):(<h2></h2>)}
        {showUnactiveuser ? (<h1>This is a unactive user</h1>):(<h1></h1>)}
    </div>
  )
}

export default Userid