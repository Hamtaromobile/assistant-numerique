export default function Footer() {
  return (
    <footer
      className="bg-blue-800 text-white px-4 py-6 text-center text-sm"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto space-y-2">
        {/* Logo uniquement mobile, même taille que Header desktop */}
        <div className="block lg:hidden">
          <img
            src="/images/logo.webp"
            alt="Logo Assistance informatique"
            className="mx-auto w-32 h-auto max-h-24 object-contain drop-shadow-md"
          />
        </div>

        {/* Nom + droits */}
        <p>© {new Date().getFullYear()} Antoine Lozach — Tous droits réservés</p>

        {/* Coordonnées */}
        <address className="not-italic">
          <p>
            <span aria-hidden="true" role="img">📞</span>{' '}
            <a
              href="tel:0675418360"
              className="underline hover:text-blue-300"
              aria-label="Téléphoner au 06 75 41 83 60"
            >
              06 75 41 83 60
            </a>{' '}
            —{' '}
            <span aria-hidden="true" role="img">📧</span>{' '}
            <a
              href="mailto:antoine.informatique72@gmail.com"
              className="underline hover:text-blue-300"
              aria-label="Envoyer un mail à antoine.informatique72@gmail.com"
            >
              antoine.informatique72@gmail.com
            </a>
          </p>
        </address>

        {/* Mentions légales */}
        <p>
          <a
            href="/mentions-legales"
            className="underline hover:text-blue-300"
            aria-label="Voir les mentions légales"
          >
            Mentions légales
          </a>
        </p>
      </div>
    </footer>
  );
}
