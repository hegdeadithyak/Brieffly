"use client"

import { motion } from "framer-motion"
import { Book, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "src/app/globals.css"

const chapters = [
  // Class 11
  { id: 1, title: "Sets and Functions", class: 11 },
  { id: 2, title: "Trigonometric Functions", class: 11 },
  { id: 3, title: "Principle of Mathematical Induction", class: 11 },
  { id: 4, title: "Complex Numbers and Quadratic Equations", class: 11 },
  { id: 5, title: "Linear Inequalities", class: 11 },
  { id: 6, title: "Permutations and Combinations", class: 11 },
  { id: 7, title: "Binomial Theorem", class: 11 },
  { id: 8, title: "Sequences and Series", class: 11 },
  { id: 9, title: "Straight Lines", class: 11 },
  { id: 10, title: "Conic Sections", class: 11 },
  { id: 11, title: "Introduction to Three-dimensional Geometry", class: 11 },
  { id: 12, title: "Limits and Derivatives", class: 11 },
  { id: 13, title: "Mathematical Reasoning", class: 11 },
  { id: 14, title: "Statistics", class: 11 },
  { id: 15, title: "Probability", class: 11 },
  // Class 12
  { id: 16, title: "Relations and Functions", class: 12 },
  { id: 17, title: "Inverse Trigonometric Functions", class: 12 },
  { id: 18, title: "Matrices", class: 12 },
  { id: 19, title: "Determinants", class: 12 },
  { id: 20, title: "Continuity and Differentiability", class: 12 },
  { id: 21, title: "Applications of Derivatives", class: 12 },
  { id: 22, title: "Integrals", class: 12 },
  { id: 23, title: "Applications of Integrals", class: 12 },
  { id: 24, title: "Differential Equations", class: 12 },
  { id: 25, title: "Vector Algebra", class: 12 },
  { id: 26, title: "Three-dimensional Geometry", class: 12 },
  { id: 27, title: "Linear Programming", class: 12 },
  { id: 28, title: "Probability", class: 12 },
]

export default function MathChaptersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <nav className="w-full p-4 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">Brieffly</Link>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700">
            Back to Home
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">IIT JEE Mathematics Chapters</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Class 11</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.filter(chapter => chapter.class === 11).map((chapter, index) => (
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
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Class 12</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.filter(chapter => chapter.class === 12).map((chapter, index) => (
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
        </div>
      </main>
    </div>
  )
}

function ChapterCard({ chapter }: { chapter: { id: number; title: string; class: number } }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700">
      <div className="flex items-center mb-4">
        <Book className="text-blue-400 mr-2" />
        <h3 className="text-xl font-semibold text-white">{chapter.title}</h3>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Class {chapter.class}</span>
        <Link href={`/home?subject=${encodeURIComponent(chapter.title)}`} passHref>
          <Button variant="ghost" className="text-white hover:text-blue-400">
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}