import { type ReactNode } from "react";

type BackgroundImageWindowProps = {
  children?: ReactNode;
};

export default function BackgroundImageWindow({ children }: BackgroundImageWindowProps) {
  return (
    <div className="relative rounded-lg overflow-hidden min-h-[400px] bg-blue-200">
      {/* Image décorative responsive avec <picture> */}
      <picture>
        <source
          srcSet="/images/windows-xp-soft-blur.webp"
          type="image/webp"
          media="(max-width: 768px)"
        />
        <source
          srcSet="/images/windows-xp.webp"
          type="image/webp"
        />
        <img
          src="/images/windows-xp.webp"
          alt="Fond Windows XP"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          style={{ maxHeight: '100vh' }}
        />
      </picture>

      {/* Voile de lisibilité */}
      <div className="absolute inset-0 bg-blue-100/30 backdrop-blur-sm" />

      {/* Contenu au premier plan */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}
