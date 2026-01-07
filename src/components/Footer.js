import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import LOGOIMAGE from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <img
              className="w-44 h-20 cursor-pointer"
              src={LOGOIMAGE}
              alt="logo"
            />
            <p className="text-center sm:text-left text-gray-400">
              I just make this for learning purpose.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-red-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-red-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-red-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-red-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-red-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-red-500">
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vara-prasad-kanugula-0a169a243/"
                className="hover:text-red-500"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Email: prasad.mechanu@gmail.com
            </p>
            <p className="text-gray-400">Phone: +91 9398956257</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Vara Prasad Kanugula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
