import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex items-center text-blue-900 font-semibold 
        bg-blue-100
        hover:bg-blue-300
        transition duration-200 ease-in-out
        hover:scale-110 
        hover:shadow-lg
        shadow-md
        p-2 rounded
        "
      style={{ outline: "none" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Retour
    </button>
  );
}

