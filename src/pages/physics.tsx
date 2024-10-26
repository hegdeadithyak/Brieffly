"use client"

import { motion } from "framer-motion"
import { Atom, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "src/app/globals.css"
import { BackgroundGradient } from "src/components/ui/background_gradient"
import { TypewriterEffectSmooth } from "src/components/ui/typewriter-effect";

const chapters = [
  // Class 11
  { id: 1, title: "Physical World and Measurement", class: 11 },
  { id: 2, title: "Kinematics", class: 11 },
  { id: 3, title: "Laws of Motion", class: 11 },
  { id: 4, title: "Work, Energy and Power", class: 11 },
  { id: 5, title: "Motion of System of Particles and Rigid Body", class: 11 },
  { id: 6, title: "Gravitation", class: 11 },
  { id: 7, title: "Properties of Bulk Matter", class: 11 },
  { id: 8, title: "Thermodynamics", class: 11 },
  { id: 9, title: "Behaviour of Perfect Gas and Kinetic Theory", class: 11 },
  { id: 10, title: "Oscillations and Waves", class: 11 },
  // Class 12
  { id: 11, title: "Electrostatics", class: 12 },
  { id: 12, title: "Current Electricity", class: 12 },
  { id: 13, title: "Magnetic Effects of Current and Magnetism", class: 12 },
  { id: 14, title: "Electromagnetic Induction and Alternating Currents", class: 12 },
  { id: 15, title: "Electromagnetic Waves", class: 12 },
  { id: 16, title: "Optics", class: 12 },
  { id: 17, title: "Dual Nature of Matter and Radiation", class: 12 },
  { id: 18, title: "Atoms and Nuclei", class: 12 },
  { id: 19, title: "Electronic Devices", class: 12 },
  { id: 20, title: "Communication Systems", class: 12 },
]

export default function PhysicsChaptersPage() {
  const words = [
    { text: "IIT JEE" },
    { text: "Physics" },
    { text: "Chapters" },
  ];

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
        
        {/* Typewriter effect for the heading */}
        <div className="text-center mb-8 text-white">
          <TypewriterEffectSmooth words={words} />
        </div>

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
      <BackgroundGradient className="bg-black dark:bg-zinc-900 h-full">
        <div className="flex items-center mb-4">
          <Atom className="text-blue-400 mr-2" />
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
      </BackgroundGradient>
    </div>
  )
}
