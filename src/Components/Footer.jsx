import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-12 mb-12 flex-row justify-between">
        <div className="flex flex-row space-x-8 mx-auto items-center justify-between">
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
      <hr className="border-gray-600" />
      <p className="w-full text-center my-12 text-gray-600">
        Copyright © 2024 CSI-Innowave
      </p>
    </div>
  );
};

export default Footer;
