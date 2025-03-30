// src/components/WhatsAppIcon.js
import React from "react";
import "../Pages/whatsapp.css";
import WhatsAppLogo from "../image/logo-whatsapp-png-46041.png";

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a href="https://wa.me/+94779966888" target="_blank" rel="noopener noreferrer">
      <img 
          width="48" 
          height="48" 
          src={WhatsAppLogo} 
          alt="WhatsApp" 
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
