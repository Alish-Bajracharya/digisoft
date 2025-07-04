import React from 'react';
import { motion } from 'framer-motion';
import cust1 from "../../assets/customers/logo1.png";
import cust2 from "../../assets/customers/logo2.png";
import cust3 from "../../assets/customers/logo3.jpg";
import cust4 from "../../assets/customers/logo4.png";

const logos = [
  { src: cust4, alt: 'Yechu', path: "https://hotelyechu.com.np" },
  { src: cust1, alt: 'Yogdan', path: "https://yogdanconsumer.coop.np/" },
  { src: cust2, alt: 'Cwin', path: "https://cwin.com.np/" },
  { src: cust3, alt: 'Shikali', path: "https://sikalinewa.com.np" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Banner = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        
        {/* Left: Title */}
        <div className="w-full md:w-auto">
          <p className="text-sm mt-6 font-medium tracking-widest text-blue-600 uppercase text-center md:text-left">
            Our Customers
          </p>
        </div>

        {/* Right: Logos with animation */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-20 sm:gap-28 md:gap-40 opacity-100 grayscale hover:grayscale-0 transition duration-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.div key={index} variants={itemVariants}>
              {logo.path ? (
                <a
                  href={logo.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-14 object-contain"
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 object-contain"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
