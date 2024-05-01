import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Flashcardlist from "./Flashcardlist";
import Navbar from "./Navbar";
import "../App.css";

const Home = ({ onCategoryChange, onNumberChange }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleNumberChange = (number) => {
    setSelectedNumber(number);
  };

  const params = useParams();
  useEffect(() => {
    console.log("Category param:", params.category);
    console.log("Number param:", params.number);
  }, [params]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("category data is ", data.trivia_categories);
        setCategories(data.trivia_categories);
      });
  }, []);

  console.log("new categories", categories);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${selectedNumber}&category=${selectedCategory}`
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
  }, [selectedNumber, selectedCategory]);

  console.log(fetchedData);

  return (
    <div>
      <Navbar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onNumberChange={handleNumberChange}
      />
      <div className="flashcardlist-container">
        <Flashcardlist sample_questions={fetchedData} />
      </div>
    </div>
  );
};

export default Home;
