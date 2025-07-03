import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Navbar from '../components/Navbar';

import MD from "../assets/Members/MD.jpg"
import MG from "../assets/Members/girl.webp"
import AD from "../assets/Members/AD.jpg"
import FD from "../assets/Members/alish.jpg"
import BD from "../assets/Members/BD.jpg"
import DM from "../assets/Members/DM.jpg"
import DMi from "../assets/Members/DMi.jpg"
import CT from "../assets/Members/CT.jpg"
import Footer from '../components/Footer';

const teamData = [
  {
    name: 'Mr. Buddhi Dangol',
    role: 'Managing Director',
    category: 'Leadership',
    image: MD,
    linkedin: 'https://www.linkedin.com/in/buddhi-dangol-20130556/?originalSubdomain=np',
    facebook: 'https://www.facebook.com/buddhi.khona/',
    bio: 'Experienced leader in digital transformation, leading Digisoft with vision and strategy.'
  },
  {
    name: 'Poonam Lama',
    role: 'Manager',
    category: 'Leadership',
    image: MG,
    linkedin: '#',
    facebook: '#',
    bio: 'Oversees project execution, team efficiency, and operations.'
  },
  {
    name: 'Sumika Bajracharya',
    role: 'Admin',
    category: 'Leadership',
    image: AD,
    linkedin: 'https://www.linkedin.com/in/sumika-bajracharya-777080267/',
    facebook: 'https://www.facebook.com/sumika.bajracharya.2025/',
    bio: 'Administrative lead managing internal coordination and planning.'
  },
  {
    name: 'Alish Bajracharya',
    role: 'Frontend Developer',
    category: 'Development',
    image: FD,
    linkedin: 'https://www.linkedin.com/in/alish-bajracharya-3256b5260/',
    github: 'https://github.com/alish-bajracharya',
    bio: 'Passionate about building interactive UIs with React and modern frontend tools.'
  },
  {
    name: 'Dipson Pokhrel',
    role: 'Backend Developer',
    category: 'Development',
    image: BD,
    linkedin: 'https://www.linkedin.com/in/dipson-pokharel-a0a362234/',
    github: 'https://github.com/dipson546',
    bio: 'Expert in building scalable APIs and backend systems with Laravel and Node.'
  },
  {
    name: 'Ariti Thapa',
    role: 'Digital Marketing',
    category: 'Creative',
    image: DM,
    linkedin: '#',
    github: '#',
    bio: 'Leads branding, social media, and digital campaigns.'
  },
  {
    name: 'Luja Maharjan',
    role: 'Digital Marketing Intern',
    category: 'Creative',
    image: DMi,
    linkedin: 'https://www.linkedin.com/in/luja-maharjan-a81988363/',
    github: 'https://github.com/blurryFace8',
    bio: 'Creative content specialist supporting campaigns and visual media.'
  },
  {
    name: 'Govinda Maharjan',
    role: 'Photographer/Cinematographer',
    category: 'Creative',
    image: CT,
    linkedin: '#',
    facebook: 'https://www.facebook.com/gofle.maharjan/',
    bio: 'Capturing moments and branding visuals with professionalism.'
  },
];

const categories = ['Leadership', 'Creative', 'Development', 'All'];

const MeetOurTeam = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMember, setActiveMember] = useState(null);

  const filteredTeam = teamData.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || member.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-4 mt-16 md:px-10 font-sans max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gray-800"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-gray-600 mt-2">Dedicated experts behind Digisoft's success</p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition shadow-sm border ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search name or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full md:w-72 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredTeam.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 group"
          >
            <div
              className="absolute inset-0 z-10"
              onClick={() => setActiveMember(member)}
            />

              <img
                src={member.image}
                loading="lazy"
                alt={member.name}
                className="w-full h-56 object-cover group-hover:brightness-75 transition"
              />
              <div className="p-4 text-center relative z-20">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <div className="flex justify-center gap-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 z-30">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black z-30">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 z-30">
                      <FaFacebook size={18} />
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <p className="text-white text-sm px-4">Click to view bio</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Modal */}
        <AnimatePresence>
          {activeMember && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMember(null)}
            >
              <motion.div
                className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 text-center relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto border"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{activeMember.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{activeMember.role}</p>
                <p className="text-sm text-gray-700">{activeMember.bio}</p>
                <button
                  className="mt-6 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setActiveMember(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer/>
    </>
  );
};

export default MeetOurTeam;