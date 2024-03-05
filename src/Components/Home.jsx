import React from "react";
import SparklesPreview from "../HomePage/hero/Hero2";
import Aboutus from "../HomePage/aboutUs/Aboutus";
import Footer from "../HomePage/footer/Footer";
import Scroller from "./Scroller.jsx";
import { motion } from "framer-motion";
import Metaspace from "../HomePage/sponsors/Metaspace.jsx";

const Home = () => {
  return (
    <motion.div
      className="bg-white font-adam"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      < SparklesPreview />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Aboutus />
        <Scroller />
        <Metaspace />
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Home;
