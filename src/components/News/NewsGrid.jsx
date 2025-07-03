import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Img1 from "../../assets/images/company-header-e22775c7.webp";
import Img2 from "../../assets/images/company-talk-73c3237d.webp";
import Img3 from "../../assets/images/services-header.webp";
import Img4 from "../../assets/images/home-header.webp";

const blogPosts = [
  {
    img: Img1,
    title: "What is Digisoft?",
    date: "28 OCTOBER 2023",
    desc: "Discover how Digisoft Developers is redefining digital experiences with innovative tools and client-first development strategies.",
  },
  {
    img: Img2,
    title: "8 Reasons to Choose Digisoft",
    date: "30 OCTOBER 2023",
    desc: "From agile workflows to round-the-clock support, here's why startups and enterprises alike trust Digisoft for their digital needs.",
  },
  {
    img: Img3,
    title: "Our Journey, Our Mission",
    date: "17 OCTOBER 2023",
    desc: "Explore the growth and goals behind Digisoft, and what drives our passion for modern technology solutions.",
  },
  {
    img: Img4,
    title: "Empowering Ideas with Tech",
    date: "07 OCTOBER 2023",
    desc: "Digisoft brings your vision to life with scalable, secure, and impactful digital products tailored for success.",
  },
  {
    img: Img2,
    title: "Design That Works",
    date: "02 OCTOBER 2023",
    desc: "Aesthetics meet functionality. Our design philosophy ensures your product not only looks great but works flawlessly.",
  },
  {
    img: Img1,
    title: "Inside the Creative Room",
    date: "25 SEPTEMBER 2023",
    desc: "A peek into how our team brainstorms and builds bold solutions that stand out in a crowded market.",
  },
  {
    img: Img4,
    title: "Why Agile Development Wins",
    date: "22 SEPTEMBER 2023",
    desc: "In an ever-changing tech world, flexibility is key. Learn how our agile approach ensures results faster and smarter.",
  },
  {
    img: Img3,
    title: "Turning Feedback into Features",
    date: "18 SEPTEMBER 2023",
    desc: "Client collaboration is at the heart of Digisoft. Here’s how we integrate feedback to evolve every product.",
  },
];

const NewsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-16 font-worksans">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {currentPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center "
            >
              <div className="overflow-hidden shadow-lg rounded">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-medium text-gray-800 mt-6">
                {post.title}
              </h3>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-1 mb-3">
                {post.date}
              </p>
              <p className="text-base text-gray-600 text-left justify-center leading-relaxed mb-6">
                {post.desc}
              </p>
              <a
                href="#"
                className="text-xs uppercase tracking-widest text-gray-600 font-medium hover:underline"
              >
                Continue Reading
              </a>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-full flex items-center gap-2 text-sm transition ${
              currentPage === 1
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-400 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft size={18} />
            Prev
          </button>

          <span className="text-sm font-medium text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-full flex items-center gap-2 text-sm transition ${
              currentPage === totalPages
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-400 hover:bg-gray-100"
            }`}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
