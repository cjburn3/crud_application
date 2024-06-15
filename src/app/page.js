'use client';
import { useState } from 'react';

export default function HomePage() {
  const [items, setItems] = useState([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <ul>
        {items.map(item => (
          <li key={item.id} className="border p-2 mb-2">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}