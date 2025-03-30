import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactUsPage";
import AdmissionsPage from "./Pages/AdmissionsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import WhatsAppIcon from "./Pages/whatsapp.jsx";
import "./App.css"; // Ensure you have styles for the loading screen
import PrivacyPolicy from "./Pages/Privacy.jsx";
import ClassesPage from "./Pages/ClassesPage.jsx";

const App = () => {
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  const text = "Universal Science Academy"; // Loading text animation

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          {text.split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar /> {/* Navbar for easy navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/class" element={<ClassesPage/>}/>
      </Routes>
      <WhatsAppIcon />
      <Footer />
    </Router>
  );
};

export default App;
