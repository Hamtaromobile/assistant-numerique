// src/components/Header.tsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-8 shadow-xl border-b-4 border-blue-700 rounded-b-xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold drop-shadow-md">
            <Link to="/" className="hover:text-blue-300 transition-colors">
              Antoine LOZACH
            </Link>
          </h1>
          <p className="mt-1 text-lg italic text-blue-300">
            Assistance informatique à domicile – Sarthe (72)
          </p>
        </div>
        <div className="mt-4 md:mt-0 space-x-8 text-center md:text-right font-semibold text-lg">
          <a href="tel:+33675418360" className="hover:underline">
            📞 06 75 41 83 60
          </a>
          <a href="mailto:contact@example.com" className="hover:underline">
            📧 contact@example.com
          </a>
        </div>
      </div>
    </header>
  );
}
