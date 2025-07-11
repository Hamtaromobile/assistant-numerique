import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";

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
          <h2 className="text-xl font-semibold mb-2">💶 Tarifs & zone d’intervention</h2>
          <p>
            Mon tarif est de <strong>50 € de l’heure</strong>, avec une intervention à domicile autour de Saint-Marceau (72).
          </p>
          <p className="mt-2">
            Grâce au{" "}
            <Link to="/credit-impot" className="text-blue-700 font-semibold hover:underline">
              crédit d’impôt de 50 %
            </Link>, le coût réel pour vous est de <strong>25 € de l’heure</strong> après déclaration.
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
