import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import eventData from "../Events/EventData.jsx";
import { Link } from "react-router-dom";

const Scroller = () => {
  const [isHovered, setIsHovered, hoveredIndex] = useState(false);
   

  // Toggle hover state
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        // Move to next card automatically
        console.log("Moving to next card...");
      }
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="events-container p-5 bg-black">
      <h2 className="font-bold mb-5 text-center bg-black text-3xl md:text-4xl lg:text-5xl">
        Updates &amp; Events
      </h2>

      <div
        className="events-scroll-container overflow-x-auto relative flex flex-nowrap"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <AnimatePresence>
          {eventData.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              // Decreased height and increased width of the card
              className="event-card min-h-36 md:min-h-60 min-w-96 md:min-w-120 bg-white p-4 shadow-md rounded-sm m-2"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/events/${event.id}`}>
                <img
                  src={event.posterLink}
                  alt={event.title}
                  className="mobile-card w-full h-full md:h-30 object-cover mb-4 rounded-md sm:h-auto"
                />
              </Link>
              <div className="hidden sm:block">
                <Link to={`/events/${event.id}`}>
                  <h3 className="text-black text-lg font-bold mb-2">
                    {event.title}
                  </h3>
                </Link>
                <p className="text-gray-500 mb-4">{event.shortDescription}</p>
                <p className="text-gray-500">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Scroller;
