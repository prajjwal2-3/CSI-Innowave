import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function About() {
  const controls = useAnimation();

  useEffect(() => {
    // Animation code here
    controls.start({ opacity: 1, y: 0, transition: { staggerChildren: 0.2 } });
  }, []);

  return (
    <>
      {/* Main Content Container */}
      <motion.div className="flex-col items-center justify-center w-screen md:px-40">
        {/* Section: About CSI */}
        <motion.div
          className="p-1 m-5 border-y-2 border-black flex mx-auto items-center justify-center animate"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className="text-center font-bold text-5xl">ABOUT CSI</h1>
        </motion.div>

        <motion.div
          className="flex-col mx-10 space-y-7 text-xl animate"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <div className="mt-5">
            <p className="text-justify">
              Established in 2009, CSI – The Computer Science Society of India
              chapter MAIT in collaboration with Innowave comprises highly
              enthusiastic students with a great zeal to learn and execute new
              skills & ideas. The society provides an open floor for both
              students and teachers to discuss and plan out innovative concepts
              for the advancement of business acumen. By conducting various
              activities and interactive sessions, the society emphasizes actual
              business practices and aims at fostering critical thinking and
              problem-solving abilities.
            </p>
          </div>
          {/* Subsection: Vision */}
          <div>
            <h3 className="font-bold underline mb-1.5">VISION</h3>
            <p className="text-justify">
              CSI envisions a future where innovation, education, and
              sustainable practices converge to elevate India's trajectory
              towards progress.
            </p>
          </div>
          {/* Subsection: Mission */}
          <div>
            <h3 className="font-bold underline mb-1.5">MISSION</h3>
            <p className="text-justify">
              Our mission revolves around orchestrating a myriad of initiatives:
              from comprehensive workshops and insightful seminars to dynamic
              awareness campaigns. These endeavors are meticulously designed to
              champion skill development, foster entrepreneurial spirit, and
              champion environmental conservation. Our dedication to these
              causes stems from a fervent belief in their capacity to catalyze
              national growth and prosperity.
            </p>
          </div>
          {/* Subsection: Objectives */}
          <motion.div>
            <h3 className="font-bold underline mb-1.5">OBJECTIVES</h3>
            <p className="text-justify">
              To cultivate students’ interest in the field of management or
              commerce in a convivial environment, without the pressure of being
              graded.
            </p>
            <ul className="list-disc space-y-2 ml-7">
              <li className="text-justify">
                <b>Formation of Collaborative Networks:</b> Through sustained
                partnerships with renowned experts and stakeholders across
                diverse fields, our society is committed to fostering a
                collaborative environment.
              </li>
              <li className="text-justify">
                <b>Creation of an Inclusive Nexus:</b> The envisioned platform
                is designed to serve as a nexus, seemingly integrating
                individuals and communities. An inclusive approach will be the
                cornerstone of our efforts to bridge gaps and foster a sense of
                unity.
              </li>
              <li className="text-justify">
                <b>Empowerment for Meaning Contributions:</b> The platform is
                dedicated to providing tools and resources that empower every
                participant to make meaningful contributions through educational
                initiatives, skill-building programs, and support structures.
              </li>
              <li className="text-justify">
                <b>Promotion of Innovation and Creativity:</b> By bringing
                together individuals with varied backgrounds, experiences, and
                viewpoints, the platform aims to spark creativity and unique
                problem-solving approaches, ultimately driving out Innovation.
              </li>
              <li className="text-justify">
                <b>Commitment to Sustainable Development:</b> Central to our
                mission is the creation of an environment that not only promotes
                innovation but also ensures sustainable progress.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Section: About MAIT */}
        <div className="p-1 m-5 border-y-2 border-black flex mx-10 items-center justify-center">
          <h1 className="text-center font-bold text-5xl mt-5">ABOUT MATES</h1>
        </div>
        <div className="flex flex-col mx-10 items-center sm:flex-row">
          {/* Subsection: MAIT Logo and Background Color */}
          <div className="w-full">
            <img
              className="h-40 mx-auto bg-center"
              src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708765885/CSI%20Website/sys2r5v8fyzk2elos9qn.png"
              alt="MTES Logo"
            />
          </div>
          {/* Subsection: Introduction to MAIT */}
          <div className="py-3 mx-5 text-justify">
            Maharaja Agrasen Technical Education Society (MATES) is a charitable
            trust comprising of a group of well known Educationists,
            Industrialists, Businessmen, Professionals and Philanthropists with
            an aim to promote quality education in the field of Technology,
            Management, Law, Pharmacy and Health Services to shape the human
            society for a better future. With its constant growth and consistent
            efforts, MATES has been able to keep up its commitment in serving
            the society and its people.
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
