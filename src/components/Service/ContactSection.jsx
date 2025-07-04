import React from "react";
import { motion } from "framer-motion";
import map from "../../assets/images/nepalll.png";

const locations = [
  {
    title: "Nepal",
    address: "Ekantakuna, Lalitpur",
    phone: "+977-01-5453000",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20 text-center font-worksans">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl mx-auto mb-12 px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-thin text-gray-900"
        >
          Say Hello
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="h-0.5 w-8 bg-blue-500 mx-auto my-4"
        />
        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-600"
        >
          Have questions or want to start your project? Reach out to our team — we’re here to help you succeed.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-2 text-sm font-thin text-black bg-white rounded-full cursor-pointer shadow-md hover:text-blue-600 transition"
          variants={itemVariants}
        >
          Contact Us
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="flex justify-center"
      >
        <img
          src={map}
          alt="World Map Dots"
          className="max-w-full w-[90%] md:w-[80%] lg:w-[70%] xl:w-[850px] mx-auto"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="-mt-10 flex flex-col md:flex-row justify-center gap-10 text-center mb-6 px-4"
      >
        {locations.map((location, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-sm"
          >
            <h4 className="uppercase font-semibold tracking-wide text-gray-800 text-xs mb-1">
              {location.title}
            </h4>
            <p className="text-gray-600">{location.address}</p>
            <p className="text-gray-600 mt-1">{location.phone}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactSection;
