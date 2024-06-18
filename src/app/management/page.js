'use client';
import React, { useState } from 'react';
import Layout from '../layout';

export default function ManagementPage() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold mb-2">Management Page</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border p-2"
        />
        <button onClick={addItem} className="ml-2 bg-blue-500 text-white p-2">
          Add Item
        </button>
      </div>
    </Layout>
  );
}