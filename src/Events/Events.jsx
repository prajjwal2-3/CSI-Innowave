import React, { useState } from "react";
import ArrowRight from "../assets/arrow-right.svg";
import ImageSlider from "./ImageSlider.jsx"; // Assuming you have an ImageSlider component
import { SparklesCore } from "../Components/ui/sparkles.tsx";
import { WavyBackground } from "../Components/ui/wavy-background.tsx";
const Events = () => {
  const [showImageSlider, setShowImageSlider] = useState(false);

  const handleImageClick = () => {
    // Toggle the state to show/hide the image slider
    setShowImageSlider(!showImageSlider);
  };

  return (
    <>
      <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute z-0 inset-0 h-screen">
          <WavyBackground />
        </div>
        <div className="flex flex-col justify-center z-20 mt-4 items-center h-screen">
          {!showImageSlider ? (
            <>
              <div className="text-9xl font-bold ">Events</div>
              <div>
                <img
                  className="mx-auto w-10 cursor-pointer transition duration-300 z-50 ease-in-out "
                  src={ArrowRight}
                  alt=""
                  style={{ width: "10%" }}
                  onClick={handleImageClick}
                />
              </div>
            </>
          ) : (
            <ImageSlider />
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
