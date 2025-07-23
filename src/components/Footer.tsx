export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white px-4 py-6 text-center text-sm">
      <div className="max-w-4xl mx-auto space-y-2">
        {/* Nom + droits */}
        <p>© {new Date().getFullYear()} Antoine Lozach — Tous droits réservés</p>

        {/* Coordonnées */}
        <p>
          📞 <a href="tel:0675418360" className="underline hover:text-blue-300">06 75 41 83 60</a> — 
          📧 <a href="mailto:contact@example.com" className="underline hover:text-blue-300">contact@example.com</a>
        </p>

        {/* Mentions légales ou lien admin si besoin */}
        <p>
          <a href="/mentions-legales" className="underline hover:text-blue-300">Mentions légales</a>
        </p>
      </div>
    </footer>
  );
}
