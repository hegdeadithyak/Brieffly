'use client'

import { motion } from "framer-motion"
import { Book, LogOut, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "src/app/globals.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation" // Corrected import for app-based routing
import { account } from "../appwrite"
import { sessionId } from "./signin"

// Define your chapters array
const chapters = [
  { id: 2, title: "Mathematics", progress: 25, path: "/maths" },
  { id: 3, title: "Physics", progress: 50, path: "/physics" },
  { id: 4, title: "Chemistry", progress: 75, path: "/chemistry" },
]

function GridDotBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  )
}

export default function ChaptersPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      const accout_user = await account.get()
      if (accout_user) {
        await account.deleteSession("")
        router.push("/")
      }
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-black font-inter overflow-hidden">
      <GridDotBackground />
      {isLoggingOut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg text-white text-center"
          >
            <Loader2 className="w-12 h-12 mb-4 mx-auto animate-spin text-blue-500" />
            <h2 className="text-2xl font-bold mb-2">Logging Out</h2>
            <p className="text-gray-400">Please wait while we securely log you out...</p>
          </motion.div>
        </motion.div>
      )}
      <nav className="relative w-full p-4 from-black to-white backdrop-blur-sm top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            Brieffly
          </Link>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-gray-800 transition-colors"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing Out
              </>
            ) : (
              <>
                Sign Out
                <LogOut className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Learning Journey
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-3 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ChapterCard chapter={chapter} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

function ChapterCard({ chapter }: { chapter: { id: number; title: string; progress: number; path: string } }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out border border-gray-800"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Book className="text-gray-400 mr-3 h-6 w-6" />
            <h2 className="text-xl font-semibold text-white">{chapter.title}</h2>
          </div>
        </div>
        <div className="flex justify-between items-center relative z-10">
          <Link href={chapter.path}>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
