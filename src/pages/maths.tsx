"use client"

import { motion } from "framer-motion"
import { Book, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { BackgroundGradient } from "@/components/ui/background_gradient"
import "src/app/globals.css"

const chapters = [
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

export default function Component() {
  const words = [
    { text: "IIT JEE Mathematics", className: "bg-clip-text text-transparent text-white from-neutral-200 to-neutral-500" },
    { text: "Chapters", className: "bg-clip-text text-white from-neutral-200 to-neutral-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b bg-black font-inter">
      <nav className="w-full p-4 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Brieffly
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white/20">
            Back to Home
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <TypewriterEffectSmooth words={words} />
        </div>

        {[11, 12].map((classNum) => (
          <div key={classNum} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Class {classNum}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters
                .filter((chapter) => chapter.class === classNum)
                .map((chapter, index) => (
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
        ))}
      </main>
    </div>
  )
}

function ChapterCard({ chapter }: { chapter: { id: number; title: string; class: number } }) {
  return (
    <div className="relative p-[2px] rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl animate-gradient"></div>
      <div className="relative bg-black rounded-xl p-6 h-full transition-all duration-300">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <Book className="text-gray-800 mr-3 h-5 w-5" />
            <h3 className="text-lg font-semibold text-white line-clamp-2">{chapter.title}</h3>
          </div>
          <div className="mt-auto flex justify-between items-center pt-4">
            <span className="text-sm text-black">Class {chapter.class}</span>
            <Link href={`/home?subject=${encodeURIComponent(chapter.title)}`} passHref>
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-gray-900 hover:bg-black transition-colors duration-300"
              >
                Start
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}