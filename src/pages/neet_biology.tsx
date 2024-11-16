"use client";

import { motion } from "framer-motion";
import { Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { GridBackgroundDemo } from "@/components/ui/grid";
import "src/app/globals.css";

// NEET Biology Chapters
const biologyChapters = [
  { id: 1, title: "Diversity in Living World", class: 11 },
  { id: 2, title: "Structural Organization in Animals and Plants", class: 11 },
  { id: 3, title: "Cell Structure and Function", class: 11 },
  { id: 4, title: "Plant Physiology", class: 11 },
  { id: 5, title: "Human Physiology", class: 11 },
  { id: 6, title: "Reproduction", class: 12 },
  { id: 7, title: "Genetics and Evolution", class: 12 },
  { id: 8, title: "Biology and Human Welfare", class: 12 },
  { id: 9, title: "Biotechnology and Its Applications", class: 12 },
  { id: 10, title: "Ecology and Environment", class: 12 },
];

// Chapters for navigation
const chapters = [
  { id: 1, title: "Biology", path: "/neet_biology" },
  { id: 2, title: "Physics", path: "/neet_physics" },
  { id: 3, title: "Chemistry", path: "/neet_chemistry" },
];

export default function BiologyComponent() {
  const words = [
    {
      text: "NEET Biology",
      className:
        "text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500",
    },
    {
      text: "Chapters",
      className:
        "text-xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black font-inter overflow-hidden">
      <GridBackgroundDemo />
      <div className="relative z-10">
        <nav className="w-full p-4 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Brieffly
            </Link>
            <Link href="/" passHref>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
            <TypewriterEffectSmooth words={words} />
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-inter mb-6  sm:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
              Biology Chapters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {biologyChapters.map((chapter, index) => (
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

          {/* Additional section for other subjects */}
          <div className="mb-12">
            <h2 className="text-3xl font-inter mb-6  sm:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
              Other Subjects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SubjectCard subject={subject} />
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ChapterCard({
  chapter,
}: {
  chapter: { id: number; title: string; class: number };
}) {
  return (
    <Card className="bg-black/50 border-gray-800 hover:bg-black/70 transition-colors duration-300">
      <CardHeader className="pb-3">
        <CardTitle className=" text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 font-inter flex items-center">
          <Book className="mr-2 h-5 w-5" color="white" />
          {chapter.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge
          variant="secondary"
          className="bg-primary/20 text-l sm:text-l font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-200"
        >
          Class {chapter.class}
        </Badge>
      </CardContent>
      <CardFooter className="pt-3 text-white">
        <Link
          href={`/home?subject=${encodeURIComponent(chapter.title)}`}
          passHref
          className="w-full"
        >
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
  );
}

function SubjectCard({
  subject,
}: {
  subject: { id: number; title: string; path: string };
}) {
  return (
    <Card className="bg-black/50 border-gray-800 hover:bg-black/70 transition-colors duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 font-inter flex items-center">
          <Book className="mr-2 h-5 w-5" color="white" />
          {subject.title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="pt-3 text-white">
        <Link href={subject.path} passHref className="w-full">
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
  );
}
