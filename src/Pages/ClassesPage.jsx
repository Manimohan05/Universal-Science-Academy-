import React from "react";
import background from "../image/back.png";

const ClassesPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="bg-fixed absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})` ,backgroundSize: "contain", // Adjusts size to fit within the screen
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        width: "100%",opacity:0.1}}
      ></div>

      {/* Dark Overlay for Opacity Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Main Content */}
      <div className="relative max-w-4xl w-full text-center text-black">
        <h1 className="text-4xl font-bold mb-6">Our Classes</h1>

        {/* Physics Classes */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Physics Classes</h2>

          <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2025 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Sunday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Thursday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Friday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Saturday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2026 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Monday: 6.00 p.m. - 7.30 p.m.</li>
              <li>Tuesday: 6.00 p.m. - 7.30 p.m.</li>
              <li>Wednesday: 6.00 p.m. - 7.30 p.m.</li>
              <li>Thursday: 5.45 p.m. - 7.00 p.m.</li>
            </ul>
          </div>
          <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2027 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Friday: 5.30 p.m. - 7.00 p.m.</li>
              <li>Saturday: 5.30 p.m. - 7.00 p.m.</li>
              <li>Sunday: 5.30 p.m. - 7.00 p.m.</li>
            </ul>
          </div>
        </section>

        {/* Chemistry Classes */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Chemistry Classes</h2>

          <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2025 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Thursday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Friday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Saturday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2026 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Monday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Wednesday: 7.00 p.m. - 8.30 p.m.</li>
              <li>Saturday: 7.00 p.m. - 8.30 p.m.</li>
            </ul>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">G.C.E A/L 2027 Batch</h3>
            <ul className="list-disc list-inside">
              <li>Monday: 5.00 p.m. - 6.30 p.m.</li>
              <li>Wednesday: 5.00 p.m. - 6.30 p.m.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClassesPage;
