import Hero from "../HomePage/hero/Hero.jsx";
import galleryData from "./GalleryData.jsx"; // Import your gallery data
import { motion } from "framer-motion";

const Gallery = () => {
  const variants = {
    initial: {
      opacity: 0.8,
      scale: 0.95,
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <Hero />

      <motion.div
        className="bg-black w-screen from-blue-500 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.section
          className="text-center py-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="text-center py-5">
            <h1 className="text-white text-5xl font-adam font-bold">Photos</h1>
            <p className="text-white"></p>
          </section>
        </motion.section>

        <motion.div
          className="text-center mx-10 md:mx-auto w-auto "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="card rounded-md "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-5">
              {galleryData.map((image) => (
                <motion.div
                  className="card rounded-md "
                  variants={variants}
                  whileHover="hover"
                >
                  <div
                    key={image.title}
                    className="bg-white p-1 shadow-md rounded-sm m-2 h-96"
                  >
                    <img
                      src={image.imageLink}
                      alt={image.title}
                      className="w-full h-full  mb-4 rounded-md object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Gallery;
