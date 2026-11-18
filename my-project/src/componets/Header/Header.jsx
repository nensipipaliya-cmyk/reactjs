import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="w-full bg-gray-100 pb-7">
      {/* Navbar */}
      <header className="bg-white shadow-md mb-0">
        <nav className="flex items-center justify-around px-3 py-5">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <NavLink  to="/" className={({isActive}) => `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}>
              Home
            </NavLink>

           <NavLink to="/about" className={({isActive}) => `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}>
              About
            </NavLink>

            <NavLink to="/content" className={({isActive}) => `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}>
              Content
            </NavLink>

            <NavLink to="/Github" className={({isActive}) => `${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}>
              Github
            </NavLink>
          </div>
          <div className="flex gap-2">
            <button className="text-black px-4 py-2 rounded hover:bg-blue-700">
              Log in
            </button>   
            <button 
                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Get start
            </button>
          </div>

        </nav>
      </header>

    </div>
  )
}

export default Header
