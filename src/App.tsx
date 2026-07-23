import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactActionButton from "./components/ContactActionButton";
import { FaCarSide } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import MentionsLegales from "./components/MentionsLegales";
import SoutienInformatique from "./components/SoutienInformatique";
import DemarchesEnLigne from "./components/DemarchesEnLigne";
import InstallationDepannage from "./components/InstallationDepannage";
import CreditImpot from "./components/CreditImpot";
import BackgroundParallax from "./components/BackgroundParallax";
import BackgroundImageWindow from "./components/BackgroundImageWindow";
import { useBodyClass } from "./components/useBodyClass";
import { LoadScript } from "@react-google-maps/api";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

const MapWindow = lazy(() => import("./components/MapWindow"));

function BodyClassController() {
  useBodyClass();
  return null;
}

export function App() {
  const [isMobile, setIsMobile] = useState(false);
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconSize = "2.5rem"; // taille fixe pour toutes les icônes

  const cardsData = [
    {
      icon: <span aria-hidden="true" style={{ fontSize: iconSize }}>💻</span>,
      title: isMobile ? "Soutien informatique tout appareil" : "Soutien informatique",
      description: isMobile ? "" : "Aide personnalisée à domicile pour tous vos appareils.",
      href: "/soutien-informatique",
    },
    {
      icon: <span aria-hidden="true" style={{ fontSize: iconSize }}>🌐</span>,
      title: isMobile ? "Démarches administratives en ligne" : "Démarches en ligne",
      description: isMobile ? "" : "Je vous accompagne dans vos démarches administratives numériques.",
      href: "/demarches-en-ligne",
    },
    {
      icon: <span aria-hidden="true" style={{ fontSize: iconSize }}>🔧</span>,
      title: isMobile ? "Installation & dépannage" : "Installation & dépannage",
      description: isMobile ? "" : "Installation, configuration et résolution de problèmes informatiques.",
      href: "/installation-depannage",
    },
  ];

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <Router basename={import.meta.env.BASE_URL}>
        <BodyClassController />
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen text-gray-800 font-sans">
                <ScrollToTopButton />
                <BackgroundParallax />
                <Header />

                <main className="p-8 relative z-10">
                  <section className={`flex flex-col items-center ${isMobile ? "mt-2" : "mt-20"}`}>
                    <h2 className="text-4xl font-titre font-bold text-gray-900 text-center mb-6 sm:mb-12 flex items-center justify-center gap-4 animate-fade-in-up">
                      <RiServiceLine style={{ fontSize: iconSize }} className="text-sky-600 flex-shrink-0" />
                      Mes services à domicile
                    </h2>

                    <div className="relative bg-gray-900 rounded-xl p-2 shadow-2xl w-full max-w-6xl">
                      <BackgroundImageWindow>
                        <div className="flex flex-wrap justify-center gap-8">
                          {cardsData.map((card, index) => (
                            <ServiceCard
                              key={index}
                              icon={card.icon}
                              title={card.title}
                              description={card.description}
                              href={card.href}
                              style={{ animationDelay: `${index * 0.15}s` }}
                            />
                          ))}
                        </div>
                      </BackgroundImageWindow>

                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-700 rounded-md shadow-md" />
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-500 rounded-full blur-sm opacity-30" />
                    </div>
                  </section>

                  <div className="my-24 border-t border-gray-300 w-full max-w-5xl mx-auto" />
                  <ContactActionButton
                    phoneNumber="+33675418360"
                    emailAddress="antoine.informatique72@gmail.com"
                    className="mt-10"
                  />

                 <section className="mt-16" id="zone">
                    <h2 className="text-4xl font-titre font-bold text-gray-900 text-center mb-12 flex items-center justify-center gap-4 animate-fade-in-up">
                      <FaCarSide style={{ fontSize: iconSize }} className="text-sky-600 flex-shrink-0" />
                      Zone d’intervention
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                      <Suspense fallback={<div className="text-center py-10">Chargement de la carte...</div>}>
                        <MapWindow />
                      </Suspense>

                      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8">
                        <p className="text-gray-700 text-lg leading-relaxed text-center">
                          J’interviens principalement dans le nord de la Sarthe (72), autour de{" "}
                          <strong>Beaumont-sur-Sarthe</strong>, <strong>Saint-Marceau</strong>,{" "}
                          <strong>Sillé-le-Guillaume</strong>, <strong>Fresnay-sur-Sarthe</strong> et leurs environs, ainsi que sur{" "}
                          <strong>Le Mans</strong>.
                        </p>
                      </div>
                    </div>
                  </section>



                  <div className="my-24 border-t border-gray-300 w-full max-w-5xl mx-auto" />
                  <section>
                    <div id="about" className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 items-center border border-gray-200 rounded-3xl shadow-lg p-8 bg-white">
                      <div className="flex justify-center md:justify-start lg:ml-8">
                        <div className="w-56 h-56 rounded-2xl lg:w-56 lg:h-56 overflow-hidden bg-white shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105">
                          <img
                            src={`${import.meta.env.BASE_URL}images/Antoine.webp`}
                            alt="Portrait d'Antoine"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-6">
                        <h2 className="text-3xl font-titre font-semibold text-sky-600 tracking-tight">À propos de moi</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          J’ai toujours aimé comprendre et expliquer le fonctionnement des outils numériques. Aujourd’hui, je mets mes{" "}
                          <span className="text-sky-600 font-semibold">compétences informatiques</span> au service de toutes et tous, avec
                          pour priorité la <span className="text-sky-600 font-semibold">clarté</span> et la{" "}
                          <span className="text-sky-600 font-semibold">bienveillance</span>.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          J’interviens directement <strong>à domicile</strong> pour vous aider à mieux utiliser vos équipements numériques,
                          en respectant votre rythme et vos besoins, toujours avec{" "}
                          <span className="text-sky-600 font-semibold">écoute</span> et{" "}
                          <span className="text-sky-600 font-semibold">pédagogie</span>.
                        </p>
                      </div>
                    </div>
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
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </Router>
    </LoadScript>
  );
}
