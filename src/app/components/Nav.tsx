import React from 'react'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#09090b] h-15 flex items-center justify-between px-4 py-3 md:px-10 lg:px-40'>
      {/* Left side - Name */}
      <div className='text-[#0b8642] text-[20px] font-bold'>Saqib Jadoon</div>
      
      {/* Center - Navigation Links */}
      <div className='hidden md:block ml-30'>
        <ul className='flex text-[#A1A1AA] gap-6 lg:gap-7'>
         <li>
    <a href="#About" className='hover:text-white cursor-pointer'>About</a>
  </li>
  <li>
    <a href="#Expe" className='hover:text-white cursor-pointer'>Experience</a>
  </li>
  <li>
    <a href="#projects" className='hover:text-white cursor-pointer'>Projects</a>
  </li>
  <li>
    <a href="#ST" className='hover:text-white cursor-pointer'>Skills</a>
  </li>
  <li>
    <a href="#Footer" className='hover:text-white cursor-pointer'>Contact</a>
  </li>
        </ul>
      </div>
      
      {/* Right side - Social and Resume */}
      <div className='flex items-center gap-4 md:gap-8'>
        {/* Social Icons */}
        <div className='flex gap-4 md:gap-6'>
          <div className='h-[30px] w-[30px] flex items-center justify-center hover:bg-gray-400 hover:rounded-[5px]'>
            <a href="https://github.com/Saqib632" target="_blank" rel="noopener noreferrer">
              <LuGithub className="text-white" />
            </a>
          </div>
          <div className='h-[30px] w-[30px] flex items-center justify-center hover:bg-gray-400 hover:rounded-[5px]'>
            <a href="https://www.linkedin.com/in/muhammad-saqib-654a23280/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="text-white" />
            </a>
          </div>
        </div>
        
        {/* Resume Button */}
        <a
          href="/files/Saqib_(CV).docx"
          download
          className="h-[35px] bg-[#19a34c] flex items-center justify-center rounded-[5px] gap-3 px-3 cursor-pointer"
        >
          <MdOutlineFileDownload className="text-[20px]" />
          <span className='hidden sm:inline'>Resume</span>
        </a>
      </div>
    </nav>
  )
}

export default Nav