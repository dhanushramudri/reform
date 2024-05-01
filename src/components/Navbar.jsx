import React, { useState } from "react";
import "../App.css";
import { AiOutlineNumber } from "react-icons/ai";

const Navbar = ({ data, categories, onCategoryChange, onNumberChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [number, setNumber] = useState(10);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Category:", selectedCategory);
    console.log("Number:", number);
    onCategoryChange(selectedCategory); // Pass selectedCategory to parent
    onNumberChange(number);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="navbar">
      <form onSubmit={submitHandler}>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleCategoryChange}>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          name="number"
          min={10}
          value={number}
          onChange={handleNumberChange}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default Navbar;
