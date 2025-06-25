import React from 'react';
import cust1 from "../../assets/customers/logo1.png";
import cust2 from "../../assets/customers/logo2.png";
import cust3 from "../../assets/customers/logo3.png";
import cust4 from "../../assets/customers/logo4.png";



const logos = [
  { src: cust1, alt:'Yogdan',  height: 'h-10', path:"https://yogdanconsumer.coop.np/" },
  { src: cust2, alt:'Cwin', height: 'h-6' },
  { src: cust3, alt:'CHR', height: 'h-8' },
  { src: cust4, alt: "Yechu", height: 'h-6' },
];

const Banner = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-sm text-blue-600 font-semibold tracking-widest mb-8 ">
                OUR CUSTOMERS
            </p>
        </div> 

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-12 grayscale opacity-100 bg-gray-600">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-8 object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
