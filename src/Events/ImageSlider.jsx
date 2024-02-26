import React, { useState } from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import eventData from "./EventData.jsx";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex  justify-between h-screen mx-auto ">
      <div className="text-center ">
        {/* Description Div */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl mt-0 underline font-bold mb-4">
          {eventData[currentIndex].title}
        </h2>
        <div className="max-h-[50vh]">
          {/* Poster Div */}
          <img
            src={eventData[currentIndex].posterLink}
            alt={`Event ${currentIndex + 1}`}
            className="w-1/2 md:w-1/5 mx-auto"
          />
        </div>
        <Link to={`/events/${eventData[currentIndex]?.id}`}>
          <button className="bg-blue-500 text-white border border-white rounded-full py-2 px-6 my-3 hover:bg-white hover:text-blue-500 transition duration-300">
            Know More
          </button>
        </Link>
        <p className="my-3 mx-5 text-xl">
          {eventData[currentIndex].shortDescription}
        </p>
        <p className="my3 text-xl">Date: {eventData[currentIndex].date}</p>
        <div className="flex justify-center my-3">
          {/* Left Arrow */}
          <img
            src={ArrowLeft}
            alt="Previous"
            className="cursor-pointer w-[10%] md:w-[5%] lg:w-[3%] mr-4"
            onClick={goToPrevSlide}
          />
          {/* Right Arrow */}
          <img
            src={ArrowRight}
            alt="Next"
            className="cursor-pointer w-[10%] md:w-[5%] lg:w-[3%]"
            onClick={goToNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
