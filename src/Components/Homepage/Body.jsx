import React from 'react'
import ImagesSliderDemo from './ImgSlider'
import  SparklesPreview  from './Hero'
import Sponser from './Sponser'
import HomeAbout from './HomeAbout'
import InfiniteMovingCardsDemo from './Events'

const Body = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-8/12 sm:m-2 m-2 ">
        <div className="flex justify-center"><SparklesPreview/></div>
     <ImagesSliderDemo/>
     <div className="flex justify-center"><Sponser/></div>
     <div className="flex justify-center"><HomeAbout/></div>
     <div className=""><InfiniteMovingCardsDemo/></div>
      </div>
    </div>
  )
}

export default Body
