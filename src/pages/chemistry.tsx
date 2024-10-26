"use client"

import { motion } from "framer-motion"
import { FlaskConical, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BackgroundGradient } from "src/components/ui/background_gradient"
import "src/app/globals.css"
import { TypewriterEffectSmooth } from "src/components/ui/typewriter-effect";

const chapters = [
  // Class 11
  { id: 1, title: "Some Basic Concepts of Chemistry", class: 11 },
  { id: 2, title: "Structure of Atom", class: 11 },
  { id: 3, title: "Classification of Elements and Periodicity in Properties", class: 11 },
  { id: 4, title: "Chemical Bonding and Molecular Structure", class: 11 },
  { id: 5, title: "States of Matter", class: 11 },
  { id: 6, title: "Thermodynamics", class: 11 },
  { id: 7, title: "Equilibrium", class: 11 },
  { id: 8, title: "Redox Reactions", class: 11 },
  { id: 9, title: "Hydrogen", class: 11 },
  { id: 10, title: "s-Block Elements", class: 11 },
  { id: 11, title: "p-Block Elements", class: 11 },
  { id: 12, title: "Organic Chemistry: Some Basic Principles and Techniques", class: 11 },
  { id: 13, title: "Hydrocarbons", class: 11 },
  { id: 14, title: "Environmental Chemistry", class: 11 },
  // Class 12
  { id: 15, title: "Solid State", class: 12 },
  { id: 16, title: "Solutions", class: 12 },
  { id: 17, title: "Electrochemistry", class: 12 },
  { id: 18, title: "Chemical Kinetics", class: 12 },
  { id: 19, title: "Surface Chemistry", class: 12 },
  { id: 20, title: "General Principles and Processes of Isolation of Elements", class: 12 },
  { id: 21, title: "p-Block Elements", class: 12 },
  { id: 22, title: "d and f Block Elements", class: 12 },
  { id: 23, title: "Coordination Compounds", class: 12 },
  { id: 24, title: "Haloalkanes and Haloarenes", class: 12 },
  { id: 25, title: "Alcohols, Phenols and Ethers", class: 12 },
  { id: 26, title: "Aldehydes, Ketones and Carboxylic Acids", class: 12 },
  { id: 27, title: "Organic Compounds Containing Nitrogen", class: 12 },
  { id: 28, title: "Biomolecules", class: 12 },
  { id: 29, title: "Polymers", class: 12 },
  { id: 30, title: "Chemistry in Everyday Life", class: 12 },
]

export default function ChemistryChaptersPage() {
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
        <h1 className="text-4xl font-bold text-white mb-8 text-center">IIT JEE Chemistry Chapters</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4 ">Class 11</h2>
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
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 min-h-[200px]">
      <BackgroundGradient className="bg-black dark:bg-zinc-900 h-full">
      <div className="flex items-center mb-4">
        <FlaskConical className="text-blue-400 mr-2" />
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
