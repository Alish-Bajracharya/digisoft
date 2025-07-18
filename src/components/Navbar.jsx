import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/digilogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#/services" },
    { label: "Company", href: "/#/company" },
    { label: "Meet Our Team", href: "/#/our-team" },
    { label: "News", href: "/#/news" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 10 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          visible
            ? "bg-white shadow-md border-b border-gray-200"
            : prevScrollPos <= 10
            ? "bg-transparent border-none"
            : "-translate-y-full"
        }`}
      >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center font-worksans">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-8 md:h-10 object-contain" />
          </a>
          <div className="text-xl font-semibold tracking-widest text-gray-900">
            DIGISO<span className="rotate-180 inline-block">F</span>T
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600 relative">
          {menuItems.map((item) =>
            item.submenu ? (
              <li
                key={item.label}
                onMouseEnter={() => setShowProductMenu(true)}
                onMouseLeave={() => setShowProductMenu(false)}
                onClick={() => setActiveMenu(item.label)} // <-- Set active
                className={`relative group cursor-pointer pt-1 ${
                  activeMenu === item.label ? "border-t-4 border-blue-500 text-gray-800" : ""
                }`}
              >
                <span className="hover:text-black transition">
                  {item.label.toUpperCase()}
                </span>

                {/* Submenu */}
                {showProductMenu && (
                  <ul className="absolute top-full left-0 mt-5 bg-white shadow-lg border py-2 w-44 z-10">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={item.label}
                onClick={() => setActiveMenu(item.label)} 
                className={`pt-1 ${
                  activeMenu === item.label ? "border-t-4 border-blue-500 text-gray-800" : ""
                }`}
              >
                <a
                  href={item.href}
                  className="hover:text-black transition duration-300"
                >
                  {item.label.toUpperCase()}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-900 text-xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start space-y-2 px-6 py-4 text-sm text-gray-700 font-medium">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="w-full">
                  <p className="text-gray-900 font-semibold">{item.label}</p>
                  <ul className="ml-4 mt-1">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block py-1 text-gray-600 hover:text-black"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-black">
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
