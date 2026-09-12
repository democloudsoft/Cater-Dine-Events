import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SITE_IMAGES } from '../data/siteData';

export const ContactView: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Catering Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    const text = `Assalam o Alaikum Cater Dine Events!%0A%0A` +
      `*Website Contact Form Inquiry:*%0A` +
      `• Name: ${formData.name}%0A` +
      `• Phone: ${formData.phone}%0A` +
      `• Email: ${formData.email || 'N/A'}%0A` +
      `• Subject: ${formData.subject}%0A` +
      `• Message: ${formData.message}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={SITE_IMAGES.hero}
            alt="Contact Cater Dine"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact &amp; Visit Our Office
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Visit our consultation office in F-10 Markaz, Islamabad or connect directly via phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Get in Touch With Us</h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Have an upcoming wedding, corporate lunch, or private outdoor gathering? Our experienced culinary coordinators are available to answer your questions and draft personalized quotations.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Head Office Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-red-700 hover:underline"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <Phone className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Phone &amp; WhatsApp</h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="block text-base font-bold text-slate-900 hover:text-red-600 mt-1"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Start WhatsApp Chat</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <Mail className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Official Email</h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm text-slate-700 hover:text-red-600 mt-1 block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <Clock className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Office Timings</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Monday &ndash; Sunday: 10:00 AM &ndash; 10:00 PM
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Kitchen &amp; event teams operate 24/7 on booked dates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              {formSent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message has been routed to our catering coordination desk. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Send an Inquiry Note</h3>
                  <p className="text-xs text-slate-600 mb-4">Feel free to ask questions about menus, dates, or catering rates.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asim Khan"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300 5054045"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. asim@example.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Message / Questions *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your event, expected guest count, and any particular dish requests..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message &amp; WhatsApp Sync</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
