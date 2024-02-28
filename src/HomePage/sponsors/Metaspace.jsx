import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Metaspace = () => {
  return (
    <div className="mx-10 my-15 ">
      <h2 className="text-3xl lg:text-5xl text-center font-bold">
        Our Sponsors
      </h2>
      <img
        src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131821/csi/sponsors/brqdtkwosdlivryndldm.jpg"
        className="mx-auto mt-0 lg:mt-5 w-1/2 md:1/3 lg:w-2/12"
      />
      <p className="hidden md:block">
        MetaSpace, the 3D decentralized metaverse, stands as a beacon of
        innovation and limitless potential in the digital landscape. Offering a
        diverse range of experiences, from immersive gaming to electrifying EDM
        nights and captivating shopping experiences, MetaSpace redefines the
        boundaries of virtual reality. As proud sponsors of CSI-INNOWAVE,
        MetaSpace champions groundbreaking initiatives and technological
        advancements that shape the future of digital innovation. This
        partnership signifies a commitment to pushing boundaries and fostering
        collaboration within the metaverse, where creativity and connectivity
        converge to create a world without limits.
      </p>
      <div className="flex justify-center items-center mt-3 gap-2 lg:mt-10">
        <p className="font-semibold text-xl text-center ">Their Contact:</p>
        <a
          href="https://www.linkedin.com/company/metaspace-metaverse/"
          className="cursor-pointer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/metaspace.metaverse?igsh=MXgzdjB0a3JudmlwYg=="
          className="cursor-pointer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Metaspace;
