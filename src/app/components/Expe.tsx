import React from 'react'

const Expe = () => {
  return (
    <div id='Expe' className="bg-[#121214] flex flex-col items-center  min-h-screen pt-[60px] pb-[80px]">
      <div className="text-white text-[30px] font-bold mb-8">Professional Experience</div>
      <div className="bg-[#09090b] w-[90%] md:w-[70%] rounded-lg p-8 text-white flex flex-col gap-2 border border-[#232329] shadow-lg mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <div className="text-2xl font-bold">Web Developer Intern</div>
            <div className="text-green-400 font-semibold text-lg">Solutionave</div>
          </div>
          <div className="text-right mt-2 md:mt-0">
            <div className="text-gray-300 text-base">7/2025 — Present</div>
            <div className="text-blue-300 text-base">Islamabad, Pakistan</div>
          </div>
        </div>
        <ul className="list-disc pl-6 text-[18px] font-normal text-[#A1A1AA] space-y-1">
          <li>Collaborating with cross-functional teams to build responsive web and mobile applications</li>
          <li>Implementing UI components using React, React Native, Next.js, TypeScript, and Tailwind CSS</li>
          <li>Managing application state using Redux Toolkit and React Context API</li>
          <li>Integrating RESTful APIs for dynamic data rendering and CRUD operations</li>
          <li>Optimizing application performance and ensuring mobile-first, accessible design practices</li>
        </ul>
      </div>
      <div className="bg-[#09090b] w-[90%] md:w-[70%] rounded-lg p-8 text-white flex flex-col gap-2 border border-[#232329] shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <div className="text-2xl font-bold">Computer Networking intern</div>
            <div className="text-green-400 font-semibold text-lg">7starTelecom</div>
          </div>
          <div className="text-right mt-2 md:mt-0">
            <div className="text-gray-300 text-base">04/2023 — 06/2023</div>
            <div className="text-blue-300 text-base">Rawalpindi, Pakistan</div>
          </div>
        </div>
        <ul className="list-disc pl-6 text-[18px] font-normal text-[#A1A1AA] space-y-1">
          <li>Configured and maintained network devices including routers and switches</li>
          <li>Troubleshot connectivity issues and assisted in network performance optimization</li>
          <li>Monitored network security and implemented basic security protocols</li>
          <li>Documented network layouts and supported IT staff in daily operations</li>
        </ul>
      </div>
    </div>
  )
}

export default Expe
