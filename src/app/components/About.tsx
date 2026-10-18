import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <div id='About' className='min-h-[500px] bg-[#0a0e0d] flex flex-col items-center justify-center text-center px-4 py-10'>
      
      {/* Name */}
      <div className='text-white text-[35px] sm:text-[45px] md:text-[60px] font-bold leading-tight'>
        Muhammad Saqib Jadoon
      </div>

      {/* Role */}
      <div className='text-[#0b8642] text-[18px] sm:text-[20px] md:text-[25px] font-bold mt-2'>
        Software Developer
      </div>

      {/* Description */}
      <div className='w-full sm:w-[80%] md:w-[55%] mt-4'>
        <p className="text-[#A1A1AA] text-sm sm:text-base md:text-lg">
          Creative and detail-focused Frontend Developer with hands-on experience building responsive and dynamic web and mobile applications using React, Next.js, React Native, TypeScript, and modern web technologies.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-sm sm:text-base">
        
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2 text-[#A1A1AA]">
            <MdOutlineMail />
            <span>saqibiot@gmail.com</span>
          </div>
        </a>

        <div className="flex items-center gap-2 text-[#A1A1AA]">
          <FaPhoneAlt />
          <span>+92313-5223612</span>
        </div>

        <a href="https://maps.app.goo.gl/7DLiMJBxo5Cjt8Tf6" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2 text-[#A1A1AA]">
            <IoLocationOutline />
            <span>Attock, Punjab</span>
          </div>
        </a>

      </div>
    </div>
  )
}

export default About
