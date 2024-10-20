import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
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
          chapterName: "Organic Chemistry",
        });
        console.log("API Response:", response.data);
        if (response.data && Array.isArray(response.data.formulas)) {
          const formattedQuestions = response.data.formulas.map((item: any) => ({
            level: item.level,
            title: item.title,
            options: item.Options,
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

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Card key={index} question={question} />
        ))
      ) : (
        <p>No questions available</p>
      )}
    </div>
  );
};

export default Home;
