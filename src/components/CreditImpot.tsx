import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";
import ScrollToTopButton from "./ScrollToTopButton";

export default function CreditImpot() {
  useEffect(() => {
    document.body.classList.add("credit-impot");
    return () => {
      document.body.classList.remove("credit-impot");
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-800 font-sans flex flex-col">
      <Header />
       <div className="w-full p-8">
           <BackButton />
        </div>

      <main className="flex-grow p-8 max-w-4xl mx-auto">
       <ScrollToTopButton/>
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">🧾 Le crédit d’impôt de 50 %</h1>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
          <p>
            Vous pouvez bénéficier d’un <strong>crédit d’impôt de 50 %</strong> sur les prestations d’assistance informatique à domicile.
          </p>
          <p className="mt-2">
            👉 Si une intervention coûte 50 €, vous ne payez en réalité que <strong>25 €</strong> après remboursement par l’administration fiscale.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">✅ Qui peut en bénéficier ?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Tous les particuliers</strong>, imposables ou non.</li>
            <li>Pas besoin d’être retraité ou en situation de handicap.</li>
            <li>Le crédit est versé même si vous ne payez pas d’impôts.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">🧑‍💻 Prestations concernées</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Installation et configuration de matériel (PC, imprimante, box…)</li>
            <li>Aide à l’utilisation de vos appareils</li>
            <li>Dépannage (virus, lenteurs, erreurs système…)</li>
            <li>Accompagnement dans les démarches numériques simples</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-2">📄 Comment en bénéficier ?</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Je vous fournis une <strong>attestation fiscale annuelle</strong>.</li>
            <li>Vous indiquez le montant payé dans la déclaration d’impôt (case 7DB).</li>
            <li>Vous recevez un <strong>remboursement de 50 %</strong> du montant total.</li>
          </ol>
          <p className="mt-4">
            <strong>Exemple concret :</strong> une consultation à domicile facturée 50 € pour de l’assistance informatique personnalisée
            → vous êtes remboursé de <strong>25 €</strong> par l’administration fiscale
            → <span className="text-blue-700 font-semibold">coût réel pour vous : seulement 25 €</span>.
          </p>

        </section>

        <section className="bg-blue-50 p-6 rounded-xl shadow text-center">
          <p>
            Ce dispositif est prévu par l’article 199 sexdecies du Code général des impôts.
            <br />
            Je suis déclaré comme prestataire de <strong>services à la personne (SAP)</strong>, vous permettant d’en bénéficier légalement.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
