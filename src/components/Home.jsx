import React, { useEffect, useState } from "react";
import Flashcardlist from "./Flashcardlist";
import Navbar from "./Navbar";
import "../App.css";

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Extracting questions from the data
        // console.log(data);
        const questions = data.results.map((result, index) => ({
          id: index + 1,
          question: result.question,
          answer: result.correct_answer,
          incorrect_answers: result.incorrect_answers,
        }));
        setFetchedData(questions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(fetchedData);

  return (
    <div>
      <Navbar />
      <div className="flashcardlist-container">
        <Flashcardlist sample_questions={fetchedData} />
      </div>
    </div>
  );
};

export default Home;
