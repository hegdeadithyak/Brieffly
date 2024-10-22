import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';

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
  const [showAnswer, setShowAnswer] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isCorrect = (option: string) => {
    return selectedAnswer === option && option === question.answer;
  };

  const isIncorrect = (option: string) => {
    return selectedAnswer === option && option !== question.answer;
  };

  return (
    <div className="max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{question.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(question.level)}`}>
          {question.level}
        </span>
      </div>

      {/* Options */}
      <div className="space-y-2 mt-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between
              ${selectedAnswer === option ? 'border-2' : 'border border-gray-200'}
              ${isCorrect(option) ? 'bg-green-50 border-green-500 text-green-700' : ''}
              ${isIncorrect(option) ? 'bg-red-50 border-red-500 text-red-700' : ''}
              ${!selectedAnswer ? 'hover:bg-gray-50 hover:border-gray-300' : ''}
              ${selectedAnswer && selectedAnswer !== option ? 'opacity-70' : ''}`}
            disabled={selectedAnswer !== null}
          >
            <span className="flex-1">{option}</span>
            {isCorrect(option) && <Check className="w-5 h-5 text-green-600" />}
            {isIncorrect(option) && <X className="w-5 h-5 text-red-600" />}
          </button>
        ))}
      </div>

      {/* Show Answer Button */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          <span>Show Answer</span>
          {showAnswer ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {showAnswer && (
          <div className="mt-2 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-800">
              <span className="font-medium">Correct Answer:</span>{' '}
              {question.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;