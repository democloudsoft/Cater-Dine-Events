import React from 'react';
import { EVENT_TYPES, SITE_IMAGES, BUSINESS_INFO } from '../data/siteData';
import { PageRoute } from '../types';
import { ArrowRight } from 'lucide-react';

interface EventsViewProps {
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={SITE_IMAGES.hero}
            alt="Events Catered"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Event Types &amp; Milestones
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore dedicated food concepts and catering setups designed for every step of Pakistani wedding traditions and formal occasions.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_TYPES.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <span className="absolute top-3 right-3 text-xs font-bold bg-slate-900/80 backdrop-blur-md text-red-400 px-3 py-1 rounded-full border border-slate-700">
                    {event.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('home', 'booking')}
                      className="text-xs font-semibold text-red-700 hover:text-red-800 flex items-center gap-1.5"
                    >
                      <span>Inquire for {event.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs text-slate-600 hover:text-slate-800 font-medium"
                    >
                      Call Office
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
