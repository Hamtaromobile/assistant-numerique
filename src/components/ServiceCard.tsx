import '../style.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
  href = "#",
  style,
  mobileOnlyDescription = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  style?: React.CSSProperties;
  mobileOnlyDescription?: boolean;
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
      className="service-card block bg-gray-100 rounded-xl shadow p-6 text-center border border-gray-300 transform transition duration-300 cursor-pointer w-full sm:w-1/2 md:w-1/3 hover:shadow-2xl hover:no-underline"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-snug">
        {description}
      </p>

      {/* Supprimer le bouton sur mobile */}
      {!isMobile && (
        <span className="btn-more inline-block mt-4 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded transition">
          En savoir plus
        </span>
      )}
    </Link>
  );
}
