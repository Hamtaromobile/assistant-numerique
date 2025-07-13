import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapWindow from "./components/MapWindow";
import ServiceCard from "./components/ServiceCard";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FaCarSide } from "react-icons/fa";
import { PiMapPinLineDuotone } from "react-icons/pi";
import SoutienInformatique from "./components/SoutienInformatique";
import DemarchesEnLigne from "./components/DemarchesEnLigne";
import InstallationDepannage from "./components/InstallationDepannage";
import CreditImpot from "./components/CreditImpot";

// Hook personnalisé pour la classe body
import { useBodyClass } from "./components/useBodyClass";

function BodyClassController() {
  useBodyClass();
  return null;
}

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
      <BodyClassController />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen text-gray-800 font-sans">
              <Header />
              <main className="p-8">
                <ScrollToTopButton />

                <section className="flex flex-col items-center mt-20">
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

                  <div className="relative bg-gray-900 rounded-xl p-2 shadow-2xl w-full max-w-6xl">
                    <div
                      className="relative rounded-lg overflow-hidden min-h-[400px] bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('/images/windows.webp')` }}
                    >
                      <div className="absolute inset-0 bg-blue-100/30 backdrop-blur-sm rounded-lg" />
                      <div className="relative z-10 p-8">
                        <div className="flex flex-wrap justify-center gap-8">
                          {cardsData.map((card, i) => (
                            <ServiceCard
                              key={i}
                              icon={card.icon}
                              title={card.title}
                              description={card.description}
                              href={card.href}
                              // Plus d'animation-delay pour SEO
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Les traits décoratifs noirs */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-700 rounded-md shadow-md" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-500 rounded-full blur-sm opacity-30" />
                  </div>
                </section>

                <div className="my-24 border-t border-gray-300 w-full max-w-5xl mx-auto" />

                <section className="mt-16">
                  <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-8 drop-shadow-md flex items-center justify-center gap-3">
                    <FaCarSide className="w-8 h-8 text-blue-500" />
                    Zone d’intervention
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <MapWindow />
                  </div>
                </section>

                <section className="mt-16 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8 max-w-4xl mx-auto flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-full shadow-sm">
                    <PiMapPinLineDuotone className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-wide">
                      Périmètre d’intervention
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      J’interviens principalement dans le nord de la Sarthe (72), autour de&nbsp;
                      <strong>Beaumont-sur-Sarthe</strong>, <strong>Saint-Marceau</strong>, <strong>Sillé-le-Guillaume</strong>,{" "}
                      <strong>Fresnay-sur-Sarthe</strong> et leurs environs, ainsi que sur <strong>Le Mans</strong>.
                    </p>
                  </div>
                </section>

                <section className="py-16 px-6 mt-16">
                  <div className="max-w-5xl mx-auto grid md:grid-cols-3 items-center gap-10 border border-gray-200 rounded-2xl shadow-md p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                    {/* Photo de profil */}
                    <div className="flex justify-center md:justify-start">
                      <div className="relative w-40 h-40 bg-gray-200 rounded-lg shadow-inner border border-gray-300 flex items-center justify-center">
                        <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center border-4 border-gray-600">
                          <img
                            src="/chemin-vers-ta-photo.jpg"
                            alt="Photo de moi"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                        <div className="absolute top-2 right-3 w-4 h-4 rounded-sm bg-gray-400 border border-gray-500 shadow-sm"></div>
                        <div className="absolute top-2 left-3 w-6 h-4 rounded-sm bg-gray-400 border border-gray-500 shadow-sm"></div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-gray-500 rounded-t"></div>
                      </div>
                    </div>

                    <div className="block md:hidden border-t border-gray-300 my-6 md:my-0"></div>

                    {/* Texte */}
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-wide">À propos de moi</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Passionné d’informatique, j’accompagne les particuliers — notamment les
                        <span className="text-blue-600 font-semibold"> seniors</span> — pour leur simplifier la vie numérique, à leur rythme, avec
                        <span className="text-blue-600 font-semibold"> pédagogie et bienveillance</span>.
                      </p>
                    </div>
                  </div>
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
