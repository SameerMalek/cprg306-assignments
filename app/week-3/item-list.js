import React from "react";
import Item from "./item.js";

export default function ItemList() {
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },

    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },

    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },

    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },

    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },

    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },

    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },

    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },

    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },

    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },

    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },

    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];

  return (
    <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <li key={index} className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
        </li>
      ))}
    </ul>
  );
}
