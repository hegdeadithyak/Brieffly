"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "./card";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import "src/app/globals.css";

interface Question {
  level: string
  title: string
  options: string[]
  answer: string
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  const [chapterName, setChapterName] = useState<string>("")

  useEffect(() => {
    const fetchQuestions = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const chaptername = urlParams.get("subject") || "demo"

      setChapterName(chaptername)
      try {
        const response = await axios.post("/api/ssc", {
          chapterName: chaptername,
        })
        if (response.data && Array.isArray(response.data.formulas)) {
          const formattedQuestions = response.data.formulas.map((item: any) => ({
            level: item.level,
            title: item.title,
            options: item.Options,
            answer: item.answer,
          }))
          console.log(formattedQuestions)
          setQuestions(formattedQuestions)
        } else {
          setError("Invalid data format received from API")
          setTimeout(() => {
            window.location.reload()
          }, 3000)
        }
      } catch (err: any) {
        setError(
          err.response?.data?.message || err.message || "API request failed"
        )
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      } finally {
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [])

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1))
  }

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto" />
          <p className="mt-4 text-gray-300 font-medium">Loading questions...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-red-900 p-6 rounded-lg border border-red-700 max-w-md">
          <h3 className="text-red-200 font-semibold mb-2">Error Loading Questions</h3>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Meteors number={200} />
      </div>

      <div className="max-w-5xl w-full space-y-8 mx-auto relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            {chapterName} Quiz
          </h1>
          <p className="text-gray-400">
            Navigate through questions using the buttons below
          </p>
        </header>

        {questions.length > 0 ? (
          <div className="flex flex-col items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCardIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="items-center justify-items-center">
                  <Card question={questions[currentCardIndex]} />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex space-x-4">
              <Button
                onClick={handlePrev}
                disabled={currentCardIndex === 0}
                variant="outline"
                className="text-white border-white hover:bg-gray-700"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Prev
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentCardIndex === questions.length - 1}
                variant="outline"
                className="text-white border-white hover:bg-gray-700"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-300">No questions available</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}