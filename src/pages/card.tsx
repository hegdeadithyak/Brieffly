import React from "react";
import "src/app/globals.css";

interface Option {
  A: string;
  B: string;
  C: string;
  D: string;
}

interface QuestionProps {
  question: {
    level?: string;
    title?: string;
    options?: Option[];
    answer?: string;
  };
}

const Card: React.FC<QuestionProps> = ({ question }) => {
  // Check if 'question' exists before destructuring
  if (!question) {
    return <div>Error: Question data is missing.</div>;
  }

  // Destructure with default values to avoid undefined errors
  const { level = "Unknown", title = "Untitled", options = [], answer = "N/A" } = question;

  return (
    <div className="border p-4 mb-4 w-full max-w-md rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">Level: {level}</p>

      {/* Render each option group */}
      {options.length > 0 ? (
        options.map((option, index) => (
          <ul key={index} className="list-none pl-5 mt-2 mb-4">
            <li className="text-sm text-gray-800">A. {option.A || "N/A"}</li>
            <li className="text-sm text-gray-800">B. {option.B || "N/A"}</li>
            <li className="text-sm text-gray-800">C. {option.C || "N/A"}</li>
            <li className="text-sm text-gray-800">D. {option.D || "N/A"}</li>
          </ul>
        ))
      ) : (
        <p>No options available.</p>
      )}

      <p className="text-sm text-green-600 font-bold">Correct Answer: {answer}</p>
    </div>
  );
};

export default Card;
