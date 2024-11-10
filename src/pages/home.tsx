"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "./card";
import Link from "next/link";
import "src/app/globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid";

interface Question {
  level: string;
  title: string;
  options: string[];
  answer: string;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [chapterName, setChapterName] = useState<string>("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const chaptername = urlParams.get("subject") || "demo";

      setChapterName(chaptername);
      try {
        const response = await axios.post("/api/formulas", {
          chapterName: chaptername,
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
          console.log(formattedQuestions);
          setQuestions(formattedQuestions);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Something went wrong on our side"
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto" />
          <p className="mt-4 text-gray-300 font-medium">Loading questions...</p>
          <p className="mt-4 text-gray-300 font-small">
            Kindly refresh the page, if you cannot see formulas in Latex.
          </p>
        </div>
      );
    }

    if (error) {
      return (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white p-8 rounded-lg border border-gray-200 max-w-md text-center shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <RefreshCcw className="w-12 h-12 text-gray-800" />
            </motion.div>
            <h3 className="text-gray-800 font-semibold text-xl mb-4">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-4">
              Hold on, we're working on it. The page will refresh shortly...
            </p>
          </motion.div>
        </AnimatePresence>
      );
    }

    return (
      <div className="w-full space-y-8 relative z-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {chapterName} Quiz
          </h1>
          <p className="text-gray-400">
            Navigate through questions using the buttons below
          </p>
        </header>

        {questions.length > 0 ? (
          <div className="flex flex-col items-center justify-center relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCardIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-center justify-center">
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
            <Button
              variant="ghost"
              className="text-blue-400 hover:text-blue-300"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        {renderContent()}
      </div>
    </div>
  );
}
