import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil, faPowerOff, faUser} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {


    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }


  return (
    <div className=' sticky top-0 left-0 w-full flex items-center justify-between bg-[#FAF9F6] shadow-md mb-2 rounded-md p-2'>
        <Link to='/' >
            <div className='p-3 tracking-[-1.5px] font-logo font-bold italic text-xl md:text-3xl'>BLOGGERS SEKAI</div>
        </Link>
        <div className=' w-[46%] md:w-[40%] lg:w-[20%] flex items-center justify-around'>
            <div className=' text-xs md:text-lg mr-6'>
                <Link to='create/' >Write</Link>
                <FontAwesomeIcon className=' pl-2' icon={faPencil} style={{color: "#1e002d",}} />
            </div> 
            <div className=' text-xs md:text-lg mr-6'>
                <Link to='profile/' >Profile</Link>
                <FontAwesomeIcon className=' pl-2' icon={faUser} style={{color: "#1e002d",}} />
            </div>
            <div className=' text-xs md:text-lg'>
                <Link onClick={handleLogout}>Logout</Link>
                <FontAwesomeIcon className=' pl-2' icon={faPowerOff} style={{color: "#1e002d",}} />
            </div> 
        </div>
    </div>
  )
}

export default NavBar