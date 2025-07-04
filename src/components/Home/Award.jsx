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

const Awards = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-blue-500 uppercase tracking-widest text-xs sm:text-sm py-3">
          Press & Awards
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-gray-800 mt-2 mb-6">
          Award-Winning Digital Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed px-2 sm:px-5 mb-12">
          Recognized for our commitment to innovation, design, and reliability — we’re proud to be the trusted tech partner for leading businesses and organizations. Explore the brands that believe in our work.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center items-center grayscale hover:grayscale-0 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {logos.map((logo, index) =>
          logo.path ? (
            <a
              key={index}
              href={logo.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 sm:h-12 md:h-14 object-contain"
              />
            </a>
          ) : (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-12 md:h-14 object-contain"
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default Awards;
