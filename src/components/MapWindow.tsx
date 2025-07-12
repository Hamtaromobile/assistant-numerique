import React, { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import MapComponent from "./MapComponent";

const MapWindow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div
      className={`
        mx-auto mt-10 rounded-xl shadow-2xl border border-gray-300 bg-white overflow-hidden flex flex-col transition-all duration-300
        ${isMaximized ? "fixed inset-0 z-50 rounded-none" : "max-w-4xl"}
      `}
      style={{ height: isMaximized ? "100vh" : "auto" }}
    >
      {/* Barre de titre stylisée */}
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-200 via-gray-100 to-white px-4 py-3 border-b border-gray-300 select-none">
        <h3 className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
          Carte interactive
        </h3>
        <div className="flex items-center">
          {/* Bouton agrandir/réduire */}
          <button
            aria-label={isMaximized ? "Réduire" : "Agrandir"}
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 rounded hover:bg-green-100 text-green-600 transition"
          >
            {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Zone principale */}
      <div className="p-4 flex-grow min-h-[400px] flex items-center justify-center">
        {isVisible ? (
          <MapComponent isMaximized={isMaximized} />
        ) : (
          <button
            onClick={() => setIsVisible(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Ouvrir la carte
          </button>
        )}
      </div>
    </div>
  );
};

export default MapWindow;
