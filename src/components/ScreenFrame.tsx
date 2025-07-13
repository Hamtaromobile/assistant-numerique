// ScreenFrame.tsx
import type { ReactNode } from "react";

interface ScreenFrameProps {
  children: ReactNode;
}

export default function ScreenFrame({ children }: ScreenFrameProps) {
  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-gray-300 relative"
      style={{
        backgroundImage: `url('/images/backgroundTelephoneCard.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom', // tu peux ajuster
        backgroundSize: 'cover', // ou 'cover' selon l'effet souhaité
      }}
    >
      {/* Barre du haut style smartphone */}
      <div className="w-20 h-2 bg-gray-300 rounded-full mx-auto mb-6"></div>

      {/* Contenu */}
      {children}

      {/* Boutons latéraux (optionnels) */}
      <div className="hidden md:block absolute top-20 left-0 w-1.5 h-10 bg-gray-400 rounded-r-lg"></div>
      <div className="hidden md:block absolute top-20 right-0 w-1.5 h-10 bg-gray-400 rounded-l-lg"></div>

      {/* Décoration bas du "téléphone" */}
      <div className="mt-8 relative">
        {/* Dock avec 3 points */}
        <div className="flex justify-center space-x-6 mb-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
