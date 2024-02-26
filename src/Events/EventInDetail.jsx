import React from "react";
import { useParams } from "react-router-dom";
import eventData from "./EventData";
import { motion } from "framer-motion";

const EventInDetail = () => {
  const { id } = useParams();
  const event = eventData.find((event) => event.id == id);

  if (!event) {
    return <div>Event not found</div>;
  }

  const gradientBorderStyle = {
    border: "2px solid",
    borderImage: "linear-gradient(45deg, #551a8b, #003366, #2F4F4F)",
    borderImageSlice: 1,
  };

  return (
    <motion.div
      className="bg-white text-black m-10 flex flex-col md:flex-row justify-center text-center rounded-lg overflow-hidden "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="bg-white text-black m-5 flex items-center flex-col md:flex-row justify-center text-center rounded-lg overflow-hidden"
        style={gradientBorderStyle}
      >
        <motion.img
          src={event.posterLink}
          alt={event.title}
          className="w-[50%] mx-auto  rounded-lg shadow-lg m-5 lg:ml-5"
        />

        <motion.div
          className="text-center my-auto p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2 className="text-3xl font-bold mb-5">
            {event.title}
          </motion.h2>

          <motion.p className="border-b border-gray-200 pb-2">
            {event.description}
          </motion.p>
          {event.eventPhotos && event.eventPhotos.length > 0 && (
            <motion.div className="flex gap-2 overflow-x-scroll">
              {event.eventPhotos.map((photo, index) => (
                <motion.img
                  key={index}
                  src={photo}
                  alt={`Event Photo ${index + 1}`}
                  className="w-[90%] md:w-[50%] mx-auto rounded-lg flex flex-col shadow-lg m-5 lg:ml-5"
                />
              ))}
            </motion.div>
          )}
          <motion.p className="text-gray-600 text-sm">
            Date: {event.date}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventInDetail;
