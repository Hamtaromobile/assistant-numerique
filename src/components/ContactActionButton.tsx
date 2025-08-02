import { useState, useRef, useEffect } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

interface ContactActionButtonProps {
  phoneNumber: string;
  emailAddress: string;
  className?: string;
}

export default function ContactActionButton({ phoneNumber, emailAddress, className }: ContactActionButtonProps) {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowOptions(!showOptions);
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (!showOptions) {
        optionsRef.current?.focus();
      }
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showOptions && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showOptions]);

  return (
    <div ref={containerRef} className={`flex justify-center lg:hidden ${className ?? ""}`}>
      <div className="w-full max-w-xs">
        <button
          onClick={handleClick}
          className="group w-full flex items-center justify-center gap-2
            bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100
            text-gray-800 px-6 py-3 rounded-xl font-medium
            border border-gray-300 shadow hover:shadow-md
            hover:from-white hover:to-blue-200 transition-all duration-300"
          aria-expanded={showOptions}
          aria-controls="contact-options"
          aria-haspopup="true"
          type="button"
        >
          <FiMail className="w-5 h-5 text-sky-600 transition-transform group-hover:scale-110 duration-300" aria-hidden="true" />
          Contactez-moi
        </button>

        {showOptions && (
          <div
            id="contact-options"
            className="mt-3 flex flex-col gap-3 bg-white rounded-xl p-4 shadow-md border border-gray-200 animate-fade-in"
            role="region"
            aria-label="Options de contact"
            tabIndex={-1}
            ref={optionsRef}
          >
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-blue-100 text-sky-800 rounded-md py-2 font-medium hover:bg-blue-200 transition"
            >
              <FiPhone className="w-5 h-5" aria-hidden="true" />
              Par téléphone
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-center gap-2 bg-indigo-100 text-indigo-800 rounded-md py-2 font-medium hover:bg-indigo-200 transition"
            >
              <FiMail className="w-5 h-5" aria-hidden="true" />
              Par mail
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
