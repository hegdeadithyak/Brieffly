'use client';

import React, { useState } from "react";
import { Check, X } from "lucide-react";
import Latex from "react-latex-next";
import confetti from "canvas-confetti";
import "katex/dist/katex.min.css";

interface Option {
  option: string;
}

interface Question {
  level: string;
  title: string;
  options: string[];
  answer: string;
}

interface CardProps {
  question: Question;
}

const Card: React.FC<CardProps> = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isIncorrectAttempt, setIsIncorrectAttempt] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const arr: string[] = ["a", "b", "c", "d"];
  const isCorrect = (option: string, index: number) => {
    return arr[index] === question.answer.trim().toLowerCase();
  };

  const isIncorrect = (option: string, index: number) => {
    return selectedAnswer === option && !isCorrect(option, index);
  };

  const handleAnswerSelection = (option: string, index: number) => {
    setSelectedAnswer(option);
    if (isCorrect(option, index)) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setIsIncorrectAttempt(false); 
    } else {
      setIsIncorrectAttempt(true); 
    }
  };

  const resetSelection = () => {
    setSelectedAnswer(null);
    setIsIncorrectAttempt(false);
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl w-full sm:px-6 px-4 py-6 bg-white rounded-xl shadow-lg space-y-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800 break-words sm:text-xl ">
          <Latex>{question.title}</Latex>
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
            question.level || "Easy"
          )}`}
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
            disabled={selectedAnswer !== null}
          >
            <span className="flex-1 break-words">
              <Latex>{option}</Latex>
            </span>
            {isCorrect(option, index) && selectedAnswer === option && <Check className="w-5 h-5 text-green-600" />}
            {isIncorrect(option, index) && <X className="w-5 h-5 text-red-600" />}
          </button>
        ))}
      </div>

      {isIncorrectAttempt && (
        <div className="flex justify-center mt-4">
          <button
            onClick={resetSelection}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Wrong Option Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
