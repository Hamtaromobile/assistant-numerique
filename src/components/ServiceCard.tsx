import '../style.css';
import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, description, href = "#", style }: { icon: React.ReactNode; title: string; description: string; href?: string; style?: React.CSSProperties; }) {
  return (
    <Link
      to={href}
      style={style}
      className="service-card block bg-gray-100 rounded-xl shadow p-6 text-center border border-gray-300 transition w-full sm:w-1/2 md:w-1/3 hover:shadow-2xl hover:no-underline"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>

      <span
        className="btn-more inline-block mt-4 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded transition"
      >
        En savoir plus
      </span>
    </Link>
  );
}
