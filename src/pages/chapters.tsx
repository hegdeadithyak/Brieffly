'use client'

import { motion } from "framer-motion"
import { Book, LogOut, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/Progress"
import Link from "next/link"
import { BackgroundGradient } from "@/components/ui/background_gradient"
import "src/app/globals.css"

const chapters = [
  { id: 1, title: "Introduction to Briefly", progress: 0, path: "/introduction" },
  { id: 2, title: "Mathematics", progress: 25, path: "/maths" },
  { id: 3, title: "Physics", progress: 50, path: "/physics" },
  { id: 4, title: "Chemistry", progress: 75, path: "/chemistry" },
  { id: 5, title: "Biology", progress: 100, path: "/biology" },
]

export default function ChaptersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black text-white">
      <nav className="w-full p-4 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            Brieffly
          </Link>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700 transition-colors">
            Sign Out
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Learning Journey
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  return (
    <BackgroundGradient className="rounded-xl overflow-hidden">
      <div className="bg-gray-900/80 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <Book className="text-blue-400 mr-3 h-6 w-6" />
            <h2 className="text-xl font-semibold text-white">{chapter.title}</h2>
          </div>
          {/* <Progress value={chapter.progress} className="mb-4" /> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{chapter.progress}% Complete</span>
          <Link href={chapter.path}>
            <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 transition-colors">
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </BackgroundGradient>
  )
}