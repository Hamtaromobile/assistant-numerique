import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const showZoneLink = location.pathname === "/" && isMobile && isOpen;
  const showAboutLink = location.pathname === "/" && isMobile && isOpen;

  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    handleLinkClick();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 335;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-xl rounded-b-xl">
      {/* Contenu principal */}
      <div className="max-w-8xl mx-auto px-6 py-3 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo + Nom + bouton mobile */}
        <div className="flex justify-between items-center w-full lg:w-auto gap-10">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" onClick={handleLinkClick}>
              <Link to="/" onClick={handleLinkClick}>
                <img
                  src="/images/logo.webp"
                  alt="Logo Assistance informatique"
                  className="hidden lg:block w-32 h-auto max-h-24 object-contain drop-shadow-md"
                />
              </Link>

            </Link>

            {/* Nom + slogan */}
            <div>
              <h1 className="text-3xl font-bold drop-shadow-md">
                <Link
                  to="/"
                  className="hover:text-blue-200 transition-colors"
                  onClick={handleLinkClick}
                >
                  Antoine LOZACH
                </Link>
              </h1>
              <p
                className="text-sm italic font-semibold text-white select-none leading-snug"
                aria-label="Assistance informatique à domicile en Sarthe (72)"
              >
                Assistance informatique à domicile – Sarthe (72)
              </p>
            </div>
          </div>

          {/* Bouton mobile */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          id="main-navigation"
          aria-label="Menu principal"
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row items-center mt-4 lg:mt-0 gap-6 lg:gap-16 font-semibold text-lg relative`}
        >
          {/* Lien Accueil */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:underline flex items-center gap-1"
          >
            <span aria-hidden="true" className="block sm:hidden">🏠</span>
            <span className="sr-only">Accueil</span>
            <span className="sm:not-sr-only">Accueil</span>
          </Link>

          {/* Lien À propos de moi */}
          {showAboutLink && (
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="hover:underline flex items-center gap-1"
            >
              <span aria-hidden="true">🙋‍♂️</span>
              <span>À propos de moi</span>
            </a>
          )}

          {/* Lien Zone d’intervention */}
          {showZoneLink && (
            <a
              href="#zone"
              onClick={(e) => handleSmoothScroll(e, "zone")}
              className="hover:underline flex items-center gap-1"
            >
              <span>Zone d’intervention</span>
            </a>
          )}

          {/* Dropdown Mes services */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="submenu-mes-services"
            >
              Mes services <ChevronDown size={18} />
            </button>

            {dropdownOpen && (
              <div
                id="submenu-mes-services"
                role="menu"
                className="absolute left-0 lg:left-auto lg:right-0 top-full mt-2 bg-white text-blue-900 rounded shadow-lg z-50 w-64 border border-gray-200"
              >
                <Link
                  to="/soutien-informatique"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={handleLinkClick}
                >
                  💻 Soutien informatique
                </Link>
                <Link
                  to="/demarches-en-ligne"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={handleLinkClick}
                >
                  🌐 Démarches en ligne
                </Link>
                <Link
                  to="/installation-depannage"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={handleLinkClick}
                >
                  🔧 Installation & dépannage
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <a href="tel:+33675418360" className="hover:underline flex items-center gap-1">
            📞 06 75 41 83 60
          </a>
          <a
            href="mailto:antoine.informatique72@gmail.com"
            className="hover:underline flex items-center gap-1"
          >
            📧 antoine.informatique72@gmail.com
          </a>
        </nav>
      </div>

      {/* Ligne décorative dégradée inversée */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 to-sky-500"></div>
    </header>
  );
}
