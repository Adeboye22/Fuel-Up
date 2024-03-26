import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex flex-row justify-between px-4'>
        <div>
            <NavLink><img src={Logo} className='h-16 w-24' /></NavLink>
        </div>
        <div className='py-4 text-xl'>
            <ul className='text-gray flex flex-row gap-8 '>
             <a href="#about"><li>About Us</li></a>
             <a href="#services"><li>Services</li></a>
             <a href="#locations"><li>Locations</li></a>
             <button className='bg-black px-4 py-2 -mt-2 text-white border rounded'>Login</button>
             <li><NavLink>Sign up</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
