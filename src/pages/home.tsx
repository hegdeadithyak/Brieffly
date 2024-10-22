import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./card";
import { Loader2 } from "lucide-react";
import "src/app/globals.css";


interface Option {
  A: string;
  B: string;
  C: string;
  D: string;
}

interface Question {
  level: string;
  title: string;
  options: string[];
  answer: string;
}

const Home = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("/api/formulas", {
          chapterName: "Integrations",
        });
        if (response.data && Array.isArray(response.data.formulas)) {
          const formattedQuestions = response.data.formulas.map(
            (item: any) => ({
              level: item.level,
              title: item.title,
              options: item.Options,
              answer: item.answer,
            })
          );
          setQuestions(formattedQuestions);
        } else {
          setError("Invalid data format received from API");
        }
      } catch (err: any) {
        setError(
          err.response?.data?.message || err.message || "API request failed"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = window.scrollY + window.innerHeight;
        const containerBottom = container.offsetTop + container.offsetHeight;
        
        const scrollPercentage = (scrollPosition / containerBottom) * 100;
        const newVisibleCards = Math.ceil((scrollPercentage / 100) * questions.length);
        
        setVisibleCards(Math.min(newVisibleCards, questions.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [questions.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto" />
          <p className="mt-4 text-gray-600 font-medium">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 p-6 rounded-lg border border-red-200 max-w-md">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Questions</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Organic Chemistry Quiz
          </h1>
          <p className="text-gray-600">
            Scroll down to reveal more questions
          </p>
        </header>

        {questions.length > 0 ? (
          questions.slice(0, visibleCards).map((question, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
              }}
            >
              <Card question={question} />
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600">No questions available</p>
          </div>
        )}

        {visibleCards < questions.length && (
          <div className="text-center py-8">
            <div className="animate-bounce inline-block">
              <div className="w-8 h-8 border-t-4 border-blue-500 rounded-full mx-auto"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Scroll for more questions</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

