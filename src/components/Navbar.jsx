import React, { useState } from "react";

const Navbar = ({ data, categories }) => {
  const [category, setCategory] = useState("Indian");
  const [number, setNumber] = useState(10);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Category:", category);
    console.log("Number:", number);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="navbar">
      <form onSubmit={submitHandler}>
        <label htmlFor="category">Category</label>
        <select id="category">
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
