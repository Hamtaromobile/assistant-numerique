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

      <div className="w-full p-8">
        <BackButton />
      </div>

      <main className="p-8 max-w-4xl mx-auto w-full grow">
        <ScrollToTopButton />
        
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
          Soutien informatique à domicile
        </h1>
        <ScreenFrame>
        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">💻 Accompagnement personnalisé</h2>
          <p>
            Vous souhaitez mieux maîtriser votre ordinateur, votre tablette ou votre smartphone ? Je vous propose un accompagnement individuel, à votre domicile, selon vos besoins et votre niveau.
          </p>
          <p className="mt-2">
            Découverte de l’ordinateur, navigation sur Internet, envoi d’e-mails, création de documents, sauvegarde de fichiers, gestion des photos, apprentissage de logiciels spécifiques… Je m’adapte à vos objectifs.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">📱 Simplicité & bienveillance</h2>
          <p>
            Je prends le temps de vous expliquer les choses simplement, sans jargon technique. Chaque séance est personnalisée, pour que vous puissiez avancer à votre rythme, en toute confiance.
          </p>
          <p className="mt-2">
            Je peux aussi vous aider à utiliser des services utiles au quotidien : démarches en ligne, visioconférences, applications de messagerie (WhatsApp, Signal…), gestion des mots de passe ou du stockage dans le cloud.
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
