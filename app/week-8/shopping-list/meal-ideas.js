"use client";
import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);


  useEffect(() => {
    const loadMealIdeas = async () => {
      try {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    };
   loadMealIdeas();
  }, [ingredient]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  return (
    <div className="bg-black rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 text-green-400">Meal Ideas with {ingredient}</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="py-2 cursor-pointer">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;
