import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import galleryData from "../../Gallery/GalleryData";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521009/CSI%20Website/Gallery/mlduoo38gu0h85stcpdk.jpg",
    "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708461655/CSI/vqsjyi4sjoby4irwpw1z.jpg",
    "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708461500/CSI/xyvop6fkdsaqz0wwe7bf.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769585/CSI%20Website/Gallery/wpgnapkpa5j2wxuk2m5x.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521349/CSI%20Website/Gallery/f7n7ssq7ggdnf1mp2bfj.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="bg-gray-700 w-full h-1/4">
      <section className="bg-black px-auto lg:py-10 lg:px-40">
        <header className="intro ">
          <div className="intro-slideshow ">
            {/* Use motion.div for animation */}
            <motion.img
              initial={{ opacity: 0 }} // Initial animation properties
              animate={{ opacity: 1 }} // Animation to run when component mounts
              transition={{ duration: 1 }} // Animation duration
              key={currentImage} // Add a unique key to force re-render for animation
              className="mx-auto w-11/12 h-7/12 md:h-[40rem] "
              src={images[currentImage]}
              alt={`Slide ${currentImage + 1}`}
            />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Hero;
