import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import bg1 from "../../assets/images/company-talk-73c3237d.webp";
import bg2 from "../../assets/images/company-header-e22775c7.webp";
import bg3 from "../../assets/images/services-header.webp";

const stats = [
  {
    title: "8 Reasons Why You Need Digisoft",
    subtitle: "INSIGHTS",
    description:
      "Discover how Digisoft is reshaping the digital landscape with innovative software solutions, agile development, and customer-first thinking that help businesses thrive in today’s competitive market.",
    button: "Read More",
    image: bg1,
  },
  {
    title: "The Future of Digital Efficiency",
    subtitle: "FEATURED",
    description:
      "Explore how smart automation, cloud infrastructure, and AI-driven workflows are transforming business productivity. Digisoft helps you stay ahead with scalable and modern tech solutions.",
    button: "Read More",
    image: bg2,
  },
  {
    title: "Why Digisoft Is the First Choice for Startups",
    subtitle: "NEWS",
    description:
      "From MVPs to full-scale platforms, Digisoft empowers startups with cost-effective, scalable, and reliable digital products that bring ideas to life and drive early growth with confidence.",
    button: "Read More",
    image: bg3,
  },
];


const NewsHero = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % stats.length);
  const prevSlide = () => setIndex((index - 1 + stats.length) % stats.length);

  const current = stats[index];

  return (
    <div className="relative w-full h-screen text-white font-worksans overflow-hidden">
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2">
          <p className="text-sm uppercase tracking-wider mb-4 font-semibold">
            {current.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-snug mb-6">
            {current.title}
          </h1>
          <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed">
            {current.description}
          </p>
          <button className="px-6 py-2 rounded-full border border-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
            {current.button}
          </button>
        </div>
      </div>

      {/* Chevron Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {stats.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default NewsHero;
