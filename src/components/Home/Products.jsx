import { motion } from "framer-motion";
import tabletImg from "../../assets/Home/1.png";

const Products = () => {
  return (
    <div className="bg-gray-100 py-20 text-center px-40">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      <p className="text-blue-500 uppercase tracking-widest text-sm py-5">
        Products
      </p>
      <h2 className="text-4xl font-sans text-gray-800 mt-2 mb-10">
        Let your mind explore
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed px-5">
        From intuitive business tools to scalable platforms, we create digital products that are built to perform. Discover innovative solutions that simplify processes, engage users, and grow your business with ease.
      </p>

      </motion.div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={tabletImg} alt="Tablet" className="w-[600px] " />
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 mx-auto px-4 md:px-20 text-gray-600"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
      <div className="mx-auto px-4 md:px-6">
        <h3 className="font-semibold mb-5">Easy to Use</h3>
        <p className="text-sm text-gray-500">
          Our products are designed with simplicity in mind - no steep learning curves, just smooth and intuitive experiences.
        </p>
      </div>
      <div className="mx-auto px-4 md:px-6">
        <h3 className="font-semibold mb-5">Customer-Friendly</h3>
        <p className="text-sm text-gray-600">
          Built to prioritize user satisfaction, our tools adapt to real-world needs and deliver consistent value for your clients.
        </p>
      </div>
      <div className="mx-auto px-4 md:px-6">
        <h3 className="font-semibold mb-5">Smart Features</h3>
        <p className="text-sm text-gray-600">
          Enjoy automation, analytics, and integration - clever functionality that saves time and accelerates growth.
        </p>
      </div>
      </motion.div>
    </div>
  );
};

export default Products;
