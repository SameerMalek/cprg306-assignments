"use client"
import React from "react";
import { useState } from "react";
export default function Newitem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const handleSubmit = () => {
    const item = {
      name,
      quantity,
      category,
    };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setCategory("produce");
    setQuantity(1);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mt-[180px] mx-auto p-4 bg-white rounded-lg shadow-md"
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
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-[rgb(87,224,87)] focus:outline-none focus:ring focus:ring-indigo-200">Submit</button>
    </form>
  );
}
