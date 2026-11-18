import React from 'react'

function Footer() {
  return (
     <footer className="bg-gray-900 px-8 py-3 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-blue-400">
          MyLogo
        </h2>

        {/* Links */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400">
            About Us
          </a>

          <a href="#content" className="hover:text-blue-400">
            Content
          </a>
        </div>

      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-sm text-gray-400">
        © 2026 MyLogo. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

