import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img
            src={require("../image/USA_transparent (2).png")}
            alt="Universal Science Academy Logo"
            className="h-10 w-10"
          />
          <span className="text-lg font-bold">Universal Science Academy</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/class" className="hover:underline">Time Table</Link>
          <Link to="/admissions" className="hover:underline">Admissions</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          
        </div>

        <button
            className="md:hidden focus:outline-none text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"} {/* Unicode for X and Menu */}
          </button>
      </div>

      {/* Mobile Menu Links (Dropdown) */}
      {isOpen && (
        <div className="flex flex-col bg-primary p-4 mt-2 md:hidden">
          <Link to="/" className="py-2 border-b border-gray-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/class" className="py-2 border-b border-gray-600" onClick={() => setIsOpen(false)}>Time Table</Link>
          <Link to="/admissions" className="py-2 border-b border-gray-600" onClick={() => setIsOpen(false)}>Admissions</Link>
          <Link to="/about" className="py-2 border-b border-gray-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
