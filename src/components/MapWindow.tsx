import React from "react";
import MapComponent from "./MapComponent";

const MapWindow: React.FC = () => {
  return (
    <div
      className={`
        mx-auto mt-10 rounded-xl shadow-2xl border border-gray-300 bg-white overflow-hidden flex flex-col
        max-w-4xl
      `}
    >
      {/* Barre de titre stylisée */}
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-200 via-gray-100 to-white px-4 py-3 border-b border-gray-300 select-none">
        <h3 className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
          Carte interactive
        </h3>
      </div>

      {/* Zone principale */}
      <div className="p-4 flex-grow min-h-[400px] flex items-center justify-center">
        <MapComponent />
      </div>
    </div>
  );
};

export default MapWindow;
