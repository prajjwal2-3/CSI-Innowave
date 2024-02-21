import React from "react";
import eventData from "../Events/EventData.jsx";
import "./Scroller.css"; // Import the CSS file for your animations

const Scroller = () => {
    return (
        <div className="events-container p-5 bg-black">
            <h2 className="font-bold mb-5 text-center bg-black text-3xl  md:text-4xl lg:text-5xl ">
                Updates &amp; Events
            </h2>

            <div className="events-scroll-container">
                {eventData.map((event) => (
                    <div
                        key={event.title}
                        className="event-card bg-white p-4 shadow-md rounded-sm m-2"
                    >
                        <img
                            src={event.posterLink}
                            alt={event.title}
                            className="w-full h-30 object-cover mb-4 rounded-md sm:h-auto" // Responsive height for mobile
                        />
                        {/* Conditional rendering for description on larger screens */}
                        <div className="hidden sm:block"> {/* Hide on small screens */}
                            <h3 className="text-black text-lg font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-500 mb-4">{event.shortDescription}</p>
                            <p className="text-gray-500">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scroller;
