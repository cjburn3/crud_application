// export default function Layout({ children }) {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-blue-500 text-white p-4">
//         <h1 className="text-3xl">My CRUD App</h1>
//       </header>
//       <main className="flex-grow container mx-auto p-4">
//         {children}
//       </main>
//       <footer className="bg-gray-800 text-white p-4 text-center">
//         © 2024 My CRUD App
//       </footer>
//     </div>
// //   );
// }
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "crud_application",
  description: "",
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex justify-center space-x-4">
            <Link href="/" className="text-white hover:text-red-500">
              Home
            </Link>
            </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
      <h1 className="text-3xl">My CRUD App</h1>
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 My CRUD App
      </footer>
    </div>
    </body>
    </html>
  );