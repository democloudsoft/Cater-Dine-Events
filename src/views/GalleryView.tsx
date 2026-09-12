import React, { useState } from 'react';
import { GALLERY_ITEMS, SITE_IMAGES } from '../data/siteData';
import { GalleryItem } from '../types';
import { Sparkles, ZoomIn } from 'lucide-react';

interface GalleryViewProps {
  onOpenModal: (index: number) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos (24)' },
    { id: 'wedding', label: 'Wedding & Barat' },
    { id: 'mehndi', label: 'Mehndi & Dholki' },
    { id: 'catering', label: 'Food & Live BBQ' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'decor', label: 'Décor & Setups' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={SITE_IMAGES.hero}
            alt="Gallery Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Event &amp; Catering Gallery
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Browse our banquet displays, live cooking counters, and floral arrangements across Islamabad marquees and lawns.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const fullIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenModal(fullIndex)}
                  className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer shadow-md bg-slate-900"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-xs">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-red-400 uppercase tracking-widest font-bold">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">{item.title}</h4>
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
