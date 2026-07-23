import { useEffect, useState } from "react";

export default function BackgroundParallax() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [docHeight, setDocHeight] = useState(window.innerHeight);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setDocHeight(document.documentElement.scrollHeight);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (reducedMotion) return; // désactive l’effet si réduction du mouvement demandée

    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  const startOffset = -500;
  const speedFactor = isMobile ? 0.2 : 0.1;
  const backgroundPositionY = reducedMotion ? startOffset : startOffset - offsetY * speedFactor;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full -z-10 pointer-events-none"
      style={{
        height: docHeight + "px",
        backgroundImage: `url(${import.meta.env.BASE_URL}images/backgroundAccueil.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: `center ${backgroundPositionY}px`,
        opacity: 0.5,
      }}
    />
  );
}
