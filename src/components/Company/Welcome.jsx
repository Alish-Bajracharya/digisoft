import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  const features = [
    {
      title: "Event Space",
      desc: "We provide a collaborative environment to host and organize IT workshops, tech meetups, and community events.",
    },
    {
      title: "24/7 Access",
      desc: "Our dedicated support and monitoring ensure round-the-clock service reliability and assistance.",
    },
    {
      title: "Coffee Bar",
      desc: "Fueling creativity with an in-house coffee bar where tech minds spark big ideas over great brews.",
    },
    {
      title: "30+ Happy Employees",
      desc: "Our team of passionate professionals brings creativity, innovation, and dedication to every project.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCollapse = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-20 font-worksans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-24 items-start">
        {/* Left Title */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-gray-900 leading-snug text-left">
            Welcome to <br /> Digisoft Developers
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-600 space-y-5 max-w-3xl">
            <p>
              At Digisoft Developers, we are more than just a tech company — we are your innovation partners. Our mission is to craft impactful digital experiences by blending strategy, design, and engineering. Whether it’s a custom website, digital campaign, or robust cloud solution, we build it with precision and purpose.
            </p>
            <p>
              From startups to enterprises, our agile team delivers scalable solutions tailored to each client's needs. We thrive on solving complex problems, turning ideas into reality, and helping businesses grow in a fast-evolving digital world.
            </p>
          </div>

          {/* Feature List */}
          <div className="mt-10 space-y-4">
            {features.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleCollapse(index)}
                  className="w-full flex justify-between items-center text-gray-900 text-base border-b border-gray-200 pb-2 focus:outline-none"
                >
                  <span>{item.title}</span>
                  <span
                    className={`text-lg font-light transition-transform duration-200 ${
                      openIndexes.includes(index) ? "rotate-180" : ""
                    }`}
                  >
                    {openIndexes.includes(index) ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndexes.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-sm overflow-hidden pt-2"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
