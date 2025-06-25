import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Twitter,
} from "lucide-react";
import logo from "../assets/images/digilogo.png";
import maintenance from "../assets/images/maintenance.webp";

const targetDate = new Date("2025-07-10T00:00:00");

const Maintenance = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const t = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(t);

      if (difference <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-50 flex flex-col items-center justify-start px-4 py-8">
      
      {/* Logo */}
      <div className="mb-5 ">
        <img
          src={logo}
          alt="Digisoft Logo"
          className="h-20 md:h-24 mx-auto drop-shadow-md"
        />
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 mt-5 items-center animate-fadeIn">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-5xl text-blue-700 font-bold mb-6 text-center md:text-left">
            Website is Under <span className="text-black">MAINTENANCE</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left">
            We’re working hard to improve your experience. Stay tuned! Our Website is currently undergoing scheduled maintenance to serve you better.
                        Thankyou for your patience.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-start space-x-6 mb-8 text-blue-800 font-semibold text-xl">
            <div className="text-center">
              <div className="text-3xl">{timeLeft.days || 0}</div>
              <div className="text-sm text-gray-700">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">{timeLeft.hours || 0}</div>
              <div className="text-sm text-gray-700">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">{timeLeft.minutes || 0}</div>
              <div className="text-sm text-gray-700">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">{timeLeft.seconds || 0}</div>
              <div className="text-sm text-gray-700">Seconds</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-gray-800 space-y-4 mb-6 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:info@digisoft.com.np"
                className="hover:underline hover:text-blue-800"
              >
                info@digisoft.com.np
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a
                href="tel:+977015453000"
                className="hover:underline hover:text-blue-800"
              >
                +977-01-5453000
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Map className="w-5 h-5 text-blue-600" />
              <a
                href="https://maps.app.goo.gl/WL15HwvJjdw8Kov3A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-800"
              >
                Ekantakuna, Lalitpur, Nepal
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://www.facebook.com/digisoftdevelopers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://instagram.com/digisoftdevelopers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://twitter.com/DigisoftL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/digisoft-developers-nepal-b7706a217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:block">
          <img
            src={maintenance}
            alt="Under Construction"
            className="w-full max-h-[480px] object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Digisoft Developers Pvt. Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default Maintenance;
