import React from "react";
import phoneImage from "../../assets/Home/home.jpg";

const AdvancedS = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <p className="text-xs tracking-widest text-blue-600 font-medium uppercase py-5">
          Additions
        </p>
        <h2 className="text-3xl font-extralight py-5">Advanced Services</h2>
        <p className="text-gray-500 mx-auto px-16 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Features */}
        <div className="space-y-16 text-center">
          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">User Profiles</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">Statistics</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={phoneImage}
            alt="Phone Mockup"
            className="w-64 md:w-72 object-contain mx-auto"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-16 text-center">
          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">Organization</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">Accessibility</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedS;
