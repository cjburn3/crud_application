"use client"
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="border-b py-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}