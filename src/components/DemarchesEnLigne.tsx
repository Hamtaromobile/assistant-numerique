import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";
import ScreenFrame from "./ScreenFrame";

export default function DemarchesEnLigne() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 font-sans">
      <Header />

      <div className="w-full p-4 md:p-8">
        <BackButton />
      </div>

      <main className="p-4 md:p-8 max-w-4xl mx-auto w-full grow">
        <ScrollToTopButton />
        {/* Titre principal avec rôle de titre (h1 est natif) */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-6">
          Démarches en ligne
        </h1>

        <ScreenFrame>
          {/* Section 1 avec role="region" et aria-labelledby */}
          <section
            role="region"
            aria-labelledby="accompagnement-title"
            className="bg-gray-100 p-6 rounded-xl shadow-md mb-8"
          >
            <h2
              id="accompagnement-title"
              className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2"
            >
              {/* Emoji décoratif ignoré par les lecteurs d’écran */}
              <span aria-hidden="true">💻</span> Accompagnement numérique personnalisé
            </h2>

            <p className="block md:hidden text-base leading-relaxed">
              Je vous guide pas à pas dans vos démarches administratives en ligne, pour impôts, sécurité sociale, CAF, etc.
            </p>

            <p className="hidden md:block text-base leading-relaxed">
              Je vous accompagne pas à pas dans vos démarches administratives en ligne, que ce soit pour les impôts, la sécurité sociale, la CAF, ou tout autre service public.
              Ensemble, nous naviguons dans les interfaces numériques souvent complexes pour que vous puissiez les maîtriser sereinement.
            </p>
          </section>

          {/* Section 2 */}
          <section
            role="region"
            aria-labelledby="creation-dossiers-title"
            className="bg-gray-100 p-6 rounded-xl shadow-md mb-8"
          >
            <h2
              id="creation-dossiers-title"
              className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2"
            >
              <span aria-hidden="true">📝</span> Création et suivi de dossiers
            </h2>

            <p className="block md:hidden text-base leading-relaxed">
              Je vous aide à créer des comptes, remplir des formulaires et suivre vos demandes en ligne.
            </p>

            <p className="hidden md:block text-base leading-relaxed">
              Besoin de créer un compte, remplir un formulaire ou suivre une demande en ligne ? Je vous aide à comprendre les étapes et à remplir correctement les informations.
              Vous gagnez du temps et évitez les erreurs grâce à une assistance claire et personnalisée.
            </p>
          </section>

          {/* Section 3 */}
          <section
            role="region"
            aria-labelledby="securite-title"
            className="bg-gray-100 p-6 rounded-xl shadow-md mb-8"
          >
            <h2
              id="securite-title"
              className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2"
            >
              <span aria-hidden="true">🔐</span> Sécurité et confidentialité
            </h2>

            <p className="block md:hidden text-base leading-relaxed">
              Je vous explique comment protéger vos données et sécuriser vos comptes en ligne.
            </p>

            <p className="hidden md:block text-base leading-relaxed">
              Votre vie privée est importante. Je vous explique comment protéger vos données personnelles et sécuriser vos comptes en ligne, notamment par des mots de passe forts et des connexions sécurisées.
            </p>
            <p className="hidden md:block mt-2 text-base leading-relaxed">
              Je ne conserve aucune information confidentielle, mon rôle est uniquement de vous guider dans vos démarches.
            </p>
          </section>

          {/* Section tarifs */}
          <section
            role="region"
            aria-labelledby="tarifs-title"
            className="bg-blue-50 p-6 rounded-xl shadow mt-8 text-center"
          >
            <h2 id="tarifs-title" className="text-lg md:text-xl font-semibold mb-4">
              💶 Tarifs & zone d’intervention
            </h2>

            <p className="text-gray-800 mb-2">
              Tarif : <strong>50 € de l’heure</strong><br />
              Grâce au crédit d’impôt de 50 % pour les services à la personne, 
              vous récupérez <strong>25 €</strong> après votre déclaration annuelle. 
              <br />
              <span className="text-green-700 font-semibold">
                ✅ Votre coût réel : <strong>25 € de l’heure</strong>
              </span>
              <br />
              Chaque intervention est réalisée avec 
              <span className="font-semibold text-blue-700"> patience</span>, 
              <span className="font-semibold text-blue-700"> pédagogie</span> et 
              <span className="font-semibold text-blue-700"> bienveillance</span>.
            </p>

            <p className="mt-3">
              <Link
                to="/credit-impot"
                className="inline-block bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-blue-800 transition"
                aria-describedby="credit-description"
              >
                En savoir plus sur le crédit d’impôt
              </Link>
            </p>
            {/* Description supplémentaire pour le lien (optionnel) */}
            <p id="credit-description" className="sr-only">
              Cliquez pour en savoir plus sur le crédit d’impôt applicable aux services à la personne.
            </p>

            <p className="mt-5 text-gray-800">
               Je me déplace gratuitement dans un rayon de <strong>25 km autour de Saint-Marceau (72)</strong>.
            </p>

            <div className="mt-6 flex flex-col items-center">
              <img
                src="/images/logoSAP.webp"
                alt="Logo Service à la Personne"
                className="h-16 mb-2"
              />
              <p className="text-xs md:text-sm text-gray-600 italic max-w-xs text-center">
                Activité agréée « Service à la Personne » – vous bénéficiez du crédit d’impôt
              </p>
            </div>
          </section>
        </ScreenFrame>
      </main>

      <Footer />
    </div>
  );
}
