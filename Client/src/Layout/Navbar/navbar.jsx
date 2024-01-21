import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.scss"
import { IoCloseSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";


function Navbar() {
  const [isOpen, setIsOpen]=useState(false)
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <nav>
    <div className='navbar'>
        <ul className='switch_nav'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
        </ul>
    </div>

    <div id="burger" onClick={handleClick}>
      {
        isOpen ? <IoCloseSharp /> : <CiMenuBurger />
      }

    </div>
    </nav>
    {/* <div className={`${isOpen ? 'navlist_active' : 'navlist_close'}navlist`}>
    <ul className='switch_nav'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>
        </ul>
    </div> */}

</>
  )
}

export default Navbar
