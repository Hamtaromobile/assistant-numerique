import Header from "./Header";
import Footer from "./Footer";

export default function DemarchesEnLigne() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-8">
      <Header />
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6">Soutien informatique</h1>
      <p>Aide personnalisée à domicile pour tous vos appareils.</p>
      <p className="mt-4">
        Ici, tu peux détailler les services proposés, exemples, tarifs, FAQ, etc.
      </p>
      <Footer />
    </div>
  );
}