import React from "react";
import { useParams } from "react-router-dom";
import eventData from "./EventData";

const EventInDetail = () => {
  const { id } = useParams();
  const event = eventData.find((event) => event.id == id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-white text-black m-10 flex  justify-center text-center">
      <img
        src={event.posterLink}
        alt={event.title}
        className="w-[50%] mx-auto"
      />
      <div className="text-center my-auto">
        <h2 className="text-3xl font-bold">{event.title}</h2>

        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventInDetail;
