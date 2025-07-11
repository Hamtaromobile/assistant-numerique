import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapWindow from "./components/MapWindow";
import ServiceCard from "./components/ServiceCard";
import { FaCarSide } from "react-icons/fa";
import SoutienInformatique from "./components/SoutienInformatique";
import DemarchesEnLigne from "./components/DemarchesEnLigne";
import InstallationDepannage from "./components/InstallationDepannage";
import CreditImpot from "./components/CreditImpot";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FaMap } from "react-icons/fa";


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
            <div className="min-h-screen text-gray-800 font-sans">
              <Header />
              <main className="p-8">
                <ScrollToTopButton/>
                
               <section className="flex flex-col items-center mt-20">
                  {/* Titre en dehors de l'écran flou */}
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

                  {/* Châssis de l'écran */}
                  <div className="relative bg-gray-900 rounded-xl p-2 shadow-2xl w-full max-w-6xl">

                    {/* Écran avec image de fond */}
                    <div
                      className="relative rounded-lg overflow-hidden min-h-[400px] bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('/images/windows.jpg')`, // Remplace avec ton chemin réel
                      }}
                    >
                      {/* Voile de lisibilité */}
                      <div className="absolute inset-0 bg-blue-100/30 backdrop-blur-sm rounded-lg" />

                      {/* Contenu visible */}
                      <div className="relative z-10 p-8">
                        <div className="flex flex-wrap justify-center gap-8">
                          {cardsData.map((card, i, arr) => {
                            const delay = (arr.length - 1 - i) * 0.5;
                            return (
                              <ServiceCard
                                key={i}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                href={card.href}
                                style={{ animationDelay: `${delay}s` }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Pied de l'écran */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-700 rounded-md shadow-md" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-500 rounded-full blur-sm opacity-30" />
                  </div>
                </section>


                <section className="mt-16 opacity-0 translate-y-4 animate-fade-in-up animation-delay-600">
                  <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-8 drop-shadow-md flex items-center justify-center gap-3">
                    <FaCarSide className="w-8 h-8 text-blue-500" />
                    Zone d’intervention
                  </h2>

                  <div className="max-w-4xl mx-auto">
                    <MapWindow />
                  </div>
                </section>

                 <section className="mt-16 bg-blue-50 rounded-xl shadow-md p-6 max-w-4xl mx-auto transition-shadow hover:shadow-lg flex items-start gap-4">
                    <FaMap className="h-8 w-8 text-blue-700 flex-shrink-0 mt-1" />

                    <div>
                      <h2 className="text-xl font-semibold text-blue-700 mb-3">Zone d’activité</h2>
                      <p className="text-gray-700 leading-relaxed">
                        J’interviens principalement dans le nord de la Sarthe (72), autour de
                        Saint-Marceau, Sillé-le-Guillaume, Fresnay-sur-Sarthe, Beaumont-sur-Sarthe,
                        et leurs environs.
                      </p>
                    </div>
                  </section>

                <section className="bg-white p-8 text-center mt-16">
                  <h2 className="text-2xl font-semibold mb-4">À propos</h2>
                  <p className="max-w-3xl mx-auto">
                    Passionné d’informatique, j’accompagne les particuliers — notamment les
                    seniors — pour leur simplifier la vie numérique, à leur rythme, avec
                    bienveillance.
                  </p>
                </section>

                <section className="bg-blue-100 p-8 text-center mt-16">
                  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                  <p>📞 06 75 41 83 60</p>
                  <p>📧 contact@example.com</p>
                </section>
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/soutien-informatique" element={<SoutienInformatique />} />
        <Route path="/demarches-en-ligne" element={<DemarchesEnLigne />} />
        <Route path="/installation-depannage" element={<InstallationDepannage />} />
        <Route path="/credit-impot" element={<CreditImpot />} />
      </Routes>
    </Router>
  );
}
