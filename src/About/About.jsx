function About() {
  return (
    <>
      {/* Main Content Container */}
      <div className="flex-col items-center justify-center w-screen md:px-40">
        {/* Section: About CSI */}
        <div className="p-1 m-5 border-y-2 border-black flex mx-auto items-center justify-center">
          <h1 className="text-center font-bold text-7xl">ABOUT CSI</h1>
        </div>
        <div className="flex-col space-y-7 text-xl">
          {/* Subsection: Introduction to CSI */}
          <div className="mt-5">
            <p>
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
            <p>
              CSI envisions a future where innovation, education, and
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              sustainable practices converge to elevate India's trajectory
              towards progress.
            </p>
          </div>
          {/* Subsection: Mission */}
          <div>
            <h3 className="font-bold underline mb-1.5">MISSION</h3>
            <p>
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
          <div>
            <h3 className="font-bold underline mb-1.5">OBJECTIVES</h3>
            <p>
              To cultivate students’ interest in the field of management or
              commerce in a convivial environment, without the pressure of being
              graded.
            </p>
            <ul className="list-disc space-y-2 ml-7">
              <li>
                <b>Formation of Collaborative Networks:</b> Through sustained
                partnerships with renowned experts and stakeholders across
                diverse fields, our society is committed to fostering a
                collaborative environment.
              </li>
              <li>
                <b>Creation of an Inclusive Nexus:</b> The envisioned platform
                is designed to serve as a nexus, seemingly integrating
                individuals and communities. An inclusive approach will be the
                cornerstone of our efforts to bridge gaps and foster a sense of
                unity.
              </li>
              <li>
                <b>Empowerment for Meaning Contributions:</b> The platform is
                dedicated to providing tools and resources that empower every
                participant to make meaningful contributions through educational
                initiatives, skill-building programs, and support structures.
              </li>
              <li>
                <b>Promotion of Innovation and Creativity:</b> By bringing
                together individuals with varied backgrounds, experiences, and
                viewpoints, the platform aims to spark creativity and unique
                problem-solving approaches, ultimately driving out Innovation.
              </li>
              <li>
                <b>Commitment to Sustainable Development:</b> Central to our
                mission is the creation of an environment that not only promotes
                innovation but also ensures sustainable progress.
              </li>
            </ul>
          </div>
        </div>

        {/* Section: About MAIT */}
        <div className="p-1 m-5 border-y-2 border-black flex mx-auto items-center justify-center">
          <h1 className="text-center font-bold text-7xl">ABOUT MAIT</h1>
        </div>
        <div>
          {/* Subsection: MAIT Logo and Background Color */}
          <div className="p-3.5 flex justify-center bg-[#012340]">
            <img
              className="h-40 bg-center"
              src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708518244/CSI%20Website/mtyfjhl34ypuuywe2nxw.png"
              alt=""
            />
          </div>
          {/* Subsection: Introduction to MAIT */}
          <div className="py-3">
            Maharaja Agrasen Institute of Technology was established in 1999 by
            Maharaja Agrasen Technical Education Society promoted by a group of
            well-known Industrialists, Businessman, Professionals, and
            Philanthropists with an aim to promote quality education in the
            field of Technology and Management. Since then, MAIT has grown from
            strength to strength to emerge as one of the top technical
            institutes among the private Institutes and has been constantly
            ranked amongst the top engineering Institutes by DATAQUEST.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
