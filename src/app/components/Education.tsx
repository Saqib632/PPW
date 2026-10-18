import React from 'react'

const Education = () => {
  return (
    <div>
        <div className="bg-[#121214] flex flex-col items-center  pt-[20px] pb-[50px]">
            <div className="text-white text-[30px] font-bold mb-8">Education</div>
            <div className="bg-[#09090b] w-[90%] md:w-[70%] rounded-lg p-8 text-white flex flex-col gap-2 border border-[#232329] shadow-lg mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <div className="text-2xl font-bold">Bachelor of Software Engineering</div>
                <div className="text-green-400 font-semibold text-lg">Pak-Austria Fachhochschule</div>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <div className="text-gray-300 text-base">10/2022 — 10/2026</div>
              </div>
           
            </div>
             <ul className="list-disc pl-6 text-[18px] font-normal text-[#A1A1AA] space-y-1 mt-4">
              <li>Developed strong foundation in software engineering principles and methodologies</li>
              <li>Completed coursework in Object-Oriented Programming, Data Structures, and Algorithms</li>
              <li>Worked on team projects involving software design, development, and testing</li>
              <li>Gained experience with version control, agile practices, and collaborative development</li>
            </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Education
