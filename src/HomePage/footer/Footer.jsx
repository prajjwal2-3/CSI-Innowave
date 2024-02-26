const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-center md:text-left text-5xl lg:text-5xl font-bold">
          <h1 className="w-full mt-10 md:w-2/3">Get in Touch.</h1>
        </div>
        <div className="flex mt-8 flex-col items-center md:flex-row md:justify-between">
          <p className="text-center md:text-left w-full md:w-2/3  text-gray-400">
            Visit us in college hours or email us by clicking Contact Us <br />
            Or call us now at +91 9871010872
          </p>
          <div className="w-44 mt-10 md:mt-0 my-auto md:pt-0">
            <a
              href="mailto:csiinnowave@gmail.com"
              className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <div
            className="mt-20"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              color: "red",
              width: "100%",
              height: "500px",
            }}
          >
            <div
              id="google-maps-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: "0" }}
                title="Google Maps"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Maharaja+Agrasen+Institute+Of+Technology(MAIT),+CH+Bhim+Singh+Nambardar+Marg,+Pocket+5,+Sector+22,+PSP+Area,+Delhi,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>

            <style>
              {`
      #google-maps-canvas img.text-marker {
        max-width: none !important;
        background: none !important;
      }
      img {
        max-width: none;
      }
    `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
