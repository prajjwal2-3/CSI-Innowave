import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-slate-100">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                <img
                  className="h-15 w-60"
                  src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708503607/CSI%20Website/f1d6gk5mr0rkt6dse04q.png"
                  alt=""
                />
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="lg:hidden inline-flex items-center p-2 text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:w-auto`}
              id="mobile-menu-2"
            >
              <ul class="flex flex-col font-semibold mt-4 text-2xl lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    class="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    class="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    class="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    class="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    class="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    class="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black lg:hover:text-red-700 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
