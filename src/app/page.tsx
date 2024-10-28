"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover_border_gradient"
import { Navbar } from "@/components/ui/navbar-menu"
import React, { useState } from "react"

function GridBackgroundDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0">
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

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden font-inter">
      {/* Navigation Bar with Star on GitHub Button */}
      <nav className="flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <Navbar />
        </motion.div>

        {/* Animated Star on GitHub Button - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.a
            href="https://github.com/hegdeadithyak/Brieffly"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black/50 backdrop-blur-sm text-white flex items-center space-x-2 px-4 py-2 overflow-hidden"
            >
              <motion.span
                initial={{ backgroundPosition: "0 0" }}
                animate={{ backgroundPosition: ["0 0", "100% 0", "0 0"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#fff,#fff,#9ca3af,#fff,#fff)] bg-[length:200%_100%]"
              >
                Star on GitHub
              </motion.span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Star className="ml-2 h-5 w-5 text-yellow-400" />
              </motion.div>
            </HoverBorderGradient>
          </motion.a>
        </motion.div>
      </nav>

      <GridBackgroundDemo />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-4">
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 120 }}
            className="relative inline-block"
          >
            <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Brieffly: where formulas go on a diet!
            </h1>
          </motion.div>

          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-3xl sm:text-3xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
          >
            Get genius-level smarts in snack-sized cards—because who has time for long notes?
          </motion.p>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black/50 backdrop-blur-sm text-white flex items-center space-x-2 px-6 py-3"
              onClick={handleGetStarted}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 text-white" />
            </HoverBorderGradient>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
