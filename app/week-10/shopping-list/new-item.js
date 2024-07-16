"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9), // Random string for id
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="99"
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="produce">produce</option>
          <option value="dairy">dairy</option>
          <option value="bakery">bakery</option>
          <option value="meat">meat</option>
          <option value="frozen foods">frozen foods</option>
          <option value="canned goods">canned goods</option>
          <option value="dry goods">dry goods</option>
          <option value="beverages">beverages</option>
          <option value="snacks">snacks</option>
          <option value="household">household</option>
          <option value="other">other</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-[rgb(87,224,87)] focus:outline-none focus:ring focus:ring-indigo-200">Submit</button>
    </form>
  );
}

NewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
