import React from 'react'

export default function HamburgerBtn({setMenuOpen,menuOpen}) {
  return (
    <>
    <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-12 h-12  sm:flex lg:hidden fixed top-3 right-4 z-50 items-center justify-center
         rounded-md hover:bg-transparent sm:hover:bg-lightGray hover:opacity-75 sm:bg-lightGray transition-all duration-200"
      >
        {!menuOpen ? (
          // Hamburger icon
          <svg
            className="fill-current text-darkGray w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        ) : (
          // Close icon
          <svg
            className="fill-current text-darkGray w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 
                            222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 
                            400 366.51 289.49 256 400 145.49" />
          </svg>
        )}
      </button></>
  )
}
