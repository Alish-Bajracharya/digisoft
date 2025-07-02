import { motion } from "framer-motion";
import { Search, Heart, MonitorSmartphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Search className="w-8 h-8 text-gray-400" />,
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals to craft tailored strategies that align with your vision and target audience.",
  },
  {
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    title: "User Retargeting",
    desc: "Boost conversions by re-engaging your audience with data-driven retargeting campaigns across web and social platforms.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-gray-400" />,
    title: "Web Design & Development",
    desc: "Build modern, mobile-responsive websites and custom web apps that are fast, secure, and designed to convert.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-gray-400" />,
    title: "Performance Marketing",
    desc: "Maximize your ROI with strategic digital ad campaigns, SEO, and performance tracking to grow your online presence.",
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
            Smart Solutions for <br /> Your Digital Success
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-14">
            We offer end-to-end IT and digital marketing services from strategy and branding to development and hosting helping you build, grow, and scale in a digital-first world.
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
