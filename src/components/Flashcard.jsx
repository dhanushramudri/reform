import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [flip, setFlip] = useState(true);
  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      {flip ? <div>{question}</div> : <div>{answer}</div>}
    </div>
  );
};

export default Flashcard;
