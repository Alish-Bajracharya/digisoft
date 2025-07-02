import React from "react";
import phoneImage from "../../assets/Home/home1.jpg";

const AdvancedS = () => {
  return (
    <section className="py-20 bg-white text-center ">
      <div className="max-w-4xl mx-auto mb-16 px-4 border-t-2 ">
        <p className="text-xs tracking-widest text-blue-600 font-medium uppercase mt-20 py-5">
          Additions
        </p>
        <h2 className="text-3xl font-extralight py-5">Advanced Services</h2>
        <p className="text-gray-500 mx-auto px-16 leading-relaxed">
          We go beyond the basics - offering advanced features that bring efficiency, insights, and a seamless experience to your digital ecosystem.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Features */}
        <div className="space-y-16 text-center">
          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">User Profiles</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Create detailed user profiles with personalized dashboards, preferences, and activity tracking for smarter engagement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">Statistics</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Access real-time analytics and insightful reports to monitor performance, trends, and business growth.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={phoneImage}
            alt="Phone Mockup"
            className="w-64 md:w-96   object-contain mx-auto"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-16 text-center">
          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">Organization</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Keep everything streamlined with smart data structuring, team roles, and automated workflows tailored to your needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light justify-center text-center mb-2">Accessibility</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Built with inclusive design and responsive technology to ensure seamless access across all devices and users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedS;
