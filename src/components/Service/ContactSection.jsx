import React from "react";
import map from "../../assets/images/nepalll.png";

const locations = [
  {
    title: "Nepal",
    address: "Ekantakuna, Lalitpur",
    phone: "+977-01-5453000",
  },
  
];

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20 text-center font-worksans">
      <div className="max-w-2xl mx-auto mb-12 px-4 ">
        <h2 className="text-3xl font-thin text-gray-900">Say Hello</h2>
        <div className="h-0.5 w-8 bg-blue-500 mx-auto my-4" />
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <button className="mt-6 px-8 py-2 text-sm font-thin text-black bg-white rounded-full shadow-md hover:text-blue-500 transition">
          APPLY NOW
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src={map}
          alt="World Map Dots"
          className="max-w-full w-[90%] md:w-[80%] lg:w-[70%] xl:w-[850px] -mt-32 mx-auto"
        />
      </div>

      <div className="-mt-10 flex flex-col md:flex-row justify-center gap-10 text-center mb-6 px-4">
        {locations.map((location, index) => (
          <div key={index} className="text-sm">
            <h4 className="uppercase font-semibold tracking-wide text-gray-800 text-xs mb-1">
              {location.title}
            </h4>
            <p className="text-gray-600">{location.address}</p>
            <p className="text-gray-600 mt-1">{location.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
