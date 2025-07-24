import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Header />

        <div className="w-full p-8">
            <BackButton />
        </div>
      
      <main className="flex-grow p-8 flex justify-center items-start pt-20">
        <div className="max-w-4xl bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
            Mentions légales
          </h1>

          <section className="mb-6 text-gray-800 leading-relaxed">
            <p>
              Conformément à la législation française, voici les informations légales concernant ce site et la micro-entreprise qui l’exploite.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Informations sur l’entreprise</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Nom de l’entreprise :</strong> Antoine Lozach</li>
              <li><strong>Statut :</strong> Micro-entreprise (Services à la Personne - SAP)</li>
              <li><strong>Numéro SIRET :</strong> 123 456 789 00012</li>
              <li><strong>Adresse :</strong> 12 rue de la République, 72000 Le Mans</li>
              <li><strong>Responsable de publication :</strong> Antoine Lozach</li>
              <li><strong>Contact :</strong> antoine.informatique72@gmail.com - 06 75 41 83 60</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Hébergement</h2>
            <p className="text-gray-700">
              Ce site est hébergé par OVH, 2 rue Kellermann, 59100 Roubaix, France.
            </p>
          </section>

          <footer className="mt-12 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Antoine Lozach — Tous droits réservés
          </footer>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
