import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    `Assalam o Alaikum! I would like to inquire about catering services in Islamabad with Cater Dine Events.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      {showTooltip && (
        <div className="pointer-events-auto mb-2 bg-white text-slate-800 text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 animate-bounce duration-1000 max-w-[210px]">
          <div>
            <p className="font-semibold text-emerald-800">Chat with our Catering Team</p>
            <p className="text-[11px] text-slate-500">Get instant quote on WhatsApp</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-700" />
      </a>
    </div>
  );
};
