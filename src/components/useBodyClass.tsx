/**
 * Hook personnalisé : useBodyClass
 * 
 * Ce hook ajoute dynamiquement une classe CSS au <body> en fonction de l'URL actuelle.
 * Cela permet d'appliquer des styles globaux différents (ex: fond, animations) selon la page visitée.
 *
 * Exemple : 
 * - "/"                => body aura la classe "home"
 * - "/demarches-en-ligne" => body aura la classe "demarches-en-ligne"
 *
 * Utile pour des effets comme un fond dynamique différent selon la route.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useBodyClass() {
  const location = useLocation();

  useEffect(() => {
    // Supprimer les classes existantes
    document.body.classList.remove(
      "home",
      "soutien-informatique",
      "demarches-en-ligne",
      "installation-depannage",
      "credit-impot"
    );

    // Récupère le 1er segment de l'URL
    const path = location.pathname.split("/")[1] || "home";
    
    document.body.classList.add(path);
  }, [location.pathname]);
}
