import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import background from "../image/back.png";
import logo from "../image/USA_transparent (2).png";
import contactImage from "../image/ph8.jpg";
import { Facebook } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7sq0iv7",  // Replace with your EmailJS service ID
        "template_fc9smm1", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "mRhr1rg1ZbD--vwLB" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="bg-fixed absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})` ,backgroundSize: "contain", // Adjusts size to fit within the screen
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        width: "100%",opacity:0.1}}
      ></div>

      {/* Content Section */}
      <div className="relative flex items-center justify-center min-h-screen p-6 w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full overflow-hidden">
          {/* Left Section */}
          <div className="bg-[#002E63] text-white p-8 flex-1 flex flex-col justify-between">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4 mb-6">
              <img src={logo} alt="Universal Science Academy Logo" className="w-16 h-16" />
              <h1 className="text-2xl font-bold">Universal Science Academy</h1>
            </div>

            {/* Contact Image */}
            <div className="flex justify-center mb-6">
              <img src={contactImage} alt="Middle Image" className="w-full h-48 object-cover rounded-lg" />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-bold">
                Let's discuss something <span className="text-pink-400">exciting</span> together!
              </h2>
              <div className="mt-4 space-y-2">
              <p className="flex items-center space-x-2">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <a href="https://www.facebook.com/share/18szF5de1G/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">
                  Universal Science Academy
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <a
                    href="mailto:universalscienceacademyjaffna@gmail.com"
                    className="underline hover:text-pink-400"
                  >
                    universalscienceacademyjaffna@gmail.com
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <a href="tel:+94779966888" className="underline hover:text-pink-400">
                    +94779966888
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📍</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Chunnagam+Jaffna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-400"
                  >
                    K.K.S Road, Chunnakam, Jaffna
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-8 flex-1">
            <h2 className="text-lg font-bold mb-6 text-gray-700">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#002E63]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#002E63]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Type your message..."
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#002E63]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#002E63] text-white py-3 rounded-lg font-semibold hover:bg-[#004ba8] transition duration-200 shadow-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
