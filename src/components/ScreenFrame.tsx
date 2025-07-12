// ScreenFrame.tsx
import type { ReactNode } from "react";

interface ScreenFrameProps {
  children: ReactNode;
}

export default function ScreenFrame({ children }: ScreenFrameProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-gray-300 relative">
      {/* Barre de haut type smartphone */}
      <div className="w-20 h-2 bg-gray-300 rounded-full mx-auto mb-6"></div>

      {/* Contenu transmis au composant */}
      {children}

      {/* Boutons latéraux (optionnels) */}
      <div className="hidden md:block absolute top-20 left-0 w-1.5 h-10 bg-gray-400 rounded-r-lg"></div>
      <div className="hidden md:block absolute top-20 right-0 w-1.5 h-10 bg-gray-400 rounded-l-lg"></div>
    </div>
  );
}
