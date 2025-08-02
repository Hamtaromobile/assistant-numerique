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

      <main
        className="flex-grow p-8 flex justify-center items-start pt-20"
        role="main"
        aria-labelledby="mentions-legales-title"
      >
        <div className="max-w-4xl bg-white rounded-3xl shadow-lg p-8 text-gray-800 leading-relaxed">
          <h1
            id="mentions-legales-title"
            className="text-4xl font-extrabold text-blue-700 mb-8 text-center"
          >
            Mentions légales
          </h1>

          <section className="mb-6" aria-label="Informations générales">
            <p>
              Conformément à la législation française, voici les informations légales concernant ce site et la micro-entreprise qui l’exploite.
            </p>
          </section>

          <section className="mb-6" aria-labelledby="info-entreprise-title">
            <h2
              id="info-entreprise-title"
              className="text-2xl font-semibold text-blue-600 mb-3"
            >
              Informations sur l’entreprise
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Nom de l’entreprise :</strong> Antoine Lozach</li>
              <li><strong>Statut :</strong> Micro-entreprise (Services à la Personne - SAP)</li>
              <li><strong>Numéro SIRET :</strong> <span lang="fr">123 456 789 00012</span></li>
              <li><strong>Numéro SAP :</strong> SAP938938198</li>
              <li><strong>Adresse :</strong> En tant qu'entrepreneur individuel bénéficiant de la diffusion partielle (article A123-96 du Code de commerce), l’adresse du siège n’est pas publiée.</li>
              <li><strong>Responsable de publication :</strong> Antoine Lozach</li>
              <li>
                <strong>Contact :</strong>{" "}
                <a href="mailto:antoine.informatique72@gmail.com" className="text-blue-600 underline">
                  antoine.informatique72@gmail.com
                </a>{" "}
                —{" "}
                <a href="tel:+33675418360" className="text-blue-600 underline">
                  06 75 41 83 60
                </a>
              </li>
            </ul>

            <p className="mt-4 text-sm text-gray-700">
              Prestataire déclaré Service à la Personne (SAP).  
              Les prestations informatiques proposées à domicile peuvent ouvrir droit à un crédit d’impôt de 50 % conformément à l’article 199 sexdecies du Code général des impôts.
            </p>
          </section>

          <section className="mb-6" aria-labelledby="hebergeur-title">
            <h2
              id="hebergeur-title"
              className="text-2xl font-semibold text-blue-600 mb-3"
            >
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par OVH, 2 rue Kellermann, <span lang="fr">59100 Roubaix</span>, France.
            </p>
          </section>

          <p className="mt-12 text-center text-gray-600 text-sm" aria-label="Droits réservés">
            © {new Date().getFullYear()} Antoine Lozach — Tous droits réservés
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
