import Header from "./components/Header";
import HelpCard from "./components/HelpCard";

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition w-full sm:w-1/2 md:w-1/3">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <div>
        <Header />
      </div>
      <section className="p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Mes services</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon="💻"
            title="Soutien informatique"
            description="Aide personnalisée à domicile pour tous vos appareils."
          />
          <ServiceCard
            icon="🌐"
            title="Démarches en ligne"
            description="Je vous accompagne dans vos démarches administratives numériques."
          />
          <ServiceCard
            icon="🔧"
            title="Installation & dépannage"
            description="Installation, configuration et résolution de problèmes informatiques."
          />
        </div>
        <div>
          <HelpCard />
        </div>
      </section>

      <section className="bg-white p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">À propos</h2>
        <p className="max-w-3xl mx-auto">
          Passionné d’informatique, j’accompagne les particuliers — notamment les seniors —
          pour leur simplifier la vie numérique, à leur rythme, avec bienveillance.
        </p>
      </section>

      <section className="bg-blue-100 p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>📞 06 75 41 83 60</p>
        <p>📧 contact@example.com</p>
      </section>

      <footer className="bg-blue-800 text-white text-center p-4">
        © {new Date().getFullYear()} Antoine Lozach — Tous droits réservés
      </footer>
    </div>
  );
}
