import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import background from "../image/back.png";

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    batch: "",
    stream: "",
    medium: "",
    subjects: [],
    address: "",
    nic: "",
    mobile: "",
    email: "",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubjectsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      subjects: checked
        ? [...prevState.subjects, value]
        : prevState.subjects.filter((subject) => subject !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      ...formData,
      subjects: formData.subjects.join(", "),
      email: formData.email || "N/A",
      remarks: formData.remarks || "N/A",
    };

    emailjs
      .send(
        "service_7sq0iv7", // Replace with your EmailJS Service ID
        "template_nibkked", // Replace with your EmailJS Template ID
        emailParams,
        "mRhr1rg1ZbD--vwLB" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Registration Successful! Confirmation email sent.");
          setFormData({
            fullName: "",
            batch: "",
            stream: "",
            medium: "",
            subjects: [],
            address: "",
            nic: "",
            mobile: "",
            email: "",
            remarks: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Registration failed. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${background})`, opacity: 0.2 }}
      ></div>

      <div className="relative bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#002E63]">
          Admission Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "fullName", label: "Full Name" },
            { name: "address", label: "Address" },
            { name: "nic", label: "NIC" },
            { name: "mobile", label: "Mobile" },
            { name: "email", label: "Email", type: "email" },
          ].map(({ name, label, type = "text" }) => (
            <div key={name}>
              <label className="block font-medium mb-1">{label}:</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E63]"
                required={name !== "email"}
              />
            </div>
          ))}

          {["batch", "stream", "medium"].map((name) => (
            <div key={name}>
              <label className="block font-medium mb-1">
                {name.charAt(0).toUpperCase() + name.slice(1)}:
              </label>
              <select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E63]"
                required
              >
                <option value="" disabled>Select {name}</option>
                {(
                  name === "batch"
                    ? ["2025 A/L", "2026 A/L", "2027 A/L", "Day Batch"]
                    : name === "stream"
                    ? ["Bio", "Maths"]
                    : ["English", "Tamil"]
                ).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div>
            <label className="block font-medium mb-2">Subjects:</label>
            <div className="flex flex-wrap gap-4">
              {["Physics", "Chemistry"].map((subject) => (
                <label key={subject} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={subject}
                    checked={formData.subjects.includes(subject)}
                    onChange={handleSubjectsChange}
                    className="w-5 h-5 text-[#002E63] focus:ring-[#002E63]"
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Remarks (Optional):</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter any other remarks"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E63]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#002E63] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#001C3D] transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionsPage;
