import { type ReactNode } from "react";

type BackgroundImageWindowProps = {
  children?: ReactNode;
};

export default function BackgroundImageWindow({ children }: BackgroundImageWindowProps) {
  return (
    <div
      className="relative rounded-lg overflow-hidden min-h-[400px]"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/windows-xp.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}
