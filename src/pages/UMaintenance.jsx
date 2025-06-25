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
import maintenance from "../assets/images/const.png";

const targetDate = new Date("2025-07-01T00:00:00");

const Maintenance = () => {
  const [timeLeft, setTimeLeft] = useState({});

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const t = {
        days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
        seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
      };

      setTimeLeft(t);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 md:px-16 py-10">
      <div className="max-w-7xl mx-auto rounded-3xl bg-white/30 backdrop-blur-md shadow-xl px-6 md:px-12 py-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Logo inside content */}
          <img
            src={logo}
            alt="Digisoft Logo"
            className="h-16 md:h-20 drop-shadow mb-4"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            We're <span className="text-black">Updating</span> Our Website
          </h1>

          <p className="text-lg text-gray-700">
            Our team is working on something amazing! We'll be back shortly
            with a better experience.
          </p>

          {/* Countdown */}
          <div className="flex flex-wrap gap-4 text-center">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div
                key={unit}
                className="bg-white/80 shadow-sm rounded-xl px-4 py-3 min-w-[70px]"
              >
                <div className="text-2xl font-bold text-blue-900">
                  {timeLeft[unit] || "00"}
                </div>
                <div className="text-sm uppercase text-gray-600">{unit}</div>
              </div>
            ))}
          </div>

          {/* Contact us */}
          <div className="text-sm md:text-base space-y-3 pt-4">
            <div className="flex items-center gap-3 text-gray-800">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:info@digisoft.com.np"
                className="hover:underline hover:text-blue-900"
              >
                info@digisoft.com.np
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Phone className="w-5 h-5 text-blue-600" />
              <a
                href="tel:+977015453000"
                className="hover:underline hover:text-blue-900"
              >
                +977-01-5453000
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Map className="w-5 h-5 text-blue-600" />
              <a
                href="https://maps.app.goo.gl/WL15HwvJjdw8Kov3A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-900"
              >
                Ekantakuna, Lalitpur, Nepal
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-5 pt-4">
            <a
              href="https://www.facebook.com/digisoftdevelopers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-700" />
            </a>
            <a
              href="https://instagram.com/digisoftdevelopers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-700" />
            </a>
            <a
              href="https://twitter.com/DigisoftL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/digisoft-developers-nepal-b7706a217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full">
          <img
            src={maintenance}
            alt="Under Construction"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-600 text-center">
        &copy; {new Date().getFullYear()} Digisoft Developers Pvt. Ltd. All
        rights reserved.
      </p>
    </div>
  );
};

export default Maintenance;
