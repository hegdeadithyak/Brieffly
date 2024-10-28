"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { ArrowRight } from "lucide-react"
import React from "react"

function GridBackgroundDemo() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </div>
  )
}

export default function Home() {
  const handleGetStarted = () => {
    window.location.href = "/courses"
  }

  const handleStarOnGitHub = () => {
    window.open("https://github.com/hegdeadithyak/Brieffly", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden font-inter">
      {/* Navigation Bar with Star on GitHub Button */}
      <nav className="flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">Brieffly</div>

        {/* Updated Star on GitHub Button */}
        <motion.button
          onClick={handleStarOnGitHub}
          className="group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white bg-gray-800 rounded-lg shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="relative flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Star on GitHub
          </span>
        </motion.button>
      </nav>

      <GridBackgroundDemo />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-4">
          {/* Heading */}
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Brieffly: where formulas go on a diet!
          </h1>

          {/* Subheading */}
          <p className="text-3xl sm:text-3xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Get genius-level smarts in snack-sized cards—because who has time for long notes?
          </p>

          {/* Get Started Button */}
          <motion.button
            onClick={handleGetStarted}
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gray-800 rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="relative flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </motion.button>
        </div>
      </main>
    </div>
  )
}
