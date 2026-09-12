import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  UtensilsCrossed, 
  Users, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Send,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Star
} from 'lucide-react';
import { BUSINESS_INFO, SITE_IMAGES, SERVICES_LIST, EVENT_TYPES, FOOD_SPECIALTIES, FAQS, GALLERY_ITEMS } from '../data/siteData';
import { PageRoute } from '../types';
import { MenuEstimator } from '../components/MenuEstimator';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenGalleryItem: (index: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenGalleryItem }) => {
  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Food Specialties active tab
  const [activeFoodTab, setActiveFoodTab] = useState<number>(0);

  // Booking form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding / Barat',
    guests: '200',
    eventDate: '',
    venue: '',
    message: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Also offer direct WhatsApp dispatch
    const text = `Assalam o Alaikum Cater Dine Events!%0A%0A` +
      `*New Booking Inquiry:*%0A` +
      `• Name: ${formData.name}%0A` +
      `• Phone: ${formData.phone}%0A` +
      `• Event: ${formData.eventType}%0A` +
      `• Guests: ${formData.guests}%0A` +
      `• Date: ${formData.eventDate || 'Not fixed yet'}%0A` +
      `• Venue / Area: ${formData.venue || 'Islamabad/Rawalpindi'}%0A` +
      `• Notes: ${formData.message || 'None'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.hero}
            alt="Cater Dine Events Wedding Banquet Islamabad"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-75"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Exceptional Catering &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200">
                Memorable Events
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Authentic Pakistani feasts, exquisite wedding banquets, live charcoal BBQ, and executive corporate catering across Islamabad and Rawalpindi. Located in F-10 Markaz.
            </p>

            {/* Quick stats pills */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium text-slate-200">
              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <span>100% Fresh Halal Ingredients</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800">
                <Users className="w-4 h-4 text-red-400" />
                <span>50 to 1,500+ Guests Capacity</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-red-400" />
                <span>Punctual Setup Guarantee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                id="hero-book-now-btn"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#menu-estimator"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-red-400" />
                <span>Explore Menu &amp; Prices</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-2 py-2 px-3"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights Strip */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-red-500/50">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">15+ Years</p>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5">Culinary Excellence</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">1,200+</p>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5">Weddings &amp; Events</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">100%</p>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5">Fresh Daily Meats</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">F-10 Markaz</p>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5">Islamabad Head Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section Preview */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Islamabad&apos;s Trusted Culinary &amp; Catering Partner
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a passion for authentic Pakistani hospitality, Cater Dine Events operates from Gul Plaza, F-10 Markaz, Islamabad. We specialize in bringing restaurant-quality taste, meticulous hygiene, and stately presentation to weddings, family milestones, and corporate gatherings.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are hosting an intimate 50-guest Nikkah or a grand 1,000-guest Barat dinner in an Islamabad marquee or farmhouse, our chefs, floor captains, and service personnel ensure your guests enjoy piping-hot, delicious food served with utmost courtesy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Fresh Prime Mutton & Beef",
                  "Live Charcoal BBQ & Tandoor",
                  "Stainless Steel Chafing Stations",
                  "Trained Uniformed Waiters",
                  "Complete Cutlery & Crockery",
                  "Transparent Per-Head Pricing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold text-sm group"
                >
                  <span>Learn more about our heritage &amp; kitchen values</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={SITE_IMAGES.wedding}
                    alt="Wedding catering setup by Cater Dine Events"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white rounded-xl p-5 shadow-xl border border-slate-100 max-w-[240px]">
                  <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-900">Rated 4.9 / 5.0</p>
                  <p className="text-[11px] text-slate-600">By 500+ host families across the Twin Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Catering Services */}
      <section className="py-16 sm:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Catering Services Tailored for Every Occasion
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              From grand multi-day wedding celebrations to corporate meetings, our team delivers seamless culinary operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-red-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-600 text-red-700 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <UtensilsCrossed className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-100 text-red-800">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#booking"
                    className="text-xs font-semibold text-red-700 hover:text-red-800 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Request Menu for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md"
            >
              <span>Explore All Detailed Service Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Event Types Grid */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Event Types We Cater In Islamabad
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Specially curated setups for every milestone ceremony across marquees, private farmhouses, and outdoor lawns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_TYPES.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 shadow-lg hover:border-red-500/80 transition-all flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-red-500 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
                    {event.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href="#booking"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300"
                  >
                    <span>Inquire Availability</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Food Specialties & Menu Showcase */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60" id="specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Culinary Specialties Crafted with Passion
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Slow-cooked gravies, fragrant aged basmati rice, live charcoal BBQ, and royal traditional sweets prepared with pure desi ghee.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {FOOD_SPECIALTIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFoodTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFoodTab === idx
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOOD_SPECIALTIES[activeFoodTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative"
              >
                {item.popular && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                    Customer Favorite
                  </span>
                )}
                <h4 className="text-base font-bold text-slate-900 pr-16">{item.name}</h4>
                {item.desc && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-red-700 font-medium">
                  <span>Included in custom packages</span>
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Interactive Menu & Quotation Estimator Tool */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Plan Your Menu &amp; Get an Instant Quotation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Customize guest count, select meat cuts and desserts, and calculate an estimated budget range on the spot.
            </p>
          </div>

          <MenuEstimator />
        </div>
      </section>

      {/* 8. Gallery Highlights */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Event &amp; Catering Gallery
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Recent weddings, Mehndi setups, corporate luncheons, and live BBQ stations organized by Cater Dine Events in Islamabad.
              </p>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-400 hover:text-red-300 self-start md:self-auto"
            >
              <span>View All 24+ Gallery Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 8).map((item, index) => (
              <div
                key={item.id}
                onClick={() => onOpenGalleryItem(index)}
                className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer bg-slate-900"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] text-red-400 uppercase tracking-wider font-bold">
                    {item.category}
                  </span>
                  <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 4-Step Booking Process */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple 4-Step Catering Coordination
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              We ensure smooth planning from initial menu selection to punctual on-site execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inquire & Consultation",
                desc: "Contact us via call, WhatsApp, or online booking form. Share your guest count, event date, and preferred venue location."
              },
              {
                step: "02",
                title: "Menu Customization",
                desc: "We customize a detailed per-head menu comprising your desired rice specialties, gravies, live BBQ, breads, and desserts."
              },
              {
                step: "03",
                title: "Booking Confirmation",
                desc: "Lock your event date with an advance deposit. We coordinate venue access, kitchen station permits, and crockery requirements."
              },
              {
                step: "04",
                title: "Flawless Execution",
                desc: "Our catering team arrives 2-3 hours prior with warmers, fresh food, and uniformed servers for exceptional guest hospitality."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-black text-red-600/30 block mb-3">{step.step}</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs Accordion */}
      <section className="py-16 sm:py-24 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600">
              Everything you need to know about booking Cater Dine Events in Islamabad.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-red-700 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-red-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Booking & Quotation Form */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white" id="booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Book Your Catering in Islamabad?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fill in the form to get a personalized menu quotation, or speak directly with our catering manager for date reservations.
              </p>

              <div className="space-y-4 pt-4 text-sm">
                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <Phone className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Phone &amp; WhatsApp:</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-white hover:text-red-400 text-base">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Office Location:</span>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Working Hours:</span>
                    <p className="text-xs text-slate-200 font-medium">
                      Monday &ndash; Sunday: 10:00 AM &ndash; 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Dispatched!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry for {formData.eventType} ({formData.guests} guests) has been submitted. Our event coordinator will contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-red-700 hover:underline px-4 py-2"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5"
                    >
                      <span>Continue on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request an Event Quotation</h3>
                  <p className="text-xs text-slate-600 mb-4">No obligation. We will propose customized menu combinations.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300 1234567"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none bg-white"
                      >
                        <option>Wedding / Barat</option>
                        <option>Mehndi / Mayun</option>
                        <option>Walima Reception</option>
                        <option>Nikkah Ceremony</option>
                        <option>Corporate Luncheon / Conference</option>
                        <option>Live BBQ Feast</option>
                        <option>Hi-Tea &amp; Gathering</option>
                        <option>Birthday / Family Milestone</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Estimated Guest Count *
                      </label>
                      <input
                        type="number"
                        required
                        min="25"
                        max="2500"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        placeholder="e.g. 250"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Event Date (Tentative)
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Venue / Islamabad Sector
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        placeholder="e.g. Marquee on Expressway / F-10"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Menu Requirements or Special Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Mutton Biryani, Shinwari Karahi, Live Malai Boti station..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                    id="booking-form-submit"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Inquiry</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Office Location & Service Areas */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Serving All Sectors of Islamabad &amp; Rawalpindi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                F-6, F-7, F-8, F-10, F-11, E-7, E-11, G Sectors, Chak Shahzad, Bahria Town, DHA Islamabad, and Rawalpindi Cantt.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-xs flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Our Office</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
