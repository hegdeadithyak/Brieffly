"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Search, X } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover_border_gradient"
import { Navbar } from "@/components/ui/navbar-menu"
import React, { useState, useEffect } from "react"
import { account } from "src/appwrite"
import { useRouter } from "next/navigation"

function GridBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  )
}

//@ts-ignore
function GradientButton({ children, onClick, icon: Icon }) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="bg-black/50 backdrop-blur-sm text-white flex items-center space-x-2 px-6 py-2"
      onClick={onClick}
    >
      <span>{children}</span>
      <Icon className="ml-2 h-5 w-5 text-white" />
    </HoverBorderGradient>
  )
}

//@ts-ignore
function AnimatedSearchBar({ isOpen, setIsOpen, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e:any) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.form
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex items-center w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search formulas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <motion.button
            type="submit"
            className="absolute right-2 p-2 text-gray-600 hover:text-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="h-5 w-5" />
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

export default function Home() {
  const router = useRouter()
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    async function checkUser() {
      try {
        const user = await account.get()
        console.log("User:", user)
        setIsUserSignedIn(true)
      } catch (error) {
        console.error("User not signed in:", error)
        setIsUserSignedIn(false)
      }
    }
    checkUser()
  }, [])

  const handleGetStarted = () => {
    if (isUserSignedIn) {
      router.push("/courses")
    } else {
      router.push("/signin")
    }
  }
//@ts-ignore

  const handleSearch = (searchTerm) => {
    if (isUserSignedIn) {
      router.push(`/search_card?subject=${encodeURIComponent(searchTerm.trim())}`)
    } else {
      router.push("/signin")
    }
  }

  const handleStarOnGit = () => {
    window.open("https://github.com/hegdeadithyak/Brieffly", "_blank")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden font-inter">
     
      <Navbar />

      <GridBackground />

      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 120 }}
            className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
          >
            Brieffly: Formulas, Simplified!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
          >
            Ace exams with quick, bite-sized cards that make complex formulas easy to digest—goodbye long notes, hello smart studying!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <GradientButton onClick={handleGetStarted} icon={ArrowRight}>
                Get Started
              </GradientButton>
              <GradientButton onClick={() => setIsSearchOpen(!isSearchOpen)} icon={isSearchOpen ? X : Search}>
                {isSearchOpen ? "Close Search" : "Search Formulas"}
              </GradientButton>
              <GradientButton onClick={handleStarOnGit} icon={ArrowRight}>
                Star on GitHub
              </GradientButton>
            </div>
            <AnimatedSearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} onSearch={handleSearch} />
          </motion.div>
        </div>
      </main>
    </div>
  )
}