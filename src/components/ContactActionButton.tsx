import { useState, useRef } from "react";
import { FiMail } from "react-icons/fi";  // enveloppe
import { FiPhone } from "react-icons/fi"; // téléphone

interface ContactActionButtonProps {
  phoneNumber: string;
  emailAddress: string;
  className?: string;
}

export default function ContactActionButton({ phoneNumber, emailAddress, className }: ContactActionButtonProps) {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowOptions(!showOptions);
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <div ref={containerRef} className={`flex justify-center lg:hidden ${className ?? ""}`}>
      <div className="w-full max-w-xs">
        <button
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300"
          aria-expanded={showOptions}
          aria-controls="contact-options"
        >
          <FiMail className="w-5 h-5" />
          Contactez-moi
        </button>

        {showOptions && (
          <div
            id="contact-options"
            className="mt-3 flex flex-col gap-3 bg-white rounded-xl p-4 shadow-lg border border-gray-200 animate-fade-in"
            role="region"
            aria-label="Options de contact"
          >
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-green-500 text-white rounded-md py-2 font-medium hover:bg-green-600 transition"
            >
              <FiPhone className="w-5 h-5" />
              Par téléphone
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-center gap-2 bg-indigo-500 text-white rounded-md py-2 font-medium hover:bg-indigo-600 transition"
            >
              <FiMail className="w-5 h-5" />
              Par mail
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
