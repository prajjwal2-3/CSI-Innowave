import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const HomeAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    collaborations: 0,
    yearsOfCSI: 0,
    participations: 0,
  });

  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounts((prevCounts) => ({
          members:
            prevCounts.members < 50
              ? prevCounts.members + 1
              : prevCounts.members,
          collaborations:
            prevCounts.collaborations < 50
              ? prevCounts.collaborations + 1
              : prevCounts.collaborations,
          yearsOfCSI:
            prevCounts.yearsOfCSI < 14
              ? prevCounts.yearsOfCSI + 1
              : prevCounts.yearsOfCSI,
          participations:
            prevCounts.participations < 1000
              ? prevCounts.participations + 10
              : prevCounts.participations,
        }));
      }, 60); // Adjust interval duration as needed

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="">
      <div className="" ref={aboutRef}></div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AnimatePresence>
          {isVisible && (
            <>
              <div className="text-center">
                <motion.section
                  className="text-center py-5"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    key="members"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="md:p-8 lg:p-14"
                  >
                    {/* <section className="text-center py-5">
                      <h1 className="text-black text-5xl font-bold">
                        About us
                      </h1>
                      <p className="text-white"></p>
                    </section> */}
                    <div className="bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent mt-10 relative text-center ">
                      About Us
                      {/* <div className="absolute inset-x-5 sm:inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" /> */}
                      {/* <div className="absolute inset-x-5 sm:inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" /> */}
                      <div className="absolute bg-gradient-to-r  from-transparent via-sky-500 to-transparent h-[5px] w-full mt-2 blur-sm" />
                      {/* <div className="absolute inset-x-16 sm:inset-x-38  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
                    </div>
                  </motion.div>
                </motion.section>

                <p className="mt-4  leading-7 text-[200,200,200] sm:mt-8 sm:text-2xl text-sm ">
                  The Computer Society of India (CSI) at <span className="bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">Maharaja Agrasen
                  Institute of Technology</span> is a prestigious student society
                  focused on the intersection of technology and society.
                  Established in 2009, it aims to explore advancements and
                  social needs to build a better future. Join them to discover
                  discussions and resolutions at the forefront of technology and
                  its impact on society.
                </p>
              </div>
            </>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24 round-lg">
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.div
                  key="members"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14 text-[200,200,200] duration-300 "
                >
                  <h3 className="mt-12 text-5xl font-bold  hover:inherit font-pj">
                    {counts.members}+
                  </h3>
                  <p className="mt-5 text-lg  font-pj uppercase bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">Members</p>
                </motion.div>
                <motion.div
                  key="collaborations"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14  text-[200,200,200] duration-300"
                >
                  <h3 className="mt-12 text-5xl font-bold font-pj">
                    {counts.collaborations}+
                  </h3>
                  <p className="mt-5 text-lg font-pj uppercase bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">
                    Collaborations
                  </p>
                </motion.div>
                <motion.div
                  key="yearsOfCSI"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14  text-[200,200,200] duration-300 "
                >
                  <h3 className="mt-12 text-5xl font-bold  font-pj">
                    {counts.yearsOfCSI}
                  </h3>
                  <p className="mt-5 text-lg  font-pj uppercase bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">
                    Years of CSI
                  </p>
                </motion.div>
                <motion.div
                  key="participations"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14  text-[200,200,200] duration-300 "
                >
                  <h3 className="mt-12 text-5xl font-bold  font-pj">
                    {counts.participations}+
                  </h3>
                  <p className="mt-5 text-lg font-pj uppercase bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent">
                    Participations
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
