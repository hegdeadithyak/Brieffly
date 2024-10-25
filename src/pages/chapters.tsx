"use client"

import { motion } from "framer-motion"
import { Book, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BackgroundGradient } from "src/components/ui/background_gradient"
import "src/app/globals.css"

const chapters = [
  { id: 1, title: "Introduction to Briefly", progress: 0, path: "/introduction" },
  { id: 2, title: "Mathematics", progress: 0, path: "/maths" },
  { id: 3, title: "Physics", progress: 0, path: "/physics" },
  { id: 4, title: "Chemistry", progress: 0, path: "/chemistry" },
  { id: 5, title: "Biology", progress: 0, path: "/biology" },
]

export default function ChaptersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <nav className="w-full p-4 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">Briefly</Link>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700">
            Sign Out
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">My Chapters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <div className="rounded-[22px] max-w-sm p-4 sm:p-10">
      <BackgroundGradient className="bg-white dark:bg-zinc-900">
        <div className="flex items-center mb-4">
          <Book className="text-blue-400 mr-2" />
          <h2 className="text-xl font-semibold text-black dark:text-white">{chapter.title}</h2>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${chapter.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{chapter.progress}% Complete</span>
          <Link href={chapter.path}>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
              <span>Continue</span>
            </button>
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  )
}
