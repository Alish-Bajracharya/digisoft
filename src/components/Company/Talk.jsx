import React from "react";
import WomanImage from "../../assets/images/company-talk-73c3237d.webp";

const Talk = () => {
  return (
    <section className="bg-white py-20 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Image */}
        <div className="flex justify-center mb-12">
          <img
            src={WomanImage}
            alt="Let's talk"
            className="w-full max-w-7xl h-auto object-cover"
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          
          {/* Left Column */}
          <div className="flex items-start">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Let’s have a talk together
            </h2>
          </div>

          {/* Right Column */}
          <div className="text-gray-600 text-sm leading-relaxed">
            <p className="mb-6">
              Ready to bring your vision to life? Whether you need a new website,
              a digital marketing strategy, or custom software solutions, we’re
              here to listen, collaborate, and build. Our team is passionate about
              solving real business challenges through smart, modern technology.
              Let’s turn your ideas into impactful digital experiences.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                HEADQUARTERS
              </h3>
              <p>
                Digisoft Developers Pvt. Ltd. <br />
                Ekantakuna, Lalitpur, Nepal <br />
                +977-01-5453000
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Talk;
