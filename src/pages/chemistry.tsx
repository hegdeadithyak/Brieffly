"use client"

import { motion } from "framer-motion"
import { Book, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import "src/app/globals.css"
import { useState } from "react"

function GridBackgroundDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <div className="absolute inset-0 bg-black bg-grid-white/[0.2] opacity-50" />
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <motion.div
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/0" />
    </div>
  );
}

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

export default function Component() {
  const words = [
    { text: "IIT JEE Chemistry", className: "text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500" },
    { text: "Chapters", className: "text-xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500" },
  ]

  return (
    <div className="relative min-h-screen bg-black font-inter overflow-hidden">
      <GridBackgroundDemo />
      <div className="relative z-10">
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
              <h2 className="text-3xl font-bold mb-6 text-xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">Class {classNum}</h2>
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
    </div>
  )
}

function ChapterCard({ chapter }: { chapter: { id: number; title: string; class: number } }) {
  return (
    <Card className="bg-black/50 border-gray-800 hover:bg-black/70 transition-colors duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 font-inter flex items-center">
          <Book className="mr-2 h-5 w-5" color="white" />
          {chapter.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="bg-primary/20 text-l sm:text-l font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral800-200 to-neutral-200">
          Class {chapter.class}
        </Badge>
      </CardContent>
      <CardFooter className="pt-3 text-white">
        <Link href={`/home?subject=${encodeURIComponent(chapter.title)}`} passHref className="w-full">
          <Button
            variant="secondary"
            className="w-full bg-primary/10 hover:bg-primary/20 text-primary-foreground"
          >
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}