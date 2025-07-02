import { motion } from "framer-motion";
import Img1 from "../../assets/images/company-header-e22775c7.webp";
import Img2 from "../../assets/images/services-header.webp";

const About = () => {
  return (
    <div className="bg-[#f4f5f7] py-20 px-4 md:px-10 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* First Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <img
            src={Img1}
            alt="Our Story"
            className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover shadow-sm"
          />

          <div className="mt-6 text-gray-800">
            <h3 className="text-lg font-thin mb-2">Our Story</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Founded with a vision to empower businesses through technology, Digisoft Developers started as a small team of passionate tech enthusiasts. Over the years, we’ve grown into a dynamic IT company delivering full-scale digital solutions across Nepal and beyond. Our journey is rooted in innovation, client satisfaction, and a drive to solve real-world problems with creative technology.
            </p>
          </div>
        </motion.div>

        {/* Second Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col"
        >
          <img
            src={Img2}
            alt="What we do"
            className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover shadow-sm"
          />

          <div className="mt-6 text-gray-800">
            <h3 className="text-lg font-thin mb-2">What we do</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              We offer a wide range of IT services including web development, software solutions, UI/UX design, cloud hosting, and digital marketing. Whether you're a startup needing an online presence or a company looking for enterprise-level tech infrastructure, we craft tailored solutions that drive results. We blend strategy, creativity, and technology to deliver experiences that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
