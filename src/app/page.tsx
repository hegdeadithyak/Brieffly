"use client"

import { motion } from "framer-motion"
import { ArrowRight, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const isSignedIn = false // This should be replaced with actual auth state

  const handlegetstarted = () => {
    window.location.href = "/chapters";
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col relative overflow-hidden">
      <nav className="w-full p-4 relative z-10 bg-gray-900">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center"
        >
          <div className="flex space-x-4">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <Link href={isSignedIn ? "/chapters" : "/signin"} passHref>
            <Button variant="outline" className="text-white border-white hover:bg-gray-700">
              {isSignedIn ? "My Chapters" : "Sign In"}
              <LogIn className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </nav>

      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Brieffly: where formulas go on a diet!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-300"
          >
            Get genius-level smarts in snack-sized cards—because who has time for long notes?
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handlegetstarted}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </main>

      <BackgroundAnimation />
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 font-semibold text-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        animate={{
          background: [
            "linear-gradient(to bottom right, #1a202c, #2d3748, #000000)",
            "linear-gradient(to bottom right, #2d3748, #1a202c, #000000)",
            "linear-gradient(to bottom right, #1a202c, #2d3748, #000000)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}