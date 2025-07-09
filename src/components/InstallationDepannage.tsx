import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";

export default function InstallationDepannage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />

       <div className="w-full p-8">
        <BackButton />
      </div>

      <main className="p-8 max-w-4xl mx-auto w-full grow">
        <ScrollToTopButton/>
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
          Installation & Dépannage
        </h1>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">🔌 Installation de matériel</h2>
          <p>
            Vous venez d’acheter un ordinateur, une imprimante ou une box internet ? Je me déplace à
            votre domicile pour tout installer et vous expliquer le fonctionnement simplement, à votre
            rythme.
          </p>
          <p className="mt-2">
            Ordinateur portable ou fixe, écran, clavier, souris, imprimante filaire ou Wi-Fi… Je
            m’occupe de tout. Je peux aussi vous aider à configurer votre tablette ou votre smartphone
            (Android ou Apple), et à connecter vos appareils à Internet (box ADSL/fibre, Wi-Fi, TV).
          </p>
       </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Dépannage à domicile</h2>
          <p>
            Votre ordinateur met du temps à démarrer ? Un message d’erreur s’affiche, ou votre connexion
            internet ne fonctionne plus ? Je peux intervenir rapidement à domicile pour remettre vos
            appareils en état de marche.
          </p>
          <p className="mt-2">
            J’effectue des diagnostics simples et efficaces : suppression de virus ou de publicités
            gênantes, résolution des lenteurs ou pannes de démarrage, réparation d’erreurs système,
            mises à jour, ou encore rétablissement de votre connexion Wi-Fi ou internet.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">👨‍🔧 Une assistance claire et bienveillante</h2>
          <p>
            Chaque intervention est réalisée avec patience et pédagogie, pour que vous compreniez ce qui est fait. 
            Mon objectif : vous rendre autonome dans l’utilisation de vos équipements, sans jargon technique inutile.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl shadow mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2">💶 Tarifs & déplacement</h2>
          <p>
            Mon tarif est de <strong>50 € de l’heure</strong>, avec une intervention à domicile dans le secteur de Saint-Marceau (72) et alentours.
          </p>
          <p className="mt-2">
          Grâce au <Link to="/credit-impot" className="text-blue-700 font-semibold hover:underline">
            crédit d’impôt de 50 %
          </Link>, vous ne payez en réalité que <strong>25 € de l’heure</strong> après déclaration.
        </p>
          <p className="mt-2">
            Je me déplace gratuitement dans un rayon de 25 km autour de Saint-Marceau.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
