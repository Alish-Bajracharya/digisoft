import React from "react";
import { motion } from "framer-motion";
import phoneImage from "../../assets/Home/Home.jpg"; 

const stats = [
  { value: "12", label: "Employees" },
  { value: "$10M", label: "Invested" },
  { value: "92%", label: "Success Rate" },
];

const Careers = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={phoneImage}
            alt="Mobile product in hand"
            className="w-full max-w-xs md:max-w-md"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center justify-center md:text-left"
        >
          <p className="text-xs text-blue-600 font-medium justify-center text-center tracking-widest uppercase mb-4">
            Careers
          </p>
          <h2 className="text-3xl md:text-4xl text-gray-700 justify-center text-center font-sans py-4 mb-6">
            Let’s build great things together
          </h2>
          <p className="text-gray-500 justify-between text-center mb-10 text-sm md:text-sm max-w-xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center  border-gray-200 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="border-r-2">
                <div className="text-2xl md:text-5xl  text-gray-600">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest text-blue-600 font-medium uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
