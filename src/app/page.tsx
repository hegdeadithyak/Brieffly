"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
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

        {/* Updated Star on GitHub Button - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white transition-colors duration-300"
            onClick={() => window.open("https://github.com/hegdeadithyak/Brieffly", "_blank")}
          >
            <Star className="mr-2 h-4 w-4" />
            Star on GitHub
          </Button>
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
            <Button
              variant="outline"
              size="lg"
              className="bg-black/50 backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white transition-colors duration-300"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
