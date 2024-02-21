import React from "react";
import Hero from "../HomePage/hero/Hero";
import Aboutus from "../HomePage/aboutUs/Aboutus";
import Footer from "../HomePage/footer/Footer";
const Home = () => {
  return (
    <div className="bg-slate-700">
      <Hero />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default Home;
