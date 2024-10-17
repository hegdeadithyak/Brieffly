import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

interface Option {
  A: string;
  B: string;
  C: string;
  D: string;
}

interface Question {
  level: string;
  title: string;
  options: Option[];
  answer: string;
}

const Home = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("/api/formulas", {
          chapterName: "Integration",
        });
        if (Array.isArray(response.data)) {
          const formattedQuestions = response.data.map((item: any) => ({
            level: item.level,
            title: item.title,
            options: item.Options, // Ensure the correct case for 'Options'
            answer: item.answer,
          }));
          setQuestions(formattedQuestions);
        } else {
          setError("Invalid data format received from API");
        }
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "API request failed");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} question={question} />
      ))}
    </div>
  );
};

export default Home;
