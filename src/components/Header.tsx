// src/components/Header.tsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-8 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            <Link to="/" className="hover:underline">
              Antoine LOZACH
            </Link>
          </h1>
          <p className="mt-1 text-lg">Assistance informatique à domicile – Sarthe (72)</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-6 text-center md:text-right">
          <a href="tel:+33675418360" className="font-semibold hover:underline">📞 06 75 41 83 60</a>
          <a href="mailto:contact@example.com" className="font-semibold hover:underline">📧 contact@example.com</a>
        </div>
      </div>
    </header>
  );
}
