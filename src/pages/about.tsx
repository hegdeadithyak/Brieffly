import React from 'react';
import "src/app/globals.css";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center animate-bounce">Welcome to Brieffly</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        where formulas go on a diet! In a world overflowing with complex calculations and overwhelming data, we believe in simplifying things.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 animate-fade-in">Our Mission</h2>
      <p className="text-gray-600 mb-4">
        At Brieffly, we aim to make mathematics accessible to everyone. We cut the clutter and present formulas in a way that’s easy to understand and apply.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-2 animate-fade-in">Why Choose Us?</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="animate-slide-in">Simplicity: We believe in the power of simplicity.</li>
        <li className="animate-slide-in">Interactive Learning: Engage with our dynamic visualizations.</li>
        <li className="animate-slide-in">Community Support: Join our growing community.</li>
      </ul>
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Get Started!
      </button>
    </div>
  );
};

export default About;
