import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SITE_IMAGES } from '../data/siteData';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Events', route: 'events' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Blog', route: 'blog' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute, anchor?: string) => {
    onNavigate(route, anchor);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="font-medium tracking-wide">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-red-400 transition-colors"
              id="topbar-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{BUSINESS_INFO.locationShort}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <span className="text-[11px] text-red-400/95 hidden lg:inline font-medium tracking-wide">
              Islamabad &amp; Rawalpindi Catering &bull; Event Management
            </span>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow border-b border-slate-100 ${isScrolled ? 'shadow-md py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl"
            id="brand-header-link"
            aria-label="Cater Dine Events Home"
          >
            <img
              src={SITE_IMAGES.logo}
              alt="Cater Dine Events Logo"
              referrerPolicy="no-referrer"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl p-1 bg-slate-950 border border-slate-800 shadow-md ring-1 ring-red-500/25 transition-all duration-200 group-hover:scale-105 group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-950/30"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/logo.png')) {
                  target.src = '/logo.png';
                }
              }}
            />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-red-700 bg-red-50 font-semibold'
                      : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                  }`}
                  id={`nav-link-${item.route}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home', 'booking')}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              id="header-quote-button"
            >
              <span>Book Your Event</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('home', 'booking')}
              className="sm:hidden bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-2 rounded-md shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl"
                aria-label="Cater Dine Events Home"
              >
                <img
                  src={SITE_IMAGES.logo}
                  alt="Cater Dine Events Logo"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 object-contain rounded-xl p-1 bg-slate-950 border border-slate-800 shadow-xs ring-1 ring-red-500/20"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/logo.png')) {
                      target.src = '/logo.png';
                    }
                  }}
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-1">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-50 text-red-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                <button
                  onClick={() => handleNavClick('privacy')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-500 hover:text-slate-900"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleNavClick('terms')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-500 hover:text-slate-900"
                >
                  Terms &amp; Conditions
                </button>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-slate-50">
              <button
                onClick={() => handleNavClick('home', 'booking')}
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-3 px-4 rounded-lg shadow-sm text-center text-sm"
              >
                Request Quotation
              </button>
              <div className="mt-4 text-xs text-slate-600 space-y-1 text-center">
                <p><strong>Call:</strong> {BUSINESS_INFO.phone}</p>
                <p><strong>Office:</strong> {BUSINESS_INFO.locationShort}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
