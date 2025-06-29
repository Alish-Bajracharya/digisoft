import { useEffect, useState } from "react";
import heroImage from "../../assets/images/home-header.webp";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 font-worksans">
      <div className=" container mx-auto px-4 md:px-6 mt-10 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Content */}
        <div
          className={`w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-600 ease-out ${
            show ? "translate-x-0 opacity-90" : "-translate-x-10 opacity-0"
          }`}
        >
          <p className="text-sm font-medium text-blue-600 tracking-widest mb-10">
            WHAT WE DO
          </p>
          <h1 className="text-4xl md:text-4xl font-roboto text-gray-900 leading-tight mb-4">
            We create an all round <br />
            experience for your business
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis penatibus et
            magnis.
          </p>
          <button className="bg-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition">
            EXPLORE
          </button>
        </div>

        {/* Right Image */}
        <div
          className={`w-full md:w-1/2 transition-all duration-1000 ease-out delay-200 ${
            show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >          
          <img
            src={heroImage}
            alt="Tablet Showcase"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
