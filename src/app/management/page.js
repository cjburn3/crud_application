'use client';
import { useState } from 'react';

export default function ManagementPage() {
  const [items, setItems] = useState([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id, name: newItem }]);
    setNewItem('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, name) => {
    setItems(items.map(item => (item.id === id ? { ...item, name } : item)));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Management Page</h1>
      <ul>
        {items.map(item => (
          <li key={item.id} className="border p-2 mb-2">
            <input
              type="text"
              value={item.name}
              onChange={(e) => editItem(item.id, e.target.value)}
              className="border p-1"
            />
            <button onClick={() => deleteItem(item.id)} className="ml-2 text-red-500">Delete</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New Item"
          className="border p-2"
        />
        <button onClick={addItem} className="ml-2 p-2 bg-blue-500 text-white">Add</button>
      </div>
    </div>
  );
}