import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">

        {/* Logo & Description */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-[#36d7b7] mb-4">TalhaFood</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering your favorite meals fresh and fast to your doorstep. Tasty, hygienic, and satisfying!
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-[#36d7b7] transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="text-gray-300 hover:text-[#36d7b7] transition-colors duration-200">Menu</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-[#36d7b7] transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-[#36d7b7] transition-colors duration-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Contact & Socials</h3>
          <p className="text-gray-400 text-sm mb-4">support@talhafood.com</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#36d7b7] transition-transform duration-200 hover:scale-110">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#36d7b7] transition-transform duration-200 hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#36d7b7] transition-transform duration-200 hover:scale-110">
              <FaTwitter size={20} />
            </a>
            <a href="https://github.com/TalhaSyed65737" target="_blank" rel="noreferrer" className="hover:text-[#36d7b7] transition-transform duration-200 hover:scale-110">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TalhaFood. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
