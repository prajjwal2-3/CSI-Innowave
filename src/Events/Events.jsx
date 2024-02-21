import React from "react";
import eventData from "./EventData";

const Events = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {eventData.map((event) => (
        <div key={event.title} className="bg-white p-4 shadow-md rounded-md">
          <img
            src={event.posterLink}
            alt={event.title}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-bold mb-2">{event.title}</h2>
          <p className="text-gray-500 mb-4">{event.shortDescription}</p>
          <p className="text-gray-500">{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
