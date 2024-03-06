import React from "react";

const Sponser = () => {
  return (
    <div className="mt-10 flex justify-center flex-col items-center">
      <div className="  bg-gradient-to-r from-violet-800 to-indigo-300 bg-clip-text text-transparent relative">
        OUR SPONSERS
        {/* <div className="absolute inset-x-10 sm:inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" /> */}
        {/* <div className="absolute inset-x-10 sm:inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" /> */}
        <div className="absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm mt-2" />
        {/* <div className="absolute inset-x-28 sm:inset-x-48  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
      </div>

      <div className="">
        <img
          className="h-48 w-48 mt-5"
          src="https://res.cloudinary.com/dzkldv06d/image/upload/v1709489197/brqdtkwosdlivryndldm-removebg-preview_k8ewor.png"
          alt=""
        />
      </div>
      <div className="sm:text-2xl text-sm">
        <span className="bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">
          {" "}
          MetaSpace
        </span>
        , a leading decentralized metaverse platform, offers diverse experiences
        like gaming, events, and shopping, pushing the boundaries of virtual
        reality. As a sponsor of{" "}
        <span className="bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">
          CSI-INNOWAVE
        </span>
        , they aim to collaborate and foster innovation in the metaverse.
      </div>
    </div>
  );
};

export default Sponser;
