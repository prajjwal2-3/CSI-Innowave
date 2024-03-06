import React from 'react'
import Teamin from './Teamin'
const Team = () => {
  return (
    <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
    
    {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
    <div className="flex flex-col items-center">
    <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 py-8">
      Our Team
    </div>
    <Teamin/>
    </div>
  </div>
  )
}

export default Team
