import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";
import ScreenFrame from "./ScreenFrame";

export default function DemarchesEnLigne() {
  return (
    <div className="flex flex-col min-h-screen  text-gray-800 font-sans">
      <Header />

      <div className="w-full p-8">
        <BackButton />
      </div>

      <main className="p-8 max-w-4xl mx-auto w-full grow">
        <ScrollToTopButton />
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
          Démarches en ligne
        </h1>
        <ScreenFrame>
        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">💻 Accompagnement numérique personnalisé</h2>
          <p>
            Je vous accompagne pas à pas dans vos démarches administratives en ligne, que ce soit pour les impôts, la sécurité sociale, la CAF, ou tout autre service public.
            Ensemble, nous naviguons dans les interfaces numériques souvent complexes pour que vous puissiez les maîtriser sereinement.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">📝 Création et suivi de dossiers</h2>
          <p>
            Besoin de créer un compte, remplir un formulaire ou suivre une demande en ligne ? Je vous aide à comprendre les étapes et à remplir correctement les informations.
            Vous gagnez du temps et évitez les erreurs grâce à une assistance claire et personnalisée.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">🔐 Sécurité et confidentialité</h2>
          <p>
            Votre vie privée est importante. Je vous explique comment protéger vos données personnelles et sécuriser vos comptes en ligne, notamment par des mots de passe forts et des connexions sécurisées.
          </p>
          <p className="mt-2">
            Je ne conserve aucune information confidentielle, mon rôle est uniquement de vous guider dans vos démarches.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl shadow mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">💶 Tarifs & zone d’intervention</h2>
          <p className="text-gray-800 mb-2">
            Je propose un accompagnement informatique personnalisé, à votre domicile, au tarif de <strong>50 € de l’heure</strong>.
            Chaque intervention est réalisée avec <span className="font-semibold text-blue-700">patience</span>, 
            <span className="font-semibold text-blue-700"> pédagogie</span> et <span className="font-semibold text-blue-700">bienveillance</span>,
            pour vous offrir un service sur-mesure, adapté à vos besoins.
          </p>
          <p className="mt-4 text-gray-800">
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
            className="h-16 mb-2"
          />
          <p className="text-sm text-gray-600 italic">
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
