'use client'

import React, { useState } from "react"
import { Check, X, RotateCcw } from "lucide-react"
import confetti from "canvas-confetti"
import { MathJax, MathJaxContext } from "better-react-mathjax"
import "src/app/globals.css"

interface Option {
  option: string
}

interface Question {
  level: string
  title: string
  options: string[]
  answer: string
}

interface CardProps {
  question: Question
}

const Card: React.FC<CardProps> = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showTryAgain, setShowTryAgain] = useState(false)

  const getLevelColor = (level: string) => {
    const colors = {
      easy: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      hard: "bg-red-100 text-red-800",
    }
    return colors[level.toLowerCase() as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const answerLabels = ["a", "b", "c", "d"]

  const isCorrect = (option: string, index: number) =>
    answerLabels[index] === question.answer.trim().toLowerCase()

  const isIncorrect = (option: string, index: number) =>
    selectedAnswer === option && !isCorrect(option, index)

  const handleAnswerSelection = (option: string, index: number) => {
    setSelectedAnswer(option)
    if (isCorrect(option, index)) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      setShowTryAgain(false)
    } else {
      setShowTryAgain(true)
    }
  }

  const handleTryAgain = () => {
    setSelectedAnswer(null)
    setShowTryAgain(false)
  }

  if (!question) return <div>Loading...</div>

  return (
    <MathJaxContext>
      <div className="max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">
            <span className="font-bold">
              <p>{question.title}</p>
            </span>
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(question.level || "Easy")}`}
          >
            {question.level}
          </span>
        </div>

        <div className="space-y-2 mt-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option, index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between
                ${selectedAnswer === option ? "border-2" : "border border-gray-200"}
                ${isCorrect(option, index) && selectedAnswer === option ? "bg-green-50 border-green-500 text-green-700" : ""}
                ${isIncorrect(option, index) ? "bg-red-50 border-red-500 text-red-700" : ""}
                ${!selectedAnswer ? "hover:bg-gray-50 hover:border-gray-300" : ""}
                ${selectedAnswer && selectedAnswer !== option ? "opacity-70" : ""}`}
              disabled={!!selectedAnswer}
            >
              <span className="flex-1">
                <MathJax inline dynamic>{`\$$${option}\$$`}</MathJax>
              </span>
              {isCorrect(option, index) && selectedAnswer === option && <Check className="w-5 h-5 text-green-600" />}
              {isIncorrect(option, index) && <X className="w-5 h-5 text-red-600" />}
            </button>
          ))}
        </div>
        {showTryAgain && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleTryAgain}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </button>
          </div>
        )}
      </div>
    </MathJaxContext>
  )
}

export default Card