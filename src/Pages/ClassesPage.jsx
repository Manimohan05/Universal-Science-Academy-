import React from "react";
import background from "../image/back.png";

const ClassesPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Dark Overlay for Opacity Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative max-w-4xl w-full text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Our Classes</h1>

        {/* Physics Classes */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Physics Classes</h2>

          <div className="mt-4 bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2025 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Monday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Tuesday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Wednesday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>

          <div className="mt-4 bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2026 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Sunday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Thursday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Friday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>
        </section>

        {/* Chemistry Classes */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Chemistry Classes</h2>

          <div className="mt-4 bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2025 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Thursday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Friday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Saturday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>

          <div className="mt-4 bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2026 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Monday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Wednesday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Saturday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClassesPage;
