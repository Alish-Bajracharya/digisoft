import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h1 className="text-lg font-bold tracking-widest">D I G I S O F T</h1>
          <p className="mt-4 leading-relaxed">
            Empowering digital solutions for your business growth and success.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="font-semibold uppercase text-gray-900 mb-4">Services</h2>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">Custom Software</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold uppercase text-gray-900 mb-4">Company</h2>
          <ul className="space-y-2 text-gray-500">
            <li><a href="/company">About Us</a></li>
            <li><a href="/services">Careers</a></li>
            <li><a href="/our-team">Meet the Team</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-semibold uppercase text-gray-900 mb-4">Contact Us</h2>
          <a href="mailto:info@digisoft.com" className='text-gray-500 hover:text-blue-500 hover:underline'>info@digisoft.com</a>
          <div className="flex space-x-4 text-gray-400 text-lg mt-3 ">
            <a href="#" className='hover:text-red-500'><FaInstagram /></a>
            <a href="#" className='hover:text-blue-500'><FaTwitter /></a>
            <a href="#" className='hover:text-blue-500'><FaFacebookF /></a>
            <a href="#" className='hover:text-blue-500'><FaLinkedin/></a>
          </div>
        </div>
      </div>

      <div className="mt-20  pt-12 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 max-w-7xl mx-auto px-2">
        <p>© 2025 Digisoft Developers Pvt Ltd. All rights reserved.</p>
        <p>Powered by ArchieSoft Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
