"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import {getItems,addItem} from "../_services/shopping-list-service.js"
import MealIdeas from './meal-ideas';
import { useEffect } from 'react';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  const handleAddItem = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const itemData = { name: NewItem }; 
        const itemId = await addItem(userId, itemData);
        const newItemWithId = { id: itemId, ...itemData };
        setItems([...items, newItemWithId]);
        setItems(''); 
      } else {
        console.log("No user is signed in.");
      }
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const loadItems = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const shoppingListItems = await getItems(userId);
        setItems(shoppingListItems);
      } else {
        console.log("No user is signed in.");
      }
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 font-sans min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Shopping List</h1>

      <div className="flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-[10px]">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}



