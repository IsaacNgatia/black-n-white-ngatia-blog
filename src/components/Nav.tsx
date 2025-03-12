import  { useState } from 'react';
import { Menu, X, Phone, Search } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#practice-areas", label: "Practice Areas" },
    { href: "/#contact", label: "Contact Us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-50 shadow-md w-full">
      {/* Top bar with contact info */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between py-2 mx-2 md:mx-4 lg:mx-0">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
            <a href="/" className="mb-2 sm:mb-0">
              <span className=" font-bold text-gray-900 text-xl relative select-none">
                Ngatia Wambugu & Company
                <span className="font-medium absolute -top-3 text-base">
                  &reg;
                </span>
              </span>
            </a>
            <div className="flex space-x-4">
              <span className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+254726395910"
                  className="text-sm hover:text-gray-900"
                >
                  +254 726 395 910
                </a>
              </span>
              <span className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+254721674765"
                  className="text-sm hover:text-gray-900"
                >
                  +254 721 674 765
                </a>
              </span>
              <span className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+254735021522"
                  className="text-sm hover:text-gray-900"
                >
                  +254 735 021 522
                </a>
              </span>
            </div>
          </div>

          {/* Search and Contact Button */}
          <div className="flex items-center justify-center space-x-4 mt-2 sm:mt-0">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-2"></div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex justify-end py-2">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`
          sm:flex sm:justify-around 
          ${isMenuOpen ? "block" : "hidden"}
          pb-4 sm:pb-0
        `}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block sm:inline-block py-2 px-4 text-center text-gray-700 hover:text-black uppercase text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;