import React, { useState } from "react";
import MapComponent from "./MapComponent";

const MapWindow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div
      className={`
        mx-auto mt-10 rounded-lg shadow-lg border border-gray-300 bg-white overflow-hidden flex flex-col
        ${isMaximized ? "fixed inset-0 z-50 rounded-none" : "max-w-4xl"}
      `}
      style={{ height: isMaximized ? "100vh" : "auto" }}
    >
      {/* Barre de titre */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-300 select-none">
        <h3 className="text-gray-700 font-semibold">Map Application</h3>
        <div className="flex space-x-2">
          {/* Boutons style MacOS : rouge et jaune désactivés, vert actif */}
          <button
            aria-label="Fermer (désactivé)"
            className="w-3 h-3 rounded-full bg-red-500 opacity-50 cursor-not-allowed"
            disabled
          />
          <button
            aria-label="Minimiser (désactivé)"
            className="w-3 h-3 rounded-full bg-yellow-400 opacity-50 cursor-not-allowed"
            disabled
          />
          <button
            aria-label={isMaximized ? "Réduire" : "Agrandir"}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
            onClick={() => setIsMaximized(!isMaximized)}
          />
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
