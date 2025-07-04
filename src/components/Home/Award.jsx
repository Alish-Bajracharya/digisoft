import { motion } from "framer-motion";
import cust1 from "../../assets/customers/logo1.png";
import cust2 from "../../assets/customers/logo2.png";
import cust3 from "../../assets/customers/logo3.jpg";
import cust4 from "../../assets/customers/logo4.png";

const logos = [
  { src: cust4, alt: "Yechu", path: "https://hotelyechu.com.np" },
  { src: cust1, alt: "Yogdan", path: "https://yogdanconsumer.coop.np/" },
  { src: cust2, alt: "Cwin", path: "https://cwin.com.np/" },
  { src: cust3, alt: "Shikali", path: "https://sikalinewa.com.np" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Awards = () => {
  return (
    <div className="bg-white py-20 text-center px-4 sm:px-10 md:px-20 lg:px-40">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-blue-500 uppercase tracking-widest text-sm py-5">
          Press & Awards
        </p>
        <h2 className="text-4xl font-sans text-gray-800 mt-2 mb-10">
          Award-Winning Digital Solutions
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed px-5 mb-20">
          Recognized for our commitment to innovation, design, and reliability - we’re proud to be the trusted tech partner for leading businesses and organizations. Explore the brands that believe in our work.
        </p>
      </motion.div>

      {/* Animated Logo Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-20 sm:gap-28 md:gap-36 mb-10 grayscale hover:grayscale-0 transition duration-300"
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
  );
};

export default Awards;
