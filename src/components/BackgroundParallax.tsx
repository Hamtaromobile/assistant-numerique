import { useEffect, useState } from "react";

export default function BackgroundParallax() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [docHeight, setDocHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // On récupère la hauteur totale du document
      setDocHeight(document.documentElement.scrollHeight);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startOffset = -500;
  const speedFactor = isMobile ? 0.2 : 0.1;
  const backgroundPositionY = startOffset - offsetY * speedFactor;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full -z-10 pointer-events-none"
      style={{
        height: docHeight + "px", // IMPORTANT : hauteur totale du document, pas juste 100vh
        backgroundImage: "url('/images/backgroundAccueil.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: `center ${backgroundPositionY}px`,
        opacity: 0.3,
      }}
    />
  );
}
