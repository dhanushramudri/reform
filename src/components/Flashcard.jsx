import React, { useState } from "react";
import "../App.css";

const Flashcard = ({ question, answer, incorrect_answers, options }) => {
  const [flip, setFlip] = useState(true);
  const handleClick = () => {
    setFlip(!flip);
  };

  console.log(options);

  return (
    <div className="flashcard" onClick={handleClick}>
      {flip ? (
        <>
          <div className="question">{question}</div>
          <div className="options">
            {options.map((in_ans, idx) => (
              <div key={idx}>{in_ans}</div>
            ))}
          </div>
        </>
      ) : (
        <div className="answer">{answer}</div>
      )}
    </div>
  );
};

export default Flashcard;
