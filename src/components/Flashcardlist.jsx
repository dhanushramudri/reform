import React, { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import "../App.css";

const Flashcardlist = ({ sample_questions }) => {
  const options = sample_questions.map((ques) => {
    const allOptions = [...ques.incorrect_answers, ques.answer];

    const shuffleOptions = shuffleArray(allOptions);
    return shuffleOptions;
  });

  return (
    <div className="flashcardlist">
      {sample_questions.map((ques, idx) => {
        return (
          <Flashcard
            key={idx}
            question={ques.question}
            answer={ques.answer}
            incorrect_answers={ques.incorrect_answers}
            options={options[idx]}
          />
        );
      })}
    </div>
  );
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Flashcardlist;
