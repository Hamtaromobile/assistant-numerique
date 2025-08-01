import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";
import ScreenFrame from "./ScreenFrame";

export default function SoutienInformatique() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 font-sans">
      <Header />

      <div className="w-full p-4 md:p-8">
        <BackButton />
      </div>

      <main className="p-4 md:p-8 max-w-4xl mx-auto w-full grow">
        <ScrollToTopButton />

        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 md:mb-6">
          Soutien informatique à domicile
        </h1>

        <ScreenFrame>
          <section
            role="region"
            aria-labelledby="titre-accompagnement"
            className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8"
          >
            <h2
              id="titre-accompagnement"
              className="text-xl md:text-2xl font-semibold mb-2"
            >
              <span role="img" aria-hidden="true">
                💻
              </span>{" "}
              Accompagnement personnalisé
            </h2>

            {/* Mobile / tablette - version courte */}
            <p className="block md:hidden">
              Apprenez à mieux utiliser votre ordinateur, tablette ou smartphone, chez
              vous, à votre rythme.
            </p>
            <p className="block md:hidden mt-1">
              Navigation, e-mails, documents, photos… Je m’adapte à vos besoins.
            </p>

            {/* Ordinateur - version complète */}
            <p className="hidden md:block">
              Vous souhaitez mieux maîtriser votre ordinateur, votre tablette ou votre
              smartphone ? Je vous propose un accompagnement individuel, à votre
              domicile, selon vos besoins et votre niveau.
            </p>
            <p className="hidden md:block mt-2">
              Découverte de l’ordinateur, navigation sur Internet, envoi d’e-mails,
              création de documents, sauvegarde de fichiers, gestion des photos,
              apprentissage de logiciels spécifiques… Je m’adapte à vos objectifs.
            </p>
          </section>

          <section
            role="region"
            aria-labelledby="titre-simplicite"
            className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-8"
          >
            <h2
              id="titre-simplicite"
              className="text-xl md:text-2xl font-semibold mb-2"
            >
              <span role="img" aria-hidden="true">
                📱
              </span>{" "}
              Simplicité & bienveillance
            </h2>

            {/* Mobile / tablette - version courte */}
            <p className="block md:hidden">
              Explications simples et personnalisées, pour avancer en confiance.
            </p>
            <p className="block md:hidden mt-1">
              Aide pour démarches en ligne, visioconférences, messagerie, cloud.
            </p>

            {/* Ordinateur - version complète */}
            <p className="hidden md:block">
              Je prends le temps de vous expliquer les choses simplement, sans jargon
              technique. Chaque séance est personnalisée, pour que vous puissiez
              avancer à votre rythme, en toute confiance.
            </p>
            <p className="hidden md:block mt-2">
              Je peux aussi vous aider à utiliser des services utiles au quotidien :
              démarches en ligne, visioconférences, applications de messagerie
              (WhatsApp, Signal…), gestion des mots de passe ou du stockage dans le
              cloud.
            </p>
          </section>

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

            <p className="text-gray-800 mb-2">
              <span className="text-green-700 font-semibold">
                <span role="img" aria-hidden="true">
                  ✅
                </span>{" "}
                Vous ne payez que <strong>25 € de l’heure</strong>
              </span>{" "}
              grâce au crédit d’impôt de 50 %, réservé aux particuliers dans le cadre
              des services à la personne.
              <br />
              Le tarif initial est de <strong>50 € de l’heure</strong>, mais vous
              récupérez la moitié du montant via votre déclaration annuelle aux
              impôts.
              <br />
              Chaque intervention est réalisée avec{" "}
              <span className="font-semibold text-blue-700">patience</span>,{" "}
              <span className="font-semibold text-blue-700"> pédagogie</span> et{" "}
              <span className="font-semibold text-blue-700"> bienveillance</span>, pour
              un accompagnement sur-mesure.
            </p>

            <p className="mt-3 text-gray-800">
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
              <span role="img" aria-hidden="true">
                📍
              </span>{" "}
              Je me déplace gratuitement dans un rayon de{" "}
              <strong>25 km autour de Saint-Marceau (72)</strong>.
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
