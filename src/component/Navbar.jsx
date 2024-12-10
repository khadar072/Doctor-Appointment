import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For the profile dropdown
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle dropdown on click

  const logoutHandler = () => {
    // Simulate token removal (e.g., clear from localStorage)
    setToken(false);
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center w-full h-[70px] border-b border-b-blue-600 mb-2 relative">
      {/* Logo */}
      <img
        className="cursor-pointer"
        src={assets.logo || "/default-logo.png"}
        width={160}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-4 justify-center items-center w-full">
        <ul className="flex gap-4 font-medium text-sm text-gray-600">
          <NavLink to="/" className="hover:text-blue-700">HOME</NavLink>
          <NavLink to="/doctors" className="hover:text-blue-700">DOCTORS</NavLink>
          <NavLink to="/about" className="hover:text-blue-700">ABOUT</NavLink>
          <NavLink to="/contact" className="hover:text-blue-700">CONTACT</NavLink>
        </ul>
      </div>

      {/* User Profile / Login Button */}
      <div className="flex items-center gap-3">
        {token ? (
          <div className="relative flex items-center gap-1 cursor-pointer">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={assets.profile || "/default-profile.png"}
              alt="Profile"
              onClick={toggleDropdown} // Toggle dropdown on profile click
            />
            <MdKeyboardArrowDown onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-stone-100 rounded shadow-lg text-gray-600 z-20">
                <ul className="flex flex-col gap-2 p-3 min-w-[150px] font-medium">
                  <li
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/profile");
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </li>
                  <li
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/my-appointment");
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointment
                  </li>
                  <li
                    onClick={() => {
                      setDropdownOpen(false);
                      logoutHandler();
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-blue-700 px-6 py-1 rounded text-white text-center"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center" onClick={toggleMenu}>
        <img
          className="w-8 cursor-pointer"
          src={open ? assets.close || "/close-icon.png" : assets.menu || "/menu-icon.png"}
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[70px] right-0 bg-white w-full h-screen z-20 shadow-lg p-4">
          <ul className="flex flex-col gap-4 font-medium text-lg text-gray-600">
            <NavLink onClick={() => setOpen(false)} to="/" className="hover:text-blue-700">
              HOME
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/doctors" className="hover:text-blue-700">
              DOCTORS
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className="hover:text-blue-700">
              ABOUT
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="hover:text-blue-700">
              CONTACT
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
