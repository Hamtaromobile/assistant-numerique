import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // fallback vers l'accueil
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Revenir à la page précédente"
      title="Retour"
      className="
        flex items-center font-medium
        text-gray-800 bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100
        hover:from-white hover:to-blue-200
        transition-all duration-200 ease-in-out
        hover:scale-105 hover:shadow-md
        shadow-sm border border-gray-300
        px-4 py-2 rounded-xl
        focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-sky-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        role="img"
        aria-hidden="true"
      >
        <title>Flèche vers la gauche</title>
        <desc>Icône pour revenir en arrière</desc>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Retour
    </button>
  );
}
