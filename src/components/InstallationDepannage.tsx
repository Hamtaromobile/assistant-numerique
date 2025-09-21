import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";
import ScreenFrame from "./ScreenFrame";

export default function InstallationDepannage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 font-sans">
      <Header />

      <div className="w-full p-4 md:p-8">
        <BackButton />
      </div>

      <main className="p-4 md:p-8 max-w-4xl mx-auto w-full grow">
        <ScrollToTopButton />
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 md:mb-6">
          Installation & Dépannage
        </h1>
        <ScreenFrame>
          {/* 🔌 Installation de matériel */}
          <section
            className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8"
            aria-labelledby="installation-title"
          >
            <h2 id="installation-title" className="text-xl md:text-2xl font-semibold mb-2">
              <span role="img" aria-hidden="true">🔌</span> Installation de matériel
            </h2>

            <p className="block md:hidden">
              Je me déplace chez vous pour installer et expliquer le fonctionnement de vos équipements.
            </p>
            <p className="hidden md:block">
              Vous venez d’acheter un ordinateur, une imprimante ou une box internet ? Je me déplace à
              votre domicile pour tout installer et vous expliquer le fonctionnement simplement, à votre
              rythme.
            </p>
            <p className="hidden md:block mt-2">
              Ordinateur portable ou fixe, écran, clavier, souris, imprimante filaire ou Wi-Fi… Je
              m’occupe de tout. Je peux aussi vous aider à configurer votre tablette ou votre smartphone
              (Android ou Apple), et à connecter vos appareils à Internet (box ADSL/fibre, Wi-Fi, TV).
            </p>
          </section>

          {/* 🛠️ Dépannage à domicile */}
          <section
            className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8"
            aria-labelledby="depannage-title"
          >
            <h2 id="depannage-title" className="text-xl md:text-2xl font-semibold mb-2">
              <span role="img" aria-hidden="true">🛠️</span> Dépannage à domicile
            </h2>

            <p className="block md:hidden">
              Je répare vos appareils rapidement : lenteurs, virus, connexion, erreurs système…
            </p>
            <p className="hidden md:block">
              Votre ordinateur met du temps à démarrer ? Un message d’erreur s’affiche, ou votre connexion
              internet ne fonctionne plus ? Je peux intervenir rapidement à domicile pour remettre vos
              appareils en état de marche.
            </p>
            <p className="hidden md:block mt-2">
              J’effectue des diagnostics simples et efficaces : suppression de virus ou de publicités
              gênantes, résolution des lenteurs ou pannes de démarrage, réparation d’erreurs système,
              mises à jour, ou encore rétablissement de votre connexion Wi-Fi ou internet.
            </p>
          </section>

          {/* 👨‍🔧 Une assistance claire et bienveillante */}
          <section
                role="region"
                aria-labelledby="titre-tarifs"
                className="bg-blue-50 p-4 md:p-6 rounded-xl shadow mt-6 md:mt-8 text-center"
              >
                <h2
                  id="titre-tarifs"
                  className="text-lg md:text-xl font-semibold mb-3 md:mb-4"
                >
                  <span role="img" aria-hidden="true">
                    💶
                  </span>{" "}
                  Tarifs & zone d’intervention
                </h2>

                <div className="text-gray-800 mb-4 flex flex-col md:flex-col">
                  {/* Coût réel en premier sur mobile */}
                  <p className="mt-2 text-green-700 font-semibold text-lg order-1 md:order-3">
                    ✅ Votre coût réel : <strong>26 € l’intervention</strong>
                  </p>

                  {/* Crédit d’impôt */}
                  <p className="mt-3 order-2 md:order-2">
                    Grâce au crédit d’impôt de 50 % pour les services à la personne,  
                    vous récupérez la moitié de la somme après votre déclaration annuelle.
                  </p>

                  {/* Tarif brut */}
                  <div className="order-3 md:order-1 mt-3 md:mt-0">
                    <p>
                      Intervention complète : <strong className="text-blue-700">52 €</strong>
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      (En moyenne, une intervention dure entre 1 et 2 heures)
                    </p>
                  </div>
                </div>

                <p className="text-gray-800">
                  Chaque intervention est réalisée avec 
                  <span className="font-semibold text-blue-700"> patience</span>, 
                  <span className="font-semibold text-blue-700"> pédagogie</span> et 
                  <span className="font-semibold text-blue-700"> bienveillance</span>.
                </p>

                <p className="mt-4">
                  <Link
                    to="/credit-impot"
                    className="inline-block bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-blue-800 transition"
                    aria-describedby="desc-credit-impot"
                  >
                    En savoir plus sur le crédit d’impôt
                  </Link>
                  <span id="desc-credit-impot" className="sr-only">
                    Cliquez pour obtenir des détails sur le crédit d’impôt de 50 % pour les services à la personne.
                  </span>
                </p>

                <p className="mt-4 text-gray-800">
                  Je me déplace gratuitement dans un rayon de{" "}
                  <strong>25 km autour de Saint-Marceau (72)</strong>.
                </p>

                <div className="mt-6 flex justify-center items-center flex-col">
                  <img
                    src="/images/logoSAP.webp"
                    alt="Logo Service à la Personne"
                    className="h-12 md:h-16 mb-2"
                  />
                  <p className="text-xs md:text-sm text-gray-600 italic">
                    Activité agréée « Service à la Personne » – vous bénéficiez du crédit
                    d’impôt
                  </p>
                </div>
            </section>
        </ScreenFrame>
      </main>
      <Footer />
    </div>
  );
}
