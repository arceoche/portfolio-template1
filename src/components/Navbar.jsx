// import {Link} from 'react-router-dom'

// function Navbar(){
//     return(
//       <nav className="flex items-center justify-between p-5">
//         <Link to="/" className="text-2xl font-bold text-">
//         Portfolio Template
//         </Link>
//         <div className="flex gap-6">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/projects">Projects</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//       </nav>
//     )
// }

// export default Navbar

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTiktok, } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="p-5">
      <div className="flex items-center justify-between">
        <a href="#home" className="font-heading text-3xl font-bold">
          Portfolio Template
        </a>

        {/* Desktop navigation */}
        <div className="hidden gap-6 items-center md:flex">
          <a href="#home" className="hover:text-[#cba49f] transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="hover:text-[#cba49f] transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-[#cba49f] transition-colors duration-200">Projects</a>
          <a href="#services" className="hover:text-[#cba49f] transition-colors duration-200">Services</a>
          <a href="#contact" className="hover:text-[#cba49f] transition-colors duration-200">Contact</a>

          <div>
            <a href="https://facebook.com" className="hover:text-[#cba49f] transition-colors duration-200">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="hover:text-[#cba49f] transition-colors duration-200">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl"/>
            </a>
            <a href="https://tiktok.com" className="hover:text-[#cba49f] transition-colors duration-200">
              <FontAwesomeIcon icon={faTiktok} className="text-2xl"/>
            </a>
          </div>

          <a href="" className="inline-block p-3 font-heading rounded bg-[#4d0e13] font-bold text-white text-lg hover:bg-[#cba49f]">Work with Me</a>

        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} 
            className="transition-all duration-300"
          />
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="mt-4 flex flex-col items-center gap-4 md:hidden">
          <a href="#home" className="hover:text-[#cba49f] transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="hover:text-[#cba49f] transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-[#cba49f] transition-colors duration-200">Projects</a>
          <a href="#services" className="hover:text-[#cba49f] transition-colors duration-200">Services</a>
          <a href="#contact" className="hover:text-[#cba49f] transition-colors duration-200">Contact</a>

          <div className="flex gap-2">
            <a href="https://facebook.com" className="hover:text-[#cba49f] transition-colors duration-200">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </a>
            <a href="https://instagram.com" className="hover:text-[#cba49f] transition-colors duration-200">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl"/>
            </a>
            <a href="https://tiktok.com" className="hover:text-[#cba49f] transition-colors duration-200">
              <FontAwesomeIcon icon={faTiktok} className="text-3xl"/>
            </a>
          </div>

          <a href="" className="inline-block p-3 font-heading rounded-lg bg-[#4d0e13] font-bold text-white text-lg hover:bg-[#cba49f]">Work with Me</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar