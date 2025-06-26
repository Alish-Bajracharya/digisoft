import { motion } from "framer-motion";
import { Search, Heart, MonitorSmartphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Search className="w-8 h-8 text-gray-400" />,
    title: "Discovery & Strategy",
    desc: "Lorem ipsum dolor sit amet, gravida nonna maecenas veritatis vestum.",
  },
  {
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    title: "User Retargeting",
    desc: "Lorem ipsum dolor sit amet, gravida nonna maecenas veritatis vestum.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-gray-400" />,
    title: "Web Design & Development",
    desc: "Lorem ipsum dolor sit amet, gravida nonna maecenas veritatis vestum.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-gray-400" />,
    title: "Performance Marketing",
    desc: "Lorem ipsum dolor sit amet, gravida nonna maecenas veritatis vestum.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white px-24 py-14 shadow-lg"
        >
          <p className="text-xs text-blue-600 font-semibold tracking-widest uppercase py-4">
            Services
          </p>
          <h2 className="text-2xl md:text-4xl font-normal py-4 mb-6 text-gray-700">
            Apps and end devices <br /> that suit your needs
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum 
            sociis natoque.
          </p>
          <a
            href="#"
            className="text-xs uppercase font-medium tracking-wide text-gray-700 hover:text-gray-500"
          >
            See in details
          </a>
        </motion.div>

        {/* Right Grid */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 py-5 gap-10"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col space-y-2 py-5">
              {service.icon}
              <h3 className="text-gray-700 font-normal text-lg py-3">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-10">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
