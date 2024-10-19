import React from "react";

interface Option {
  A: string;
  B: string;
  C: string;
  D: string;
}

interface QuestionProps {
  question: {
    level: string;
    title: string;
    options: Option[];
    answer: string;
  };
}


const Card: React.FC<QuestionProps> = ({ question }) => {
  const { level, title, options, answer } = question;

  return (
    <div className="border p-4 mb-4 w-full max-w-md rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">Level: {level}</p>

      {/* Render each option group */}
      {options.map((option, index) => (
        <ul key={index} className="list-none pl-5 mt-2 mb-4">
          <li className="text-sm text-gray-800">A. {option.A}</li>
          <li className="text-sm text-gray-800">B. {option.B}</li>
          <li className="text-sm text-gray-800">C. {option.C}</li>
          <li className="text-sm text-gray-800">D. {option.D}</li>
        </ul>
      ))}

      <p className="text-sm text-green-600 font-bold">Correct Answer: {answer}</p>
    </div>
  );
};

export default Card;
