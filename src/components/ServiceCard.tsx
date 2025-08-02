import "../style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
  href = "#",
  style,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  style?: React.CSSProperties;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Link
      to={href}
      style={style}
      className="group block bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow p-6 text-center border border-gray-300 transform transition duration-300 cursor-pointer w-full sm:w-1/2 md:w-1/3 hover:shadow-xl hover:no-underline focus:outline-none focus:ring-2 focus:ring-sky-400 active:scale-[0.98]"
    >
      <div className="mb-4 flex justify-center items-center">
        <div className="text-sky-600 text-5xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:underline underline-offset-2 decoration-sky-400 transition">
        {title}
      </h3>

      <p className="text-gray-700 text-sm sm:text-base leading-snug">
        {description}
      </p>

      {/* Variante mobile ou ordinateur */}
      {isMobile ? (
        <span className="mt-4 block text-sm text-sky-600 font-medium underline underline-offset-2">
          en savoir plus
        </span>
      ) : (
        <span
          className="inline-block mt-4 px-3 py-1.5 text-sm text-white bg-sky-500 rounded shadow transition 
          group-hover:bg-blue-800 group-hover:text-white"
        >
          En savoir plus
        </span>
      )}
    </Link>
  );
}
