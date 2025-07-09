import Header from "./Header";
import Footer from "./Footer";

export default function InstallationDepannage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="p-8">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6">Soutien informatique</h1>
      <p>Aide personnalisée à domicile pour tous vos appareils.</p>
      <p className="mt-4">
        Ici, tu peux détailler les services proposés, exemples, tarifs, FAQ, etc.
      </p>
      </main>
      <Footer />
    </div>
  );
}