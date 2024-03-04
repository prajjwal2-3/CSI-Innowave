import React, {useState} from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import eventData from "./EventData.jsx";
import {Link} from "react-router-dom";

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

    const currentEvent = eventData[currentIndex];

    const openFormLink = () => {
        if (currentEvent && currentEvent.formLink) {
            window.open(currentEvent.formLink, '_blank');
        }
    };


    return (
        <div className="relative">
            <div className="flex items-center justify-between h-screen mx-auto relative">
                {/* Left Arrow */}
                <img
                    src={ArrowLeft}
                    alt="Previous"
                    className="cursor-pointer fixed left-0 top-1/2 transform -translate-y-1/2 w-[10%] md:w-[5%] lg:w-[3%] ml-4"
                    onClick={goToPrevSlide}
                />

                <div className="text-center font-adam w-full">
                    <div className="flex flex-col items-center">
                        <div className="max-h-[50vh] mb-4">
                            {/* Poster Div */}
                            <img
                                src={eventData[currentIndex].posterLink}
                                alt={`Event ${currentIndex + 1}`}
                                className="w-1/2 md:w-[70%] mx-auto max-h-[50vh]"
                            />
                        </div>
                        <Link to={`/events/${eventData[currentIndex]?.id}`}>
                            <div className="flex gap-2">
                                {currentEvent && currentEvent.formLink && (
                                <button
                                    className="bg-slate-700 font-semibold text-white border border-white rounded-full py-2 px-6 my-3 hover:bg-white hover:text-blue-500 transition duration-300"
                                    onClick={openFormLink}
                                >
                                    Form Link
                                </button>
                                )}
                                <button
                                    className="bg-slate-700 font-semibold text-white border border-white rounded-full py-2 px-6 my-3 hover:bg-white hover:text-blue-500 transition duration-300">
                                    Know More
                                </button>
                            </div>
                        </Link>
                        <p className="my-3 w-[70%] mx-auto text-center text-xl">
                        {eventData[currentIndex].shortDescription}
                        </p>
                        <p className="my-3 text-gray-300 text-xl">
                            {eventData[currentIndex].date}
                        </p>
                    </div>
                    <div className="flex justify-center my-3">
                        {/* Right Arrow */}
                        <img
                            src={ArrowRight}
                            alt="Next"
                            className="cursor-pointer fixed right-0 top-1/2 transform -translate-y-1/2 w-[10%] md:w-[5%] lg:w-[3%] mr-4"
                            onClick={goToNextSlide}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
