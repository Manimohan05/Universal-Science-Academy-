import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from "react-icons/fa";

import ph77 from "../image/ph77.jpg";
import ph23 from "../image/ph23.jpg";
import ph7 from "../image/ph7.jpg";
import ph8 from "../image/ph8.jpg";
import ph2 from "../image/ph2.jpg";
import ph12 from "../image/ph9.jpg";
import background from "../image/back.png";

const galleryImages = [ph77, ph23, ph7, ph8, ph2, ph12];

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Layer */}
      <div
        className="bg-fixed absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})` ,backgroundSize: "contain", // Adjusts size to fit within the screen
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",opacity:0.2}}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center p-10">
        <motion.h1
          className="text-5xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Empowering students through quality education and expert guidance. Our
          mission is to provide personalized tutoring to help every student
          achieve their academic dreams.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[FaChalkboardTeacher, FaBookOpen, FaUsers].map((Icon, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-6xl text-blue-700 mx-auto" />
              <h2 className="text-2xl font-semibold mt-4">
                {["Expert Tutors", "Comprehensive Materials", "Community Learning"][index]}
              </h2>
              <p className="text-gray-600 mt-2">
                {[
                  "Our experienced tutors provide the best learning experience tailored to each student.",
                  "Access well-structured study materials to enhance learning and understanding.",
                  "Join a vibrant learning community that fosters collaboration and academic success.",
                ][index]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <h2 className="text-5xl font-bold text-blue-900 text-center mb-6">
            Our Stories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
