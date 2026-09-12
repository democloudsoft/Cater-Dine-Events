import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { GalleryModal } from './components/GalleryModal';
import { GALLERY_ITEMS } from './data/siteData';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { EventsView } from './views/EventsView';
import { GalleryView } from './views/GalleryView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [galleryModalIndex, setGalleryModalIndex] = useState<number | null>(null);

  // Sync with window.location.hash for shareable URLs and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'services',
        'events',
        'gallery',
        'blog',
        'contact',
        'privacy',
        'terms',
      ];

      if (validRoutes.includes(hash as PageRoute)) {
        setCurrentRoute(hash as PageRoute);
      } else if (!hash || hash === '') {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute, anchor?: string) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenGalleryModal = (index: number) => {
    setGalleryModalIndex(index);
  };

  const handleCloseGalleryModal = () => {
    setGalleryModalIndex(null);
  };

  const handleNextGalleryItem = () => {
    if (galleryModalIndex === null) return;
    setGalleryModalIndex((galleryModalIndex + 1) % GALLERY_ITEMS.length);
  };

  const handlePrevGalleryItem = () => {
    if (galleryModalIndex === null) return;
    setGalleryModalIndex((galleryModalIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 antialiased selection:bg-red-600 selection:text-white">
      {/* Header Navigation */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main View Container */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenGalleryItem={handleOpenGalleryModal}
          />
        )}

        {currentRoute === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'services' && (
          <ServicesView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'events' && (
          <EventsView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'gallery' && (
          <GalleryView onOpenModal={handleOpenGalleryModal} />
        )}

        {currentRoute === 'blog' && (
          <BlogView />
        )}

        {currentRoute === 'contact' && (
          <ContactView />
        )}

        {currentRoute === 'privacy' && (
          <LegalView type="privacy" onNavigate={handleNavigate} />
        )}

        {currentRoute === 'terms' && (
          <LegalView type="terms" onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Image Lightbox Modal */}
      <GalleryModal
        items={GALLERY_ITEMS}
        currentIndex={galleryModalIndex}
        onClose={handleCloseGalleryModal}
        onNext={handleNextGalleryItem}
        onPrev={handlePrevGalleryItem}
      />
    </div>
  );
}
