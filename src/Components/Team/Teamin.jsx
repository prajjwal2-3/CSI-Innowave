import { motion } from "framer-motion";
const Teamin = () => {
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
      className=" w-screen from-blue-500 to-purple-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="  w-full from-blue-500 to-purple-500">
        <motion.div
          className="text-center mx-10 py-10 md:mx-auto w-auto md:w-[25%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="card rounded-md "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="card rounded-md w-[72%] md:w-full bg-transparent mx-auto"
              variants={variants}
              whileHover="hover"
            >
              <div className="text-center mx-auto md:mx-auto  md:w-[100%]">
                <div className="card rounded-md bg-transparent">
                  <img
                    src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131195/csi/team/k7in6h3xqjfzqr9dwcma.jpg"
                    alt="Dr.Nand Kishore Garg"
                    className="card-image p-2 w-[367.5px] mx-auto rounded-full"
                  />
                  <p className="text-white font-adam font-bold text-2xl">
                    Dr.Nand Kishore Garg
                  </p>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2 font-semibold font-adam">
                    Chief Patron
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.section
          className="flex mt-0 md:mt-10  justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <section className="flex justify-center items-center">
            <div className="flex flex-col mx-10 mb-10 md:grid lg:grid-cols-4 md:grid-cols-2 gap-10 font-semibold font-adam">
              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md w-full bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131248/csi/team/llgn4s6xwckilkumschq.png"
                      alt="Prof. Neelam Sharma"
                      className="card-image mx-auto w-[367.5px] p-2 "
                    />
                    <p className="text-white font-adam font-bold text-2xl">
                      Prof. Neelam Sharma
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl  pb-2">Patron</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md font-adam bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131288/csi/team/ov4sqvmtmkqejhvyufag.png"
                      alt="SS deshwal"
                      className="card-image w-[367.5px] p-2 mx-auto rounded-full"
                    />
                    <p className="text-white font-adam font-bold text-2xl">
                      Prof. S.S. Deswal
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2 ">Patron</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md font-adam bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/bttwzako6b0qhvhm2xmi.jpg"
                      alt="Sachin Gupta"
                      className="card-image p-2 rounded-full mx-auto w-[367.5px]"
                    />
                    <p className="text-white font-adam font-bold text-2xl">
                      Prof. Sachin Gupta
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">Patron</p>
                  </div>
                </motion.div>
              </div>
              <div className="text-center">
                <motion.div
                  className="card  rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card font-adam rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/zbnwrkews8ahtnavdjcj.jpg"
                      alt="Vinay Kumar Saini "
                      className="card-image mx-auto rounded-full p-2"
                    />
                    <p className="text-white  font-bold text-2xl">
                      Dr.Vinay Kumar Saini
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">
                      Faculty Coordinator
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.section>

        <motion.section
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <section className="flex justify-center items-center">
            <div className="flex flex-col mb-10 mx-10 md:grid lg:grid-cols-4 md:grid-cols-2 gap-10 font-semibold font-adam">
              <div className="text-center">
                <motion.div
                  className="card w-[72%] md:w-full mx-auto rounded-md bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card font-adam rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131377/csi/team/xw4vm473raaflklhkv06.png"
                      alt="kpa"
                      className="card-image p-2"
                    />
                    <p className="text-white  font-bold text-2xl">
                      KPA Dharmanshu Mahajan
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">Advisor</p>
                  </div>
                </motion.div>
              </div>
              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131504/csi/team/ao0whsaz8j8hlb0bmxcz.png"
                      alt="Saksham Jain"
                      className="card-image p-2"
                    />
                    <p className="text-white font-adam font-bold text-2xl">
                      Saksham Jain
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">Chairperson</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md font-adam bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131505/csi/team/v85vjbwy280setlpvtip.png"
                      alt="Vidhi Jain"
                      className="card-image p-2"
                    />
                    <p className="text-white font-adam font-bold text-2xl">
                      Vidhi Jain
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">
                      Vice-Chairperson
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card rounded-md font-adam bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131609/csi/team/rauaq8effx32t1iuca18.png"
                      alt="Yash Gupta"
                      className="card-image p-2"
                    />
                    <p className="text-white font-adam font-bold text-2xl">
                      Yash Gupta
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">Technical Head</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card  rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card font-adam rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131423/csi/team/vwzturjx6lqdkeczki2f.png"
                      alt="Saksham Agarwal"
                      className="card-image p-2"
                    />
                    <p className="text-white  font-bold text-2xl">
                      Saksham Agarwal
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">Content Head</p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto font-adam bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card font-adam rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131434/csi/team/vo0arwv8tqqebihmdira.png"
                      alt="Aryan Goyal"
                      className="card-image p-2"
                    />
                    <p className="text-white  font-bold text-2xl">
                      Aryan Goyal
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">
                      Public Relations Head
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card font-adam rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131503/csi/team/t5ijtuofzna2cetpz5kx.png"
                      alt="Vibhor Gupta"
                      className="card-image p-2"
                    />
                    <p className="text-white font-bold text-2xl">
                      Vibhor Gupta
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">
                      Event Management Head
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  className="card rounded-md w-[72%] md:w-full mx-auto bg-transparent"
                  variants={variants}
                  whileHover="hover"
                >
                  <div className="card font-adam rounded-md bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131503/csi/team/mdszyypnnldwxwnnezhf.png"
                      alt="Varun Gautam"
                      className="card-image p-2"
                    />
                    <p className="text-white  font-bold text-2xl">
                      Varun Gautam
                    </p>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 text-xl pb-2">
                      Photography Head
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.section>

        <section>
          <div className="text-center mx-10 lg:mx-0">
            <div className="card rounded-md w-11/12 font-adam mx-auto text-xl font-semibold bg-transparent p-1">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 font-bold text-4xl mb-1">
                Technical Executives
              </h2>
              <p className="text-white">Joyal Jijo</p>
              <p className="text-white">Vrishank Sharma</p>
              <p className="text-white">Devesh Tuteja</p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center  mx-10 lg:mx-0 font-adam">
            <div className="card rounded-md w-11/12 mx-auto my-5 text-xl font-semibold bg-transparent p-1">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 font-bold text-4xl mb-1">
                Public Relations Executives
              </h2>
              <p className="text-white">Naman Mangla</p>
              <p className="text-white">MD Azam Siddiqui</p>

              <p className="text-white">Moksh Gupta</p>
              <p className="text-white">Tanishq Sethi</p>
              <p className="text-white">Dhruv Goel</p>
              <p className="text-white">Anshika Chaubey</p>
              <p className="text-white">Mukund Aggarwal</p>
              <p className="text-white">Mridul </p>
              <p className="text-white">Ravi Kumar</p>
              <p className="text-white">Nalin Khanna </p>
              <p className="text-white">Vansh Maheshwari </p>
              <p className="text-white">Pratham Tyagi</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center  mx-10 lg:mx-0">
            <div className="card rounded-md font-adam w-11/12 mx-auto my-5 text-xl font-semibold bg-transparent p-1">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300  font-bold text-4xl mb-1">
                Photography Executives
              </h2>
              <p className="text-white">Manik gulati</p>
              <p className="text-white">Mayank sharma</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center  mx-10 lg:mx-0">
            <div className="card rounded-md font-adam w-11/12 mx-auto my-5 text-xl font-semibold bg-transparent p-1">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 font-bold text-4xl mb-1">
                Event Management Executives
              </h2>
              <p className="text-white">Tinish</p>
              <p className="text-white">Samya Goel</p>
              <p className="text-white">Naveen Verma</p>
              <p className="text-white">Shashwat Shankar</p>
              <p className="text-white">Lakshay Sharma </p>
              <p className="text-white">Nikhil Hatwal</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center  mx-10 lg:mx-0">
            <div className="card rounded-md font-adam w-11/12 mx-auto my-5 text-xl font-semibold bg-transparent p-1">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 font-bold text-4xl mb-1">
                Content Executives
              </h2>
              <p className="text-white">Sarthak Rawat</p>
              <p className="text-white">Aryan Dutta</p>
              <p className="text-white">Yash Phalaswal</p>
              <p className="text-white">Ashish Jain</p>
              <p className="text-white">Jitendra Kumar Singh</p>
              <p className="text-white">Itisha</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center  mx-10 lg:mx-0">
            <div className="card rounded-md font-adam w-11/12 mx-auto my-5 text-xl font-semibold bg-transparent">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 font-bold text-4xl">Coordinators</h2>
              <p className="text-white">Parth Goel</p>

              <p className="text-white">Radhika Garg</p>

              <p className="text-white">Muskan</p>
              <p className="text-white">Komal</p>
              <p className="text-white">Vishank Bhardwaj</p>
              <p className="text-white">Parthsaarthie Sharma</p>

              <p className="text-white">Ayush Verma</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Teamin;
