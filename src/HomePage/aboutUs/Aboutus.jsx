import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Aboutus = () => {
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
    <section ref={aboutRef} className="py-12 bg-white sm:py-16 lg:py-20">
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
                    <section className="text-center py-5">
                      <h1 className="text-black text-5xl font-bold">
                        About us
                      </h1>
                      <p className="text-white"></p>
                    </section>
                  </motion.div>
                </motion.section>

                <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
                  Welcome to CSI, one of the oldest and most prestigious
                  societies at Maharaja Agrasen Institute of Technology, started
                  in the year 2009. This society is also a proud member of the
                  largest body of computer professionals in India. It is the
                  place where technology and society merge to shape the future.
                  In a connected world, innovation and human connection combine
                  to fuel growth and transform lives. Join us as we explore the
                  dynamic landscape where technological advancements and social
                  needs meet to build a future that is more connected,
                  sustainable, and inclusive than ever before. Discover the
                  newest concepts, discussions, and resolutions encouraging
                  positive change at the intersection of technology and society
                  by exploring our platform.
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
                  className="md:p-8 lg:p-14 text-gray-900 duration-300 hover:text-white hover:bg-black "
                >
                  <h3 className="mt-12 text-5xl font-bold  hover:inherit font-pj">
                    {counts.members}+
                  </h3>
                  <p className="mt-5 text-lg  font-pj uppercase">Members</p>
                </motion.div>
                <motion.div
                  key="collaborations"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14 md:border-l md:border-gray-200 text-gray-900 duration-300 hover:text-white hover:bg-black"
                >
                  <h3 className="mt-12 text-5xl font-bold font-pj">
                    {counts.collaborations}+
                  </h3>
                  <p className="mt-5 text-lg font-pj uppercase">
                    Collaborations
                  </p>
                </motion.div>
                <motion.div
                  key="yearsOfCSI"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14 md:border-t text-gray-900 duration-300 hover:text-white hover:bg-black md:border-gray-200"
                >
                  <h3 className="mt-12 text-5xl font-bold  font-pj">
                    {counts.yearsOfCSI}
                  </h3>
                  <p className="mt-5 text-lg  font-pj uppercase">
                    Years of CSI
                  </p>
                </motion.div>
                <motion.div
                  key="participations"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="md:p-8 lg:p-14 md:border-l text-gray-900 duration-300 hover:text-white hover:bg-black md:border-gray-200 md:border-t"
                >
                  <h3 className="mt-12 text-5xl font-bold  font-pj">
                    {counts.participations}+
                  </h3>
                  <p className="mt-5 text-lg font-pj uppercase">
                    Participations
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
