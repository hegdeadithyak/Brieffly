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

// UPSC Preliminary Exam GS-I Topics
const chapters = [
  { id: 1, title: "Current Events of National Importance" },
  { id: 2, title: "History of India" },
  { id: 3, title: "Indian National Movement" },
  { id: 4, title: "Indian and World Geography" },
  { id: 5, title: "Indian Polity and Governance" },
  { id: 6, title: "Economic and Social Development" },
  { id: 7, title: "General Science" },
  { id: 8, title: "Environmental Ecology" },
  { id: 9, title: "Biodiversity and Climate Change" },
  { id: 10, title: "Technology in India" },
  { id: 11, title: "Social Issues in India" },
  { id: 12, title: "Disaster Management" },
];

export default function Component() {
  const words = [
    {
      text: "UPSC Preliminary Examination",
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
              Preliminary Examination Topics
            </h2>
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
          </div>
        </main>
      </div>
    </div>
  );
}

function ChapterCard({ chapter }: { chapter: { id: number; title: string } }) {
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
          className="bg-primary/20 text-l sm:text-l font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral800-200 to-neutral-200"
        >
          UPSC Chapter
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
