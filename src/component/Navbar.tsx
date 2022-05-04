import React from 'react'

const Navbar = () => {
  const [isContainerActive, setIsContainerActive] = React.useState(false)

  const handleClick = () => {
    if (isContainerActive) {
      setIsContainerActive(false)
    } else {
      setIsContainerActive(true)
    }
  }

  return (
    <div>
      <nav className="drop-shadow">
        <div className="mx-auto max-w-6xl px-4">
          {/* Desktop Version   */}
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* Website Logo */}
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  {/* <img src="logo.png" alt="Logo" className="mr-2 h-8 w-8" /> */}
                  <span className="text-lg font-semibold text-white">
                    MySchool
                  </span>
                </a>
              </div>
              {/* Primary Navbar items */}
              <div className="hidden items-center space-x-1 md:flex">
                <a
                  href=""
                  className="border-b-2 border-blue-500 py-2 px-2  text-white "
                >
                  Home
                </a>
                <a
                  href=""
                  className=" py-4 px-2  text-white transition duration-300"
                >
                  Services
                </a>
                <a
                  href=""
                  className=" py-4 px-2  text-white transition duration-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="duration-3 py-4 px-2  text-white transition"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Secondary Navbar Items */}
            <div className="hidden items-center space-x-3 md:flex md:justify-end ">
              <a
                href=""
                className="rounded py-2 px-2 font-medium text-white transition duration-300 hover:bg-blue-500"
              >
                Log In
              </a>
              <a
                href=""
                className="rounded bg-blue-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-blue-400"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="block flex items-center md:hidden">
            <button
              onClick={handleClick}
              className="mobile-menu-button outline-none"
            >
              <svg
                className="h-6 w-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div
            className={`mobile-menu${
              !isContainerActive ? ' hidden ' : 'block'
            }`}
          >
            <ul className="">
              <li className="active">
                <a
                  href="index.html"
                  className="block bg-green-500 px-2 py-4 text-sm font-semibold text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
