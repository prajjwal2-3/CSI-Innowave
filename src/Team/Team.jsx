import { motion } from "framer-motion";
import { BackgroundGradient } from "../Components/ui/background-gradient";

const Team = () => {
  const variants = {
    initial: {
      opacity: 0.8,
      scale: 0.95,
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-black w-screen from-blue-500 to-purple-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black  w-screen from-blue-500 to-purple-500">
        <motion.section
          className="text-center py-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="text-center py-5">
            <h1 className="text-white text-5xl font-bold">Our Team</h1>
            <p className="text-white"></p>
          </section>
        </motion.section>

        <motion.div
          className="text-center mx-10 md:mx-auto w-auto md:w-[25%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="card rounded-md bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="card rounded-md bg-white"
              variants={variants}
              whileHover="hover"
            >
              <div className="text-center mx-10 md:mx-auto w-full md:w-[100%]">
                <div className="card rounded-md bg-white">
                  <img
                    src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708853769/CSI/team/av7y7mtfogtrdsdzaier.jpg"
                    alt="Vinay Kumar Saini"
                    className="card-image p-10 rounded-full"
                  />
                  <p className="text-black font-serif font-bold text-2xl">
                    Dr.Vinay Kumar Saini
                  </p>
                  <p className="text-red-800 text-xl font-semibold font-serif">
                    Faculty Coordinator @ CSI-Innowave <br /> Head of Department
                    (AI & DS)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.section
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <section className="flex justify-center items-center">
            <div className="flex flex-col m-10 md:grid lg:grid-cols-4 md:grid-cols-2 gap-4 font-semibold font-serif">
              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708519754/CSI/team/zh8spleoos4ug9cd9c8k.png"
                      alt="Saksham Jain"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Saksham Jain
                    </p>
                    <p className="text-red-800 text-xl">Chairperson</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708519755/CSI/team/unomztytjlxr9zq6f30i.png"
                      alt="Vidhi Jain"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Vidhi Jain
                    </p>
                    <p className="text-red-800 text-xl">Vice-Chairperson</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708445514/Portfolio/lhemkdewetpm9yomtvnp.png"
                      alt="Yash Gupta"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Yash Gupta
                    </p>
                    <p className="text-red-800 text-xl">Technical Head</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708520699/CSI/team/yy8yibctbrlqhlivy3g3.png"
                      alt="Prateek Agarwal"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Prateek Agarwal
                    </p>
                    <p className="text-red-800 text-xl">R & D Head</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521197/CSI/team/shbwpfk8nxqzoz8grgr5.png"
                      alt="Saksham Agarwal"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Saksham Agarwal
                    </p>
                    <p className="text-red-800 text-xl">Content Head</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521199/CSI/team/yjeminakwecddvjbogpn.png"
                      alt="Aryan Goyal"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Aryan Goyal
                    </p>
                    <p className="text-red-800 text-xl">
                      Public Relations Head
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521197/CSI/team/nvo4p52dgjhkiwhdjeby.png"
                      alt="Vibhor Gupta"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Vibhor Gupta
                    </p>
                    <p className="text-red-800 text-xl">
                      Event Management Head
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md bg-white"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-white">
                    <img
                      src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521197/CSI/team/uri9pcvpu9vbbn1xcrp8.png"
                      alt="Varun Gautam"
                      className="card-image p-10"
                    />
                    <p className="text-black font-serif font-bold text-2xl">
                      Varun Gautam
                    </p>
                    <p className="text-red-800 text-xl">Photography Head</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.section>

        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto text-xl font-semibold bg-white p-1">
              <h2 className="text-red-800 font-serif font-bold text-4xl mb-1">
                Technical Executives
              </h2>
              <p className="text-black">Joyal Jijo</p>
              <p className="text-black">Vrishank Sharma</p>
              <p className="text-black">Naman Jain</p>
              <p className="text-black">Devesh Tuteja</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-white p-1">
              <h2 className="text-red-800 font-serif font-bold text-4xl mb-1">
                Research and Development Executives
              </h2>
              <p className="text-black">Mridul </p>
              <p className="text-black">Ravi Kumar</p>
              <p className="text-black">Nalin Khanna </p>
              <p className="text-black">Vansh Maheshwari </p>
              <p className="text-black">Pratham Tyagi</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-white p-1">
              <h2 className="text-red-800 font-serif font-bold text-4xl mb-1">
                Public Relations Executives
              </h2>
              <p className="text-black">Naman Mangla</p>
              <p className="text-black">MD Azam Siddiqui</p>
              <p className="text-black">Itisha</p>
              <p className="text-black">Moksh Gupta</p>
              <p className="text-black">Tanishq Sethi</p>
              <p className="text-black">Dhruv Goel</p>
              <p className="text-black">Anshika Chaubey</p>
              <p className="text-black">Mukund Aggarwal</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-white p-1">
              <h2 className="text-red-800 font-serif font-bold text-4xl mb-1">
                Photography Executives
              </h2>
              <p className="text-black">Manik gulati</p>
              <p className="text-black">Mayank sharma</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-white p-1">
              <h2 className="text-red-800 font-serif font-bold text-4xl mb-1">
                Event Management Executives
              </h2>
              <p className="text-black">Tinish</p>
              <p className="text-black">Samya Goel</p>
              <p className="text-black">Naveen Verma</p>
              <p className="text-black">Shashwat Shankar</p>
              <p className="text-black">Lakshay Sharma </p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-white p-1">
              <h2 className="text-red-800 font-serif font-bold text-4xl mb-1">
                Content Executives
              </h2>
              <p className="text-black">Sarthak Rawat</p>
              <p className="text-black">Aryan Dutta</p>
              <p className="text-black">Yash Phalaswal</p>
              <p className="text-black">Dev Aggarwal</p>
              <p className="text-black">Ashish jain</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-white">
              <h2 className="text-red-800 font-serif font-bold text-4xl">
                Coordinators
              </h2>
              <p className="text-black">Parth Goel</p>
              <p className="text-black">Vansh Singla</p>
              <p className="text-black">Radhika Garg</p>
              <p className="text-black">Jitendra Kumar Singh</p>
              <p className="text-black">Nikhil Hatwal</p>
              <p className="text-black">Muskan</p>
              <p className="text-black">Komal</p>
              <p className="text-black">Vishank Bhardwaj</p>
              <p className="text-black">Parthsaarthie Sharma</p>

              <p className="text-black">Anuj Kumar</p>
              <p className="text-black">Ayush Sharma</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Team;
