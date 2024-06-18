"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="container mx-auto px-4 py-8 font-sans  min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Shopping List</h1>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-10 space-y-8 md:space-y-0">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}


