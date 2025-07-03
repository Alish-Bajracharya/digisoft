import React from "react";
import RightImage from "../../assets/images/idea.png"; 

const Idea = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-24">
        
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center justify-center md:text-left">
          <h2 className="text-5xl font-thin text-center text-gray-800 leading-snug">
            From the idea to a full <br />
            online experience
          </h2>
          <p className="mt-6 text-gray-500 max-w-md md:max-w-full text-center leading-relaxed">
            Whether you're starting from scratch or refining an existing concept, we help bring your vision to life — from planning and prototyping to design, development, and deployment. End-to-end digital transformation, all under one roof.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end">
          <img
            src={RightImage}
            alt="Coffee and Keyboard"
            className="max-w-full md:max-w-[900px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Idea;
