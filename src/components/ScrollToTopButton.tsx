import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div aria-hidden={!isVisible}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Remonter en haut de la page"
          title="Remonter en haut de la page"
          className="
            fixed bottom-8 right-8
            bg-blue-300 bg-opacity-70
            rounded-full
            p-4
            shadow-lg
            hover:bg-blue-400 hover:bg-opacity-90
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
            z-50
            flex items-center justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            role="img"
            aria-hidden="true"
          >
            <title>Flèche vers le haut</title>
            <desc>Icône indiquant de revenir en haut de la page</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19V6m0 0l-6 6m6-6l6 6"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
