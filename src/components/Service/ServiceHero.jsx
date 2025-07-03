import { motion } from "framer-motion";
import Img from "../../assets/images/services-header.webp";

const ServiceHero = () => {
  return (
    <div className="bg-white py-16 mt-2 font-worksans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={Img} alt="Tablet" className="w-full h-auto" />
        </motion.div>

        {/* Title & Description */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-700">
            Enter into the world of Digisoft
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Discover a full spectrum of IT services tailored to transform your digital presence. From idea to execution, Digisoft helps businesses build smarter, scale faster, and operate more efficiently in the modern tech landscape.
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Left Column */}
          <div>
            <h3 className="text-lg font-thin text-gray-800 mb-3">
              Our Experience
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              With years of hands-on experience, we’ve built solutions for startups, enterprises, and everything in between. Our team brings deep technical expertise and innovative thinking to every project we take on.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-thin text-gray-800 mb-3">
              Customer Friendly
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We prioritize your vision and success. Expect clear communication, dedicated support, and tailored solutions that genuinely solve problems - not just check boxes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHero;
