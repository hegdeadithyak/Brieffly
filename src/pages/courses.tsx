'use client'

import { motion } from "framer-motion"
import { Book, LogOut, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "src/app/globals.css"
import { useState } from "react"

// Define your exams array
const exams = [
  { id: 1, title: "IIT JEE",  path: "/iitjee" },
  { id: 2, title: "UPSC",  path: "/upsc" },
  { id: 3, title: "NEET",  path: "/neet" },
  { id: 4, title: "BANKING",  path: "/banking11" },
  { id: 5, title: "SSC",  path: "/ssc" },
]

function GridDotBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

export default function ExamsPage() {
  return (
    <div className="relative min-h-screen bg-black font-inter overflow-hidden">
      <GridDotBackground />
      <nav className="relative w-full p-4 from-black to-white backdrop-blur-sm top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            Brieffly
          </Link>
          <Button variant="outline" className="text-white border-white hover:bg-gray-800 transition-colors">
            Sign Out
            <LogOut className="ml-2 h-4 w-4" />
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
          My Exam Preparation Journey
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-3 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExamCard exam={exam} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

function ExamCard({ exam }: { exam: { id: number; title: string; path: string } }) {
  const [isHovered, setIsHovered] = useState(false);

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
            <h2 className="text-xl font-semibold text-white">{exam.title}</h2>
          </div>
        </div>
        <div className="flex justify-between items-center relative z-10">
          <Link href={exam.path}>
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
