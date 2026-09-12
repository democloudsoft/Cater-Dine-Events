import React, { useState, useMemo } from 'react';
import { Calculator, Check, Users, Sparkles, MessageCircle, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface MenuOption {
  id: string;
  name: string;
  category: 'rice' | 'gravy' | 'bbq' | 'dessert' | 'beverage';
  costPerHead: number;
}

const MENU_OPTIONS: MenuOption[] = [
  // Rice
  { id: 'mutton-biryani', name: 'Special Mutton Dum Biryani', category: 'rice', costPerHead: 650 },
  { id: 'chicken-biryani', name: 'Chicken Sindhi Biryani', category: 'rice', costPerHead: 420 },
  { id: 'zafrani-pulao', name: 'Zafrani Mutton Pulao', category: 'rice', costPerHead: 680 },
  { id: 'kabuli-pulao', name: 'Afghani Kabuli Pulao (Beef/Chicken)', category: 'rice', costPerHead: 480 },
  
  // Gravies & Curries
  { id: 'mutton-karahi', name: 'Shinwari Mutton Karahi', category: 'gravy', costPerHead: 750 },
  { id: 'chicken-handi', name: 'Chicken White Handi (Boneless)', category: 'gravy', costPerHead: 480 },
  { id: 'mutton-qorma', name: 'Slow-Simmered Mutton Qorma', category: 'gravy', costPerHead: 720 },
  { id: 'chicken-karahi', name: 'Traditional Chicken Karahi', category: 'gravy', costPerHead: 440 },

  // BBQ & Live Grills
  { id: 'malai-boti', name: 'Chicken Malai Boti (Live BBQ)', category: 'bbq', costPerHead: 380 },
  { id: 'beef-seekh', name: 'Tender Beef Seekh Kababs', category: 'bbq', costPerHead: 390 },
  { id: 'reshmi-kabab', name: 'Reshmi Chicken Kababs', category: 'bbq', costPerHead: 360 },

  // Desserts
  { id: 'shahi-kheer', name: 'Shahi Kheer with Pistachios', category: 'dessert', costPerHead: 160 },
  { id: 'gajar-halwa', name: 'Gajar Ka Halwa (Desi Ghee)', category: 'dessert', costPerHead: 200 },
  { id: 'gulab-jamun', name: 'Warm Gulab Jamun in Saffron Syrup', category: 'dessert', costPerHead: 150 },
  { id: 'ras-malai', name: 'Creamy Ras Malai', category: 'dessert', costPerHead: 220 },

  // Beverages
  { id: 'kashmiri-chai', name: 'Traditional Kashmiri Pink Chai', category: 'beverage', costPerHead: 140 },
  { id: 'soft-drinks', name: 'Mineral Water & Soft Drinks', category: 'beverage', costPerHead: 110 },
  { id: 'mint-lemonade', name: 'Fresh Mint Lemonade', category: 'beverage', costPerHead: 130 }
];

export const MenuEstimator: React.FC = () => {
  const [eventType, setEventType] = useState('Wedding / Barat');
  const [guestCount, setGuestCount] = useState<number>(250);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([
    'mutton-biryani',
    'chicken-handi',
    'malai-boti',
    'shahi-kheer',
    'soft-drinks'
  ]);
  const [includeStaffSetup, setIncludeStaffSetup] = useState(true);

  const toggleItem = (id: string) => {
    if (selectedItemIds.includes(id)) {
      setSelectedItemIds(selectedItemIds.filter(item => item !== id));
    } else {
      setSelectedItemIds([...selectedItemIds, id]);
    }
  };

  const calculation = useMemo(() => {
    const baseStaffAndSetupPerHead = includeStaffSetup ? 250 : 0;
    const foodCostPerHead = selectedItemIds.reduce((sum, id) => {
      const found = MENU_OPTIONS.find(o => o.id === id);
      return sum + (found ? found.costPerHead : 0);
    }, 0);

    const totalPerHead = foodCostPerHead + baseStaffAndSetupPerHead;
    const grandTotal = totalPerHead * guestCount;

    return {
      foodCostPerHead,
      baseStaffAndSetupPerHead,
      totalPerHead,
      grandTotal
    };
  }, [selectedItemIds, includeStaffSetup, guestCount]);

  const generateWhatsAppMessage = () => {
    const selectedNames = selectedItemIds
      .map(id => MENU_OPTIONS.find(o => o.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Hello Cater Dine Events! I would like a quote based on my online estimation:%0A%0A` +
      `• Event Type: ${eventType}%0A` +
      `• Guest Count: ${guestCount} Guests%0A` +
      `• Selected Menu: ${selectedNames}%0A` +
      `• Include Waiters & Chafing Setup: ${includeStaffSetup ? 'Yes' : 'No'}%0A` +
      `• Estimated Budget: ~PKR ${calculation.totalPerHead.toLocaleString()} / head (Total: ~PKR ${calculation.grandTotal.toLocaleString()})%0A%0A` +
      `Please let me know your availability for this date and confirm the details.`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden" id="menu-estimator">
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 p-6 sm:p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Catering Quotation Calculator</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select your guest count and dishes to receive an instant Islamabad market estimate.
            </p>
          </div>
          <button
            onClick={() => setSelectedItemIds(['mutton-biryani', 'chicken-handi', 'malai-boti', 'shahi-kheer', 'soft-drinks'])}
            className="flex items-center gap-1.5 text-xs text-red-300 hover:text-white bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Recommended</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Event Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Select Event Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Wedding / Barat', 'Mehndi / Mayun', 'Walima Reception', 'Corporate Luncheon', 'Outdoor BBQ Feast', 'Hi-Tea Gathering'].map((type) => (
                <button
                  key={type}
                  onClick={() => setEventType(type)}
                  className={`px-3 py-2 text-xs rounded-lg font-medium border text-left transition-all ${
                    eventType === type
                      ? 'border-red-600 bg-red-50 text-red-900 font-semibold shadow-2xs'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Guest Count Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-red-600" />
                <span>2. Number of Guests</span>
              </label>
              <span className="text-base font-extrabold text-red-700 bg-red-50 px-3 py-0.5 rounded-md border border-red-200">
                {guestCount} Guests
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={1200}
              step={25}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 mt-1">
              <span>50 (Intimate)</span>
              <span>250 (Standard)</span>
              <span>600 (Large)</span>
              <span>1200+ (Grand)</span>
            </div>
          </div>

          {/* Menu Selections by Category */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              3. Select Menu Items (Pick Any Combination)
            </label>

            <div className="space-y-4">
              {[
                { title: 'Rice & Biryani', category: 'rice' as const },
                { title: 'Main Gravy / Karahi', category: 'gravy' as const },
                { title: 'Live Charcoal BBQ', category: 'bbq' as const },
                { title: 'Traditional Desserts', category: 'dessert' as const },
                { title: 'Drinks & Beverages', category: 'beverage' as const },
              ].map((group) => {
                const groupItems = MENU_OPTIONS.filter(o => o.category === group.category);
                return (
                  <div key={group.category} className="border border-slate-100 rounded-xl p-3.5 bg-slate-50/50">
                    <h4 className="text-xs font-bold text-slate-700 mb-2">{group.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {groupItems.map((item) => {
                        const isSelected = selectedItemIds.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            onClick={() => toggleItem(item.id)}
                            className={`p-2.5 rounded-lg border text-left text-xs flex items-center justify-between transition-all ${
                              isSelected
                                ? 'bg-red-600 text-white border-red-600 shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-red-300'
                            }`}
                          >
                            <div className="pr-2">
                              <span className="font-medium block leading-tight">{item.name}</span>
                              <span className={`text-[10px] ${isSelected ? 'text-red-100' : 'text-slate-600'}`}>
                                +PKR {item.costPerHead}/head
                              </span>
                            </div>
                            <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${isSelected ? 'bg-white text-red-700' : 'border border-slate-300'}`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Setup & Service Option */}
          <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/60 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-800">Include Buffet Setup, Chafers, Crockery &amp; Serving Staff</p>
              <p className="text-[11px] text-slate-600">Full on-site setup, stainless steel food warmers, sanitized crockery &amp; uniformed waiters.</p>
            </div>
            <input
              type="checkbox"
              checked={includeStaffSetup}
              onChange={(e) => setIncludeStaffSetup(e.target.checked)}
              className="w-5 h-5 accent-red-600 rounded cursor-pointer shrink-0 ml-3"
            />
          </div>
        </div>

        {/* Right Summary Card */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg border border-slate-800 sticky top-28">
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
              <Sparkles className="w-4 h-4" />
              <span>Instant Quotation Breakdown</span>
            </div>

            <div className="space-y-3 text-xs mb-6">
              <div className="flex justify-between text-slate-300">
                <span>Event:</span>
                <span className="font-semibold text-white">{eventType}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Guests:</span>
                <span className="font-semibold text-white">{guestCount} Persons</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Selected Items:</span>
                <span className="font-semibold text-red-400">{selectedItemIds.length} Dishes</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Food Estimate:</span>
                <span className="font-medium text-white">PKR {calculation.foodCostPerHead.toLocaleString()} / head</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Staff, Crockery &amp; Chafers:</span>
                <span className="font-medium text-white">
                  {includeStaffSetup ? `PKR ${calculation.baseStaffAndSetupPerHead.toLocaleString()} / head` : 'Excluded'}
                </span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="bg-slate-800/90 rounded-xl p-4 border border-red-500/30 mb-6">
              <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                Estimated Price Per Head
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xs text-red-400 font-bold">PKR</span>
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {calculation.totalPerHead.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">/ person</span>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-700/80 flex justify-between items-baseline">
                <span className="text-xs text-slate-300">Total Approx Budget:</span>
                <span className="text-lg font-bold text-red-400">
                  PKR {calculation.grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed mb-5">
              *Taxes, special live stalls (Jalebi/Gol Gappa), and marquee rent are quoted based on specific venue requirements.
            </p>

            <button
              onClick={generateWhatsAppMessage}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all group"
              id="estimator-whatsapp-submit"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
              <span>Get Detailed Quote on WhatsApp</span>
            </button>
            <p className="text-center text-[10px] text-slate-300 mt-2">
              Instant response from our F-10 Markaz catering coordinator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
