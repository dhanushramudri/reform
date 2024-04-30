import React from "react";
import Flashcardlist from "./Flashcardlist";

const Home = () => {
  const SAMPLE_QUESTIONS = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the capital of Spain?",
      answer: "Madrid",
    },
    {
      id: 3,
      question: "What is the capital of Germany?",
      answer: "Berlin",
    },
  ];
  return (
    <div>
      <Flashcardlist sample_questions={SAMPLE_QUESTIONS} />
    </div>
  );
};

export default Home;
