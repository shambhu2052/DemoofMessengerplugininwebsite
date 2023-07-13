import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <form>
            <input type="search " placeholder='Product Serach'/>
        </form>
        <div className="flex mt-[40px] gap-[20px]">
            <Link to="/feature">Feature</Link>
            <Link to="/new">New</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product