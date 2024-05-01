import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Flashcardlist from "./Flashcardlist";
import Navbar from "./Navbar";
import "../App.css";

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category, number } = useParams();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => {
        //   setCategories(res.data.trivia_categories);
        return res.json();
      })
      .then((data) => console.log("data is ", data));
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${10}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
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
  }, [category, number]);

  console.log(fetchedData);

  return (
    <div>
      <Navbar categories={categories} />
      <div className="flashcardlist-container">
        <Flashcardlist sample_questions={fetchedData} />
      </div>
    </div>
  );
};

export default Home;
