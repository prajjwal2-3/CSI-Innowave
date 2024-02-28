import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        event.target.closest(".mobile-menu") === null &&
        event.target.closest(".toggle-button") === null
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMobileMenu);

    return () => {
      document.body.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="font-adam font-bold">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-slate-100">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                <img
                  className="w-40 h-15 lg:h-24 lg:w-60 "
                  src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708503607/CSI%20Website/f1d6gk5mr0rkt6dse04q.png"
                  alt=""
                />
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <motion.button
              onClick={toggleMobileMenu}
              type="button"
              className={`lg:hidden inline-flex items-center p-2 text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 toggle-button ${
                isMobileMenuOpen ? "open" : ""
              }`}
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </motion.svg>
              )}
            </motion.button>
            <motion.div
              className={`${
                isMobileMenuOpen
                  ? "absolute mobile-menu  p-2 inset-12  rounded shadow  max-h-72"
                  : "hidden"
              } lg:flex lg:items-center lg:w-auto`}
              id="mobile-menu-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="relative z-50 py-5 flex bg-white lg:bg-transparent flex-col items-center font-semibold mt-4 text-2xl lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/aboutus"
                    className="block py-2 pr-4 pl-3  lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent border-gray-700"
                    onClick={handleMenuItemClick}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="block py-2 pr-4 pl-3  lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent border-gray-700"
                    onClick={handleMenuItemClick}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="block py-2 pr-4 pl-3 lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent border-gray-700"
                    onClick={handleMenuItemClick}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="block py-2 pr-4 pl-3  lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent border-gray-700"
                    onClick={handleMenuItemClick}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <div className="flex flex-row space-x-2 mx-auto mt-3 lg:mt-0 hover:text-red-700 items-center justify-between">
                    <a
                      href="https://www.linkedin.com/company/csi-innowave/"
                      className="cursor-pointer hover:text-red-700"
                    >
                      <FaLinkedin
                        className="block  lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent "
                        size={30}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/mait_csi_innowave/"
                      className="cursor-pointer hover:text-red-700"
                    >
                      <FaInstagram
                        className="block  lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent"
                        size={30}
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@CSI-Innowave"
                      className="cursor-pointer hover:text-red-700"
                    >
                      <FaYoutube
                        className="block  lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:text-red-700 lg:hover:bg-transparent "
                        size={30}
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
