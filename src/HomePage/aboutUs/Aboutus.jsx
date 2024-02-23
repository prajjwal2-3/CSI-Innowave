const Aboutus = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            About Us
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Welcome to CSI, one of the oldest and most prestigious societies at
            Maharaja Agrasen Institute of Technology, started in the year 2009.
            This society is also a proud member of the largest body of computer
            professionals in India. It is the place where technology and society
            merge to shape the future. In a connected world, innovation and
            human connection combine to fuel growth and transform lives. Join us
            as we explore the dynamic landscape where technological advancements
            and social needs meet to build a future that is more connected,
            sustainable, and inclusive than ever before. Discover the newest
            concepts, discussions, and resolutions encouraging positive change
            at the intersection of technology and society by exploring our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <h3 className="mt-12 text-5xl font-bold text-gray-900 font-pj">50+</h3>
            <p className="mt-5 text-lg text-gray-600 font-pj uppercase">Members</p>
          </div>
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <h3 className="mt-12 text-5xl font-bold text-gray-900 font-pj">50+</h3>
            <p className="mt-5 text-lg text-gray-600 font-pj uppercase">
              Collaborations
            </p>
          </div>
          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <h3 className="mt-12 text-5xl font-bold text-gray-900 font-pj">14</h3>
            <p className="mt-5 text-lg text-gray-600 font-pj uppercase">
              Years of CSI
            </p>
          </div>
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <h3 className="mt-12 text-5xl font-bold text-gray-900 font-pj">
              1000+
            </h3>
            <p className="mt-5 text-lg text-gray-600 font-pj uppercase">
              Participations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
