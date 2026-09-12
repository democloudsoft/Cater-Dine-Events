import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SITE_IMAGES } from '../data/siteData';
import { PageRoute } from '../types';

interface AboutViewProps {
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Subpage Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={SITE_IMAGES.wedding}
            alt="Cater Dine Events Heritage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Cater Dine Events
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Bringing authentic Pakistani gastronomy, hygienic culinary standards, and regal hospitality to Islamabad and Rawalpindi.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Crafting Unforgettable Feasts in the Capital Since Day One
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Operating from the central hub of F-10 Markaz, Islamabad, <strong>Cater Dine Events</strong> was founded with a singular purpose: to elevate wedding and celebratory dining beyond generic catering templates into an authentic, memorable feast.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that in Pakistani culture, dining together is the highest gesture of respect and affection toward your guests. Whether it is a traditional slow-simmered Mutton Qorma with whole spices, charcoal-smoked Malai Boti, or fragrant Zafrani Pulao, every recipe is handled with culinary integrity.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-100 text-red-800 shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Uncompromising Hygiene &amp; Freshness</h4>
                    <p className="text-xs text-slate-600 mt-0.5">All mutton, beef, and poultry are procured fresh daily from certified sources. No preservatives, synthetic colorings, or stale gravies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-100 text-red-800 shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dedicated Floor Captains</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Every event is assigned an on-site catering supervisor who ensures buffet lines remain fully replenished, warm, and orderly throughout your event.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-100 text-red-800 shrink-0 mt-0.5">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Honest, Transparent Pricing</h4>
                    <p className="text-xs text-slate-600 mt-0.5">No hidden charges or surprise surcharges on event night. All per-head proposals are clear and itemized upfront.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={SITE_IMAGES.buffet}
                  alt="Buffet display"
                  className="rounded-2xl shadow-lg object-cover h-64 w-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <img
                  src={SITE_IMAGES.food}
                  alt="Pakistani wedding food"
                  className="rounded-2xl shadow-lg object-cover h-64 w-full mt-6"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Team Guarantee */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Visit Our F-10 Markaz Consultation Office
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                We invite prospective brides, grooms, families, and corporate planners to sit down with our executive coordinator at our office in Gul Plaza, F-10 Markaz. Discuss menus, inspect crockery samples, and finalize custom packages.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Schedule an In-Person Meeting
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
