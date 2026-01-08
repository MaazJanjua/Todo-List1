import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-800 text-white px-[5vw]'>
        <div className="logo">
            <span className='font-bold lg:text-[2.3vw] text-[5.3vw] cursor-pointer '>iTask</span>
        </div>
        <ul className='flex items-center gap-8 uppercase '>
            <li className='
           text-[3.2vw] lg:text-[1.2vw] cursor-pointer hover:text-[1.3vw] hover:font-extrabold transition-all duration-300'>Home</li>
            <li className='lg:text-[1.2vw] text-[3.2vw] cursor-pointer hover:text-[1.3vw] hover:font-extrabold transition-all duration-300'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
