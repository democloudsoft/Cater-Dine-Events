import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/siteData';
import { ShieldCheck, FileText } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onNavigate: (route: PageRoute) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="w-full py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h1>
              <p className="text-xs text-slate-600 mt-0.5">Last updated: January 2026 &bull; Cater Dine Events</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  At <strong>Cater Dine Events</strong>, respecting our clients&apos; privacy and personal event details is paramount. This Privacy Policy clarifies how we handle inquiries, booking information, and personal records collected via our website and direct communication channels.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">1. Information We Collect</h3>
                <p>
                  When you submit an event inquiry or quotation request on our website, we collect personal contact details including your full name, telephone / WhatsApp number, optional email address, anticipated event date, venue location, and culinary preferences.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">2. How We Use Your Information</h3>
                <p>
                  Your information is utilized solely to provide customized catering proposals, schedule consultation appointments, verify date availability, coordinate logistics with your chosen Islamabad or Rawalpindi marquee/venue, and ensure on-site execution.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">3. Data Confidentiality</h3>
                <p>
                  We do not sell, lease, or distribute our clients&apos; personal or event records to third-party marketing companies. All client information remains strictly confidential within Cater Dine Events.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">4. Inquiries &amp; Contact</h3>
                <p>
                  If you have inquiries concerning your data, please contact our office at {BUSINESS_INFO.phone} or via email at {BUSINESS_INFO.email}.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong>Cater Dine Events</strong>. By submitting a quotation request, engaging our catering services, or entering a formal event contract, you acknowledge and agree to the following operational terms:
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">1. Booking &amp; Date Reservation</h3>
                <p>
                  Event dates in peak wedding and corporate seasons are secured upon receipt of an agreed advance deposit. Quotations provided via the online calculator are market approximations and become binding once confirmed by written proposal.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">2. Guest Count &amp; Headcount Confirmation</h3>
                <p>
                  Guaranteed final guest counts must be confirmed at least 5 business days before the event date to allow fresh procurement of meat, poultry, and specialized ingredients. Catering provisions and billing are calculated based on the confirmed guaranteed count or actual attendance, whichever is greater.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">3. Food Quality &amp; Hygiene Standards</h3>
                <p>
                  Cater Dine Events adheres to strict food safety protocols. All items are prepared fresh. Leftover food handling post-event is coordinated directly with the host family in accordance with temperature safety guidelines.
                </p>

                <h3 className="text-base font-bold text-slate-900 pt-2">4. Venue Access &amp; Power Requirements</h3>
                <p>
                  For events requiring live charcoal BBQ or tandoori stations, the client or venue administration must provide safe, designated outdoor or ventilated station areas. Cater Dine Events brings its own chafers, food warmers, and staff.
                </p>
              </>
            )}

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => onNavigate('home')}
                className="text-xs font-bold text-red-700 hover:underline"
              >
                &larr; Back to Home
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Contact Legal Desk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
