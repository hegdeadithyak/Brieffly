'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import "src/app/globals.css";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-8">
      <motion.h1
        className="text-4xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Brieffly
      </motion.h1>
      <motion.p
        className="text-xl text-white text-center max-w-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Where formulas go on a diet! In a world overflowing with complex calculations and overwhelming data, we believe in simplifying things.
      </motion.p>
      
      <motion.h2
        className="text-2xl font-semibold text-white mt-6 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Mission
      </motion.h2>
      <motion.p
        className="text-lg text-gray-100 text-center max-w-2xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        At Brieffly, we aim to make mathematics accessible to everyone. We cut the clutter and present formulas in a way that’s easy to understand and apply.
      </motion.p>
      
      <motion.h3
        className="text-xl font-medium text-white mt-6 mb-2 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Why Choose Us?
      </motion.h3>
      <motion.ul
        className="list-disc list-inside text-gray-100 text-lg mb-8 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <li>Simplicity: We believe in the power of simplicity.</li>
        <li>Interactive Learning: Engage with our dynamic visualizations.</li>
        <li>Community Support: Join our growing community.</li>
      </motion.ul>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <button className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
          Get Started!
        </button>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <Link
          href="/"
          className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default About
