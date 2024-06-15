"use client"
import Layout from './layout';

export default function Home() {
  const [items, setItems] = useState(['Sample Task 1', 'Sample Task 2']);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="border-b py-2">{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}