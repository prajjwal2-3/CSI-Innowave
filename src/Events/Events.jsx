import React, { useState } from "react";
import { Link } from "react-router-dom";
import eventData from "./EventData";
import ArrowRight from "../assets/arrow-right.svg";
import ImageSlider from "./ImageSlider.jsx"; // Assuming you have an ImageSlider component

const Events = () => {
    const [showImageSlider, setShowImageSlider] = useState(false);

    const handleImageClick = () => {
        // Toggle the state to show/hide the image slider
        setShowImageSlider(!showImageSlider);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {!showImageSlider ? (
                <>
                    <div className="text-9xl font-bold -mt-56">Events</div>
                    <div>
                        <img
                            className="mx-auto w-10 hover:bg-red-700 transition duration-300 ease-in-out cursor-pointer"
                            src={ArrowRight}
                            alt=""
                            style={{ width: '10%' }}
                            onClick={handleImageClick}
                        />
                    </div>
                </>
            ) : (
                <ImageSlider />
            )}
        </div>
    );
};

export default Events;
