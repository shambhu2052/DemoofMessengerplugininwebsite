import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className="flex items-center justify-between font-bold text-xl leading-[20px] py-[10px] container mx-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="1">UserId</Link>
        </div>
    </div>
  )
}

export default Navbar