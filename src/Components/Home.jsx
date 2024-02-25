import React from "react";
import Hero from "../HomePage/hero/Hero";
import Aboutus from "../HomePage/aboutUs/Aboutus";
import Footer from "../HomePage/footer/Footer";
import Scroller from "./Scroller.jsx";
const Home = () => {
  return (
    <div className="bg-[#070F2B]">
      <Hero />
      <Aboutus />
      <Scroller />
      <Footer />
    </div>
  );
};

export default Home;
