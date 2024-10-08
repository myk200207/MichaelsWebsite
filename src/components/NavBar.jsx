import React from 'react'

const NavBar = () => {
  return (
    <nav className = 'bg-themeSecondColor sticky top-0 text-white px-8 md:px-16 flex justify-center ' style={{}}>
        <div className ='w-screen py-3 flex justify-center md:justify-between items-center '>
            <div className = 'text-white text-2xl font-montserrat hidden md:inline'>
                Michael
            </div>
            <div className ='space-x-6'>
                <a href="#" className='hover:text-gray-400'>Home</a>
                <a href="#" className='hover:text-gray-400'>About Me</a>
                <a href="#" className='hover:text-gray-400'>Projects</a>
                <a href="#" className='hover:text-gray-400'>Home</a>
            </div>
            <button className ='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300
            hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </nav>
  )
}

export default NavBar