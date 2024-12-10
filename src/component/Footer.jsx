import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 px-6 py-10 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left side */}
        <div className="space-y-4">
          <img className="w-32" src={assets.logo} alt="Logo" />
          <p className="text-sm text-gray-700 leading-relaxed">
            Have questions or need assistance? We're here to help! Feel free to 
            reach out to us anytime, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:col-span-2">
          {/* Main Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Main Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink className="hover:text-blue-600 transition" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-blue-600 transition" to="/doctors">Doctors</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-blue-600 transition" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-blue-600 transition" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <img className="w-6" src={assets.phone} alt="Phone" />
                <p className="ml-2 text-gray-700">+251 00 000000</p>
              </li>
              <li className="flex items-center">
                <img className="w-6" src={assets.message} alt="Message" />
                <p className="ml-2 text-gray-700">khadar@gmail.com</p>
              </li>
              <li className="flex items-center">
                <img className="w-6" src={assets.blueLocation} alt="Location" />
                <p className="ml-2 text-gray-700">Debre Burhan, DBU</p>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <img className="w-6" src={assets.facebook} alt="Facebook" />
                <p className="ml-2 text-gray-700">Facebook</p>
              </li>
              <li className="flex items-center">
                <img className="w-6" src={assets.twitter} alt="Twitter" />
                <p className="ml-2 text-gray-700">Twitter</p>
              </li>
              <li className="flex items-center">
                <img className="w-6" src={assets.instogram} alt="Instagram" />
                <p className="ml-2 text-gray-700">Instagram</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; 2024 HealthCare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
