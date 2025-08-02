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

  // Fermer dropdown si clic en dehors ou touche Escape
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
  const showAboutLink = isMobile && isOpen;

  // Fonction pour scroll smooth vers un id donné (utilisée pour zone et about)
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    handleLinkClick();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 285; // Ajuste si besoin selon la hauteur du header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-blue-900 text-white p-6 shadow-xl border-b-4 border-blue-700 rounded-b-xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Logo + bouton mobile */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div>
            <h1 className="text-3xl font-bold drop-shadow-md">
              <Link
                to="/"
                className="hover:text-blue-300 transition-colors"
                onClick={handleLinkClick}
              >
                Antoine LOZACH
              </Link>
            </h1>
            <p
              className="text-sm italic font-semibold
                         bg-gradient-to-r from-sky-400 via-sky-200 to-white
                         bg-clip-text text-transparent select-none"
              aria-label="Assistance informatique à domicile en Sarthe (72)"
            >
              Assistance informatique à domicile – Sarthe (72)
            </p>
          </div>
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
          } flex-col lg:flex lg:flex-row items-center mt-4 lg:mt-0 gap-4 lg:gap-8 font-semibold text-lg relative`}
        >
          {/* Lien Accueil */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:underline flex items-center gap-1"
          >
            {/* Icône maison visible uniquement sur mobile */}
            <span aria-hidden="true" className="block sm:hidden">🏠</span>
            <span className="sr-only">Accueil</span>
            <span className="sm:not-sr-only">Accueil</span>
          </Link>

          {/* Lien À propos de moi (mobile seulement quand menu ouvert) */}
          {showAboutLink && (
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="hover:underline flex items-center gap-1"
            >
              <span aria-hidden="true">🙋‍♂️</span>
              <span className="sr-only">À propos de moi</span>
              <span aria-hidden="true" className="hidden">À propos de moi</span>
              <span className="not-sr-only">À propos de moi</span>
            </a>
          )}

          {/* Option Zone d’intervention uniquement sur page accueil mobile menu ouvert */}
          {showZoneLink && (
            <a
              href="#zone"
              onClick={(e) => handleSmoothScroll(e, "zone")}
              className="hover:underline flex items-center gap-1"
            >
              <span aria-hidden="true">📍</span>
              <span className="sr-only">Zone d’intervention</span>
              <span className="not-sr-only">Zone d’intervention</span>
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
              aria-label="Menu Mes services"
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
                  className="block px-4 py-2 hover:bg-blue-100  items-center gap-2"
                  onClick={handleLinkClick}
                >
                  <span aria-hidden="true">💻</span>
                  <span className="sr-only">Soutien informatique</span>
                  <span>Soutien informatique</span>
                </Link>
                <Link
                  to="/demarches-en-ligne"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-blue-100  items-center gap-2"
                  onClick={handleLinkClick}
                >
                  <span aria-hidden="true">🌐</span>
                  <span className="sr-only">Démarches en ligne</span>
                  <span>Démarches en ligne</span>
                </Link>
                <Link
                  to="/installation-depannage"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-blue-100 items-center gap-2"
                  onClick={handleLinkClick}
                >
                  <span aria-hidden="true">🔧</span>
                  <span className="sr-only">Installation et dépannage</span>
                  <span>Installation & dépannage</span>
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <a
            href="tel:+33675418360"
            className="hover:underline flex items-center gap-1"
          >
            <span aria-hidden="true">📞</span>
            <span className="sr-only">Téléphone</span>
            <span>06 75 41 83 60</span>
          </a>
          <a
            href="mailto:antoine.informatique72@gmail.com"
            className="hover:underline flex items-center gap-1"
          >
            <span aria-hidden="true">📧</span>
            <span className="sr-only">Email</span>
            <span>antoine.informatique72@gmail.com</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
