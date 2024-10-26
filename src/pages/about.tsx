'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import "src/app/globals.css"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-black via-black to-white text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#small-grid)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Brieffly
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Where formulas go on a diet! In a world overflowing with complex calculations
          and overwhelming data, we believe in simplifying things.
        </motion.p>

        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-300">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-6 text-center">
            At Brieffly, we aim to make mathematics accessible to everyone. We cut the
            clutter and present formulas in a way that's easy to understand and apply.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-200">Why Choose Us?</h3>
          <ul className="text-lg text-gray-300 mb-6 space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-gray-500">•</span> Simplicity: We believe in the power of simplicity.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-gray-500">•</span> Interactive Learning: Engage with our dynamic visualizations.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-gray-500">•</span> Community Support: Join our growing community.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-white to-black hover:from-black hover:to-white text-black hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Get Started!
          </button>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-400 transition duration-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}