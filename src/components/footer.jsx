import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 text-center relative">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
      </div>
      <p className="mt-4">©Universal Science Academy Jaffna. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
