import React from 'react'
import { NavLink } from 'react-router'
import userImg from "../../assets/user.png"

const MainNav = () => {
  return (
    <div className='flex justify-between items-center py-3'>
        <div className='left'></div>
        <div className='middle flex gap-4 text-accent'>
            <NavLink  to="/">Home</NavLink>
            <NavLink  to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className='right flex items-center gap-4'>
            <img src={userImg} alt="" />
            <button className='btn px-10 btn-primary text-base-100 rounded-none'>Login</button>
        </div>
    </div>
  )
}

export default MainNav