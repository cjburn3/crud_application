"use client"
import { useState } from 'react';

export default function Management() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState("");

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const editCurrentItem = () => {
    const updatedItems = items.map((item, index) => 
      index === editIndex ? editItem : item
    );
    setItems(updatedItems);
    setEditIndex(null);
    setEditItem("");
  };

  const startEditItem = (index) => {
    setEditIndex(index);
    setEditItem(items[index]);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Management Page</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addItem} className="bg-blue-500 text-white p-2">Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="border-b py-2 flex justify-between items-center">
            {index === editIndex ? (
              <>
                <input
                  type="text"
                  value={editItem}
                  onChange={(e) => setEditItem(e.target.value)}
                  className="border p-2 mr-2"
                />
                <button onClick={editCurrentItem} className="bg-green-500 text-white p-2">Save</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div>
                  <button onClick={() => startEditItem(index)} className="bg-yellow-500 text-white p-2 mr-2">Edit</button>
                  <button onClick={() => deleteItem(index)} className="bg-red-500 text-white p-2">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}