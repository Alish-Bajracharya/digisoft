import { motion } from "framer-motion";
import Img from "../../assets/images/services-header.webp";

const Hero = () => {
  return (
    <div className="bg-white py-20 mx-auto px-40 md:px-40 justify-center text-center">
      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={Img} alt="Tablet" className="w-[1000px] " />
      </motion.div>

        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-sans text-gray-800 mt-2 py-10 ">Enter into the world of Horizon</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor.
            </p>
        </motion.div>

        <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 mx-auto px-4 md:px-20 text-gray-600"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <div className="text-left mx-auto px-4 md:px-6">
            <h3 className="font-semibold mb-5">Our Experience</h3>
            <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            </p>
            </div>
            <div className="mx-auto px-4 md:px-16 text-left">
            <h3 className="font-semibold mb-5">Customer Friendly</h3>
            <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea ligula eget dolor.
            </p>
            </div>
        </motion.div>

        
        
    </div>
    );
};
export default Hero;