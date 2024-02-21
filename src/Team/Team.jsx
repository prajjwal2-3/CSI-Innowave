import React from "react";

const Team = () => {
  return (
    <div className="bg-black  w-screen from-blue-500 to-purple-500">
      <section className="text-center py-5">
        <h1 className="text-white text-4xl font-bold">Our Team</h1>
        <p className="text-white"></p>
      </section>
      <section className="flex justify-center items-center">
        <div className="m-5 grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708519754/CSI/team/zh8spleoos4ug9cd9c8k.png"
                alt="Saksham Jain"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Saksham Jain
              </p>
              <p className="text-black">Chairperson</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708519755/CSI/team/unomztytjlxr9zq6f30i.png"
                alt="Vidhi Jain"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Vidhi Jain
              </p>
              <p className="text-black">Vice-Chairperson</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708445514/Portfolio/lhemkdewetpm9yomtvnp.png"
                alt="Yash Gupta"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Yash Gupta
              </p>
              <p className="text-black">Technical Head</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708520699/CSI/team/yy8yibctbrlqhlivy3g3.png"
                alt="Prateek Agarwal"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Prateek Agarwal
              </p>
              <p className="text-black">Research & Development Head</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521197/CSI/team/shbwpfk8nxqzoz8grgr5.png"
                alt="Saksham Agarwal"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Saksham Agarwal
              </p>
              <p className="text-black">Content Head</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521199/CSI/team/yjeminakwecddvjbogpn.png"
                alt="Aryan Goyal"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Aryan Goyal
              </p>
              <p className="text-black">Public Relations Head</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521197/CSI/team/nvo4p52dgjhkiwhdjeby.png"
                alt="Vibhor Gupta"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Vibhor Gupta
              </p>
              <p className="text-black">Event Management Head</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card rounded-md bg-white">
              <img
                src="https://res.cloudinary.com/dljzvv5dh/image/upload/v1708521197/CSI/team/uri9pcvpu9vbbn1xcrp8.png"
                alt="Varun Gautam"
                className="card-image p-10"
              />
              <p className="text-black font-serif font-bold text-2xl">
                Varun Gautam
              </p>
              <p className="text-black">Photography Head</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
