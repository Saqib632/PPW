import React from 'react'
import { CiMobile3 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
const ST = () => {
  return (
    <div id='ST' className="bg-[#121214] min-h-screen py-12 px-2">
      <h2 className="text-white text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend Development */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center">&lt;/&gt; Frontend Development</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full font-semibold hover:bg-[#0b8642] hover:text-black">HTML5</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">CSS3</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">JavaScript (ES6+)</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">TypeScript</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Tailwind CSS</span>
          </div>
        </div>
        {/* Mobile Development */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center"><CiMobile3 className='mr-[10px]'/> Mobile Development</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">React Native</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Android Studio</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Expo Go</span>
          </div>
        </div>
        {/* Frameworks & Libraries */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center">&lt;/&gt; Frameworks & Libraries</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">React.js</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Next.js</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">React Native</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Expo</span>
          </div>
        </div>
        {/* State & Form Management */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center">&lt;/&gt; State & Form Management</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">React Context</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Redux Toolkit</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">React Hook Form</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Valibot</span>
          </div>
        </div>
        {/* API Integration */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center">&lt;/&gt; API Integration</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">RESTful APIs</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Axios</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Fetch API</span>
          </div>
        </div>
        {/* Backend & Database */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center"><FaDatabase className='mr-[10px]'/> Backend & Database</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">MySQL</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">MogoDB</span>
          </div>
        </div>
        {/* Version Control */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center"><IoKeySharp className='mr-[10px]'/> Version Control</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Git</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Github</span>
          </div>
        </div>
        {/* Soft Skills */}
        <div className="bg-[#18181b] rounded-xl p-6 shadow-lg border border-[#232329] flex flex-col mb-4">
          <span className="text-[#0b8642] text-xl font-semibold mb-2 flex items-center">&lt;/&gt; Soft Skills</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Problem-solving</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Quick learner</span>
            <span className="bg-[#232329] text-white px-4 py-1 rounded-full hover:bg-[#0b8642] hover:text-black">Team collaboration</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ST
