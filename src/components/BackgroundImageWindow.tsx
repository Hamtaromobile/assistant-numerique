import { type ReactNode } from "react";

type BackgroundImageWindowProps = {
  children?: ReactNode;
};

export default function BackgroundImageWindow({ children }: BackgroundImageWindowProps) {
  return (
    <div className="relative rounded-lg overflow-hidden min-h-[400px] bg-blue-200">

      {/* Image de fond décorative */}
      <img
        src={`${import.meta.env.BASE_URL}/images/windows-xp.webp`}
        alt="" // Image décorative => pas de description
        role="presentation"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        style={{ maxHeight: "100vh" }}
      />

      {/* Voile pour lisibilité */}
      <div
        className="absolute inset-0 bg-blue-100/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Contenu principal au premier plan */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}
