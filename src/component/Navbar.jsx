import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
const Navbar = () => {
  const items = useSelector((state)=>state.card)
  return (
    <div className=' flex fixed w-full z-50 top-0 gap-4 p-4 justify-between bg-red-200 '>
      <Link className='text-md font-semibold hover text-red-950 hover:bg-red-950 hover:text-red-200 'to={"/"} >Sho<span className='text-[20px] text-yellow-500'>pp</span>ing</Link>
      <div className='flex gap-4'>
      {/* <Link className='text-mx font-semibold hover text-red-950 hover:bg-red-950 hover:text-red-200 ' >Home</Link> */}
      <Link className='text-mx font-semibold hover text-red-950 hover:bg-red-950 hover:text-red-200 ' to={"/login"}>Login</Link>
      <Link  className='flex ' to={"/addcard"}><SlBasket/>
      <span className='text-[12px] -ml-2 -my-3'>{items.length}</span>
      </Link>
    </div>
    </div>
  )
}

export default Navbar
