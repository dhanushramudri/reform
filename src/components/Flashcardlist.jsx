import React, { useState } from "react";
import Flashcard from "./Flashcard";

const Flashcardlist = ({ sample_questions }) => {
  const [questions, setQuestions] = useState(sample_questions);
  return (
    <div>
      {sample_questions.map((ques, idx) => {
        return (
          <Flashcard key={idx} question={ques.question} answer={ques.answer} />
        );
      })}
    </div>
  );
};

export default Flashcardlist;
