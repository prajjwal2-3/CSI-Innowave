import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708461655/CSI/m5lcsj6rx3b09t3es6h0.jpg",
    "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708461655/CSI/vqsjyi4sjoby4irwpw1z.jpg",
    "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708461500/CSI/xyvop6fkdsaqz0wwe7bf.jpg",
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
            <img
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
