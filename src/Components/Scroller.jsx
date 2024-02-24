import { motion, AnimatePresence } from "framer-motion";
import eventData from "../Events/EventData.jsx";

const Scroller = () => {
  return (
    <div className="events-container p-5 bg-black">
      <h2 className="font-bold mb-5 text-center bg-black text-3xl md:text-4xl lg:text-5xl">
        Updates &amp; Events
      </h2>

      <div className="events-scroll-container  overflow-x-auto relative flex flex-nowrap">
        <AnimatePresence wait>
          {eventData.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="event-card min-w-40 md:min-w-96 bg-white p-4 shadow-md rounded-sm m-2"
            >
              <img
                src={event.posterLink}
                alt={event.title}
                className="mobile-card w-full h-30 object-cover mb-4 rounded-md sm:h-auto"
              />
              <div className="hidden sm:block">
                <h3 className="text-black text-lg font-bold mb-2">
                  {event.title}
                </h3>
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
