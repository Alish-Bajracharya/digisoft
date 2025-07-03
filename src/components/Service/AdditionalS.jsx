import React from "react";
import { motion } from "framer-motion";
import phoneImage from "../../assets/Home/home1.jpg";

const AdditionalS = () => {
  return (
    <section className="py-20 bg-white text-center font-worksans">
      {/* Header Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 border-t-2 pt-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xs tracking-widest text-blue-600 font-medium uppercase py-5">
          Additions
        </p>
        <h2 className="text-3xl sm:text-4xl font-extralight py-2 text-gray-800">
          Advanced Services
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed text-sm sm:text-base">
          We go beyond the basics – offering advanced features that bring efficiency, insights, and a seamless experience to your digital ecosystem.
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Features */}
        <motion.div
          className="space-y-16 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-lg font-light text-gray-800 mb-2">User Profiles</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Create detailed user profiles with personalized dashboards, preferences, and activity tracking for smarter engagement.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light text-gray-800 mb-2">Statistics</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Access real-time analytics and insightful reports to monitor performance, trends, and business growth.
            </p>
          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={phoneImage}
            alt="Phone Mockup"
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </motion.div>

        {/* Right Features */}
        <motion.div
          className="space-y-16 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-lg font-light text-gray-800 mb-2">Organization</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Keep everything streamlined with smart data structuring, team roles, and automated workflows tailored to your needs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light text-gray-800 mb-2">Accessibility</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Built with inclusive design and responsive technology to ensure seamless access across all devices and users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalS;
