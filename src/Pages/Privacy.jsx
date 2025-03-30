import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <h2 className="text-xl font-semibold">Universal Science Academy</h2>

      <p className="mt-4">
        Universal Science Academy is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our tuition center, website, and services.
      </p>

      <h3 className="text-lg font-semibold mt-6">1. Information We Collect</h3>
      <ul className="list-disc pl-6">
        <li><strong>Personal Details:</strong> Name, email address, phone number, and address.</li>
        <li><strong>Academic Information:</strong> Student’s grade level, school details, and subjects of interest.</li>
        <li><strong>Payment Information:</strong> If applicable, we collect billing details for tuition fees.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, and interactions with our website.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6">2. How We Use Your Information</h3>
      <ul className="list-disc pl-6">
        <li>To enroll students and manage class schedules.</li>
        <li>To communicate updates, schedules, and announcements.</li>
        <li>To process payments and generate invoices.</li>
        <li>To improve our services and website functionality.</li>
        <li>To ensure a safe and secure learning environment.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6">3. Sharing of Information</h3>
      <p>We do not sell or rent personal information to third parties. However, we may share information:</p>
      <ul className="list-disc pl-6">
        <li>With instructors for class management.</li>
        <li>With payment processors for fee transactions.</li>
        <li>As required by law or to protect our rights and safety.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6">4. Data Security</h3>
      <p>We implement strict security measures to protect personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

      <h3 className="text-lg font-semibold mt-6">5. Your Rights and Choices</h3>
      <ul className="list-disc pl-6">
        <li>You can request access to your personal information.</li>
        <li>You can ask us to correct or delete your data.</li>
        <li>You can opt out of promotional communications at any time.</li>
      </ul>
      <p>To exercise these rights, contact us at <a href="mailto:universalscienceacademyjaffna@gmail.com" className="underline hover:text-pink-400">
                universalscienceacademy@gmail.com
              </a>.</p>

      <h3 className="text-lg font-semibold mt-6">6. Changes to This Privacy Policy</h3>
      <p>We may update this policy from time to time. Any changes will be posted on our website with the updated effective date.</p>

      <h3 className="text-lg font-semibold mt-6">7. Contact Us</h3>
      <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
      <p><strong>Universal Science Academy</strong></p>
      <p>K.K.S Road Chunnakam</p>
      <p>Email: <a href="mailto:universalscienceacademyjaffna@gmail.com" className="underline hover:text-pink-400">
                universalscienceacademy@gmail.com
              </a></p>
      <p>Phone: <a href="tel:0779966888" className="underline hover:text-pink-400">
                0778899556
              </a></p>

      <p className="mt-6">By using our services, you agree to the terms of this Privacy Policy.</p>
    </div>
  );
};

export default PrivacyPolicy;

