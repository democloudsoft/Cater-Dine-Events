import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SITE_IMAGES, SERVICES_LIST } from '../data/siteData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl group"
              aria-label="Cater Dine Events Home"
            >
              <img
                src={SITE_IMAGES.logo}
                alt="Cater Dine Events Logo"
                referrerPolicy="no-referrer"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain bg-black rounded-2xl p-2 shadow-xl shadow-black/80 border border-slate-800 ring-1 ring-red-500/30 transition-transform duration-200 group-hover:scale-105 group-hover:border-red-500 group-hover:ring-red-500/60"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
              />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premier catering and event services in Islamabad and Rawalpindi. Specializing in authentic Pakistani wedding banquets, corporate dining, live BBQ, and bespoke event coordination.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', route: 'home' as PageRoute },
                { label: 'About Cater Dine', route: 'about' as PageRoute },
                { label: 'Catering Services', route: 'services' as PageRoute },
                { label: 'Celebration Types', route: 'events' as PageRoute },
                { label: 'Food & Décor Gallery', route: 'gallery' as PageRoute },
                { label: 'Catering Guides & Blog', route: 'blog' as PageRoute },
                { label: 'Contact & Inquiries', route: 'contact' as PageRoute },
              ].map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => onNavigate(item.route)}
                    className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2 group text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-red-400 transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-slate-400 hover:text-red-400 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-red-500 hover:text-red-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 pt-1"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Office info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">F-10 Markaz Office</h4>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-slate-300 hover:text-red-400 font-medium transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-slate-300 hover:text-red-400 transition-colors text-xs sm:text-sm"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-xs">Mon &ndash; Sun: 10:00 AM &ndash; 10:00 PM</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">Registered Catering &amp; Event Provider in ICT</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Cater Dine Events. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-red-400 transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-red-400 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
