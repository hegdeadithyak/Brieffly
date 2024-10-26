// components/Card.tsx
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

interface Option {
  option: string;
}

interface Question {
  level: string;
  title: string;
  options: string[];
  answer: string; // This should be the first character of the correct option
}

interface CardProps {
  question: Question;
}

const Card: React.FC<CardProps> = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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

  const isCorrect = (option: string) => {
    // console.log(option.trim().toLowerCase()[0], question.answer.trim().toLowerCase());
    return option.trim().toLowerCase()[0] === question.answer.trim().toLowerCase();
  };

  const isIncorrect = (option: string) => {
    // console.log(option.trim().toLowerCase()[0], question.answer.trim().toLowerCase());
    return selectedAnswer === option && !isCorrect(option);
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">
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
            onClick={() => setSelectedAnswer(option)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between
              ${selectedAnswer === option ? "border-2" : "border border-gray-200"}
              ${isCorrect(option) && selectedAnswer === option ? "bg-green-50 border-green-500 text-green-700" : ""}
              ${isIncorrect(option) ? "bg-red-50 border-red-500 text-red-700" : ""}
              ${!selectedAnswer ? "hover:bg-gray-50 hover:border-gray-300" : ""}
              ${selectedAnswer && selectedAnswer !== option ? "opacity-70" : ""}`}
            disabled={selectedAnswer !== null}
          >
            <span className="flex-1">
              <Latex>{option}</Latex>
            </span>
            {isCorrect(option) && selectedAnswer === option && <Check className="w-5 h-5 text-green-600" />}
            {isIncorrect(option) && <X className="w-5 h-5 text-red-600" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
