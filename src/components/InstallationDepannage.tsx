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
          <section className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">🔌 Installation de matériel</h2>

            {/* Mobile/tablette - version courte */}
            <p className="block md:hidden">
              Je me déplace chez vous pour installer et expliquer le fonctionnement de vos équipements.
            </p>
            {/* Desktop - version complète */}
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

          <section className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">🛠️ Dépannage à domicile</h2>

            {/* Mobile/tablette - version courte */}
            <p className="block md:hidden">
              Je répare vos appareils rapidement : lenteurs, virus, connexion, erreurs système…
            </p>
            {/* Desktop - version complète */}
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

          <section className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">👨‍🔧 Une assistance claire et bienveillante</h2>

            {/* Mobile/tablette - version courte */}
            <p className="block md:hidden">
              Patience et pédagogie pour vous rendre autonome, sans jargon technique.
            </p>
            {/* Desktop - version complète */}
            <p className="hidden md:block">
              Chaque intervention est réalisée avec patience et pédagogie, pour que vous compreniez ce qui est fait. 
              Mon objectif : vous rendre autonome dans l’utilisation de vos équipements, sans jargon technique inutile.
            </p>
          </section>

          <section className="bg-blue-50 p-4 md:p-6 rounded-xl shadow mt-6 md:mt-8 text-center">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">💶 Tarifs & zone d’intervention</h2>
            <p className="text-gray-800 mb-2">
              Je propose un accompagnement informatique personnalisé, à votre domicile, au tarif de <strong>50 € de l’heure</strong>.
              Chaque intervention est réalisée avec <span className="font-semibold text-blue-700">patience</span>, 
              <span className="font-semibold text-blue-700"> pédagogie</span> et <span className="font-semibold text-blue-700">bienveillance</span>,
              pour vous offrir un service sur-mesure, adapté à vos besoins.
            </p>

            {/* Mobile/tablette - bouton visible */}
            <p className="mt-3 text-gray-800 block md:hidden">
              <Link 
                to="/credit-impot" 
                className="inline-block bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                Crédit d’impôt de 50 %
              </Link> <br />
              Vous ne payez en réalité que <strong>25 € de l’heure</strong> après déclaration.
            </p>

            {/* Desktop - version lien dans phrase */}
            <p className="mt-4 text-gray-800 hidden md:block">
              🧾 Grâce au{" "}
              <Link to="/credit-impot" className="text-blue-800 font-semibold hover:underline">
                crédit d’impôt de 50 %
              </Link>, vous ne payez en réalité que <strong>25 € de l’heure</strong> après déclaration.
            </p>

            <p className="mt-4 text-gray-800">
              📍 Je me déplace gratuitement dans un rayon de <strong>25 km autour de Saint-Marceau (72)</strong>.
            </p>

            <div className="mt-6 flex justify-center items-center flex-col">
              <img 
                src="/images/logoSAP.webp" 
                alt="Logo Service à la Personne" 
                className="h-12 md:h-16 mb-2"
              />
              <p className="text-xs md:text-sm text-gray-600 italic">
                Agréé Service à la Personne – bénéficiez du crédit d’impôt
              </p>
            </div>
          </section>
        </ScreenFrame>
      </main>
      <Footer />
    </div>
  );
}
