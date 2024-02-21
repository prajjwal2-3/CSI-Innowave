import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full mt-10 md:w-2/3">Get in Touch.</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            Visit us in college hours or email us by clicking Contact Us
          </p>
          <div className="w-44 pt-6 mb-10 md:pt-0">
            <a
              href="mailto:yg232004@gmail.com"
              className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <div
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
        <div className="flex flex-col">
          <div className="flex mt-12 mb-12 flex-row justify-between">
            <div class="flex flex-row space-x-8 mx-auto items-center justify-between">
              <a
                href="https://www.linkedin.com/company/csi-innowave/"
                className="cursor-pointer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/mait_csi_innowave/"
                className="cursor-pointer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.youtube.com/@CSI-Innowave"
                className="cursor-pointer"
              >
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
          <hr class="border-gray-600" />
          <p class="w-full text-center my-12 text-gray-600">
            Copyright © 2024 CSI-Innowave
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
