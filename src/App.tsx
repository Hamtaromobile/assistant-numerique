import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapComponent from "./components/MapComponent";
import ServiceCard from "./components/ServiceCard";
import { FaCarSide } from "react-icons/fa";
import SoutienInformatique from "./components/SoutienInformatique";
import DemarchesEnLigne from "./components/DemarchesEnLigne";
import InstallationDepannage from "./components/InstallationDepannage";

const cardsData = [
  {
    icon: "💻",
    title: "Soutien informatique",
    description: "Aide personnalisée à domicile pour tous vos appareils.",
    href: "/soutien-informatique",
  },
  {
    icon: "🌐",
    title: "Démarches en ligne",
    description: "Je vous accompagne dans vos démarches administratives numériques.",
    href: "/demarches-en-ligne",
  },
  {
    icon: "🔧",
    title: "Installation & dépannage",
    description: "Installation, configuration et résolution de problèmes informatiques.",
    href: "/installation-depannage",
  },
];

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
              <Header />
              <section className="p-8">
                <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-8 drop-shadow-md flex items-center justify-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                    />
                  </svg>
                  Mes services
                </h2>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                  {cardsData.map((card, i, arr) => {
                    const delay = (arr.length - 1 - i) * 0.5;
                    return (
                      <ServiceCard
                        key={i}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        href={card.href} // IMPORTANT: href doit être utilisé comme `to` dans ServiceCard
                        style={{ animationDelay: `${delay}s` }}
                      />
                    );
                  })}
                </div>
              </section>

              <section className="p-8 opacity-0 translate-y-4 animate-fade-in-up animation-delay-700">
                <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-8 drop-shadow-md flex items-center justify-center gap-3">
                  <FaCarSide className="w-8 h-8 text-blue-500" />
                  Zone d’intervention
                </h2>

                <div className="max-w-4xl mx-auto">
                  <MapComponent />
                </div>

                <p className="text-center mt-4 text-gray-700">
                  J’interviens dans un rayon d’environ 20 km autour de Saint-Marceau, notamment à Sillé-le-Guillaume, Fresnay-sur-Sarthe, Beaumont-sur-Sarthe...
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Zone d’intervention</h2>
                <p>
                  J’interviens principalement dans le nord de la Sarthe (72), autour de
                  Saint-Marceau, Sillé-le-Guillaume, Fresnay-sur-Sarthe, Beaumont-sur-Sarthe,
                  et leurs environs.
                </p>
              </section>

              <section className="bg-white p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">À propos</h2>
                <p className="max-w-3xl mx-auto">
                  Passionné d’informatique, j’accompagne les particuliers — notamment les
                  seniors — pour leur simplifier la vie numérique, à leur rythme, avec
                  bienveillance.
                </p>
              </section>

              <section className="bg-blue-100 p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p>📞 06 75 41 83 60</p>
                <p>📧 contact@example.com</p>
              </section>

              <Footer />
            </div>
          }
        />
        <Route path="/soutien-informatique" element={<SoutienInformatique />} />
        <Route path="/demarches-en-ligne" element={<DemarchesEnLigne />} />
        <Route path="/installation-depannage" element={<InstallationDepannage />} />
      </Routes>
    </Router>
  );
}
