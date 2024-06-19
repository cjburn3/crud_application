"use client"

import { useState } from 'react';

export default function HomePage() {
  const [items, setItems] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}