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
      className="service-card group block bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 rounded-xl shadow p-6 text-center border border-gray-300 transform transition duration-300 cursor-pointer w-full sm:w-1/2 md:w-1/3 hover:shadow-2xl hover:no-underline"
    >
      <div className="mb-4 flex justify-center items-center">
        <div className="text-sky-600 text-5xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>

      <p className="text-gray-700 text-sm sm:text-base leading-snug">
        {description}
      </p>

      {!isMobile && (
        <span className="btn-more inline-block mt-4 px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 transition">
          En savoir plus
        </span>
      )}
    </Link>
  );
}
