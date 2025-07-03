import React from "react";
import { motion } from "framer-motion";
import towerImage from "../../assets/images/company-header-e22775c7.webp";

const CompanyHero = () => {
  return (
    <section className="bg-[#e9edf1] relative w-full h-screen overflow-hidden font-worksans flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="uppercase text-xs text-gray-500 font-semibold tracking-widest mb-2"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-4xl font-light text-gray-800 mb-4"
        >
          Meet the Visionaries Behind Digisoft
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-600 text-xs px-40 md:text-sm leading-relaxed"
        >
          At Digisoft, our passionate team combines innovation, expertise, and dedication to deliver cutting-edge IT and digital marketing solutions that empower businesses worldwide.
        </motion.p>

      </div>

      {/* Right Side Image */}
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        src={towerImage}
        alt="Company Tower"
        className="absolute right-0 bottom-0 h-full object-contain hidden md:block"
      />
    </section>
  );
};

export default CompanyHero;
