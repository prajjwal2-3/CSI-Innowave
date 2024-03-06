import React from 'react'
import ImagesSliderDemo from '../Homepage/ImgSlider'
const Gallery = () => {
  return (
    <div>
         <div className="sm:h-[60rem] h-screen overflow-hidden w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex py-16 sm:py-10   justify-center">
    
      <div className="absolute pointer-events-none inset-0 flex justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl w-10/12  ">
        <div className='font-bold  relative z-20 bg-clip-text mb-5 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 '>Our Memories</div>
      <ImagesSliderDemo/>
      </div>
    </div>
    </div>
  )
}




export default Gallery
