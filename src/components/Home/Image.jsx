import React from 'react';
import img1 from "../../assets/Home/home1.webp"
import img2 from "../../assets/Home/home2.webp"
import img3 from "../../assets/Home/home3.webp"


const imageData = [
  {
    src: img1,     
    text: 'GET AN OVERVIEW',
    link: '#overview',
  },
  {
    src: img2,
    text: 'EXPLORE ALL Services',
    link: '/services',
  },
  {
    src: img3,
    text: 'LATEST NEWS',
    link: '/news',
  },
];

const Image = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 py-20">
      {imageData.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="flex flex-col items-center text-center group"
        >
          <img
            src={item.src}
            alt={item.text}
            className="w-full object-cover"
          />
          <span className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-gray-500 tracking-wide">
            {item.text}
          </span>
        </a>
      ))}
    </div>
  );
};
export default Image;