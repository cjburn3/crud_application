import { useState } from 'react';

export default function ManagementPage() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingItem, setEditingItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setEditingIndex(index);
    setEditingItem(items[index]);
  };

  const saveEdit = () => {
    const updatedItems = items.map((item, index) =>
      index === editingIndex ? editingItem : item
    );
    setItems(updatedItems);
    setEditingIndex(null);
    setEditingItem('');
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
        <button onClick={addItem} className="bg-blue-500 text-white p-2">
          Add Item
        </button>
      </div>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingItem}
                  onChange={(e) => setEditingItem(e.target.value)}
                  className="border p-2 mr-2"
                />
                <button onClick={saveEdit} className="bg-green-500 text-white p-2 mr-2">
                  Save
                </button>
              </>
            ) : (
              <>
                {item}
                <button
                  onClick={() => editItem(index)}
                  className="bg-yellow-500 text-white p-2 ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  className="bg-red-500 text-white p-2 ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}