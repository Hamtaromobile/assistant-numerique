import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-blue-900 text-white p-6 shadow-xl border-b-4 border-blue-700 rounded-b-xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Logo + bouton mobile */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div>
            <h1 className="text-3xl font-bold drop-shadow-md">
              <Link to="/" className="hover:text-blue-300 transition-colors">
                Antoine LOZACH
              </Link>
            </h1>
            <p className="text-sm italic text-blue-300">
              Assistance informatique à domicile – Sarthe (72)
            </p>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row items-center mt-4 lg:mt-0 gap-4 lg:gap-8 font-semibold text-lg relative`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">
            Accueil
          </Link>

          {/* Dropdown Mes services */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="Menu Mes services"
            >
              Mes services <ChevronDown size={18} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 lg:left-auto lg:right-0 top-full mt-2 bg-white text-blue-900 rounded shadow-lg z-50 w-64 border border-gray-200">
                <Link
                  to="/soutien-informatique"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  💻 Soutien informatique
                </Link>
                <Link
                  to="/demarches-en-ligne"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  🌐 Démarches en ligne
                </Link>
                <Link
                  to="/installation-depannage"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  🔧 Installation & dépannage
                </Link>
              </div>
            )}
          </div>

          <a href="tel:+33675418360" className="hover:underline">
            📞 06 75 41 83 60
          </a>
          <a href="mailto:antoine.informatique72@gmail.com" className="hover:underline">
            📧 antoine.informatique72@gmail.com
          </a>
        </nav>
      </div>
    </header>
  );
}
