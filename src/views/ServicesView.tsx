import React from 'react';
import { UtensilsCrossed, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO, SITE_IMAGES } from '../data/siteData';
import { PageRoute } from '../types';

interface ServicesViewProps {
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={SITE_IMAGES.buffet}
            alt="Catering Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Catering &amp; Event Services
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            From regal wedding buffets and lively Mehndi street counters to corporate seminars and live BBQ grills in Islamabad.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES_LIST.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  } p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all`}
                >
                  <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                        <UtensilsCrossed className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                        Service #{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {service.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onNavigate('home', 'booking')}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2"
                      >
                        <span>Book for this Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Cater Dine Events, I want to inquire about ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-emerald-700 hover:underline flex items-center gap-1.5"
                      >
                        <span>Discuss on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                      <img
                        src={
                          index === 0 ? SITE_IMAGES.wedding :
                          index === 1 ? SITE_IMAGES.buffet :
                          index === 2 ? SITE_IMAGES.corporate :
                          index === 3 ? SITE_IMAGES.mehndi :
                          index === 4 ? SITE_IMAGES.nikkah :
                          index === 5 ? SITE_IMAGES.setup :
                          index === 6 ? SITE_IMAGES.bbq :
                          index === 7 ? SITE_IMAGES.hitea :
                          SITE_IMAGES.outdoor
                        }
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
