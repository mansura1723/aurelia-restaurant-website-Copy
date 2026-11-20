import { useEffect, useState } from 'react';
import type { PageRoute } from './data/restaurantData';
import { BackToTopButton } from './components/BackToTopButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ContactPage } from './pages/ContactPage';
import { DiningExperiencesPage } from './pages/DiningExperiencesPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { PrivateDiningPage } from './pages/PrivateDiningPage';
import { ReservationsPage } from './pages/ReservationsPage';

const ROUTE_META: Record<PageRoute, { title: string; description: string }> = {
  '/': {
    title: 'AURELIA — Global Dining | Five-Star International Cuisine in Dhaka',
    description:
      'Discover AURELIA — Global Dining: an international buffet, live culinary theatre, à la carte cuisine, and refined private dining in Dhaka.',
  },
  '/our-story': {
    title: 'Our Story | AURELIA — Global Dining',
    description:
      'Explore the philosophy, culinary vision, ingredients, and hospitality craft behind AURELIA — Global Dining.',
  },
  '/experiences': {
    title: 'Dining Experiences | AURELIA — Global Dining',
    description:
      'Breakfast, weekend brunch, executive lunch, candlelit dinner, live cooking stations, à la carte, and private dining at AURELIA.',
  },
  '/menu': {
    title: 'Menu | AURELIA — Global Dining',
    description:
      'Browse eleven curated culinary chapters from Breakfast and Japanese Sushi to Seafood, Grills, and Patisserie.',
  },
  '/reservations': {
    title: 'Reserve a Table | AURELIA — Global Dining',
    description:
      'Request a table reservation at AURELIA — Global Dining with interactive date selection and seating preferences.',
  },
  '/private-dining': {
    title: 'Private Dining & Events | AURELIA — Global Dining',
    description:
      'Host birthdays, family gatherings, corporate dinners, and anniversaries inside AURELIA’s bespoke private dining suites.',
  },
  '/gallery': {
    title: 'Gallery | AURELIA — Global Dining',
    description:
      'View photography of AURELIA’s luxury dining rooms, international buffet counters, signature plates, and desserts.',
  },
  '/contact': {
    title: 'Contact | AURELIA — Global Dining',
    description:
      'Contact details, opening hours, guest inquiry form, and location preview for AURELIA — Global Dining.',
  },
};

function normalizePath(pathname: string): PageRoute {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (cleaned in ROUTE_META) {
    return cleaned as PageRoute;
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<PageRoute>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const meta = ROUTE_META[currentPath];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
  }, [currentPath]);

  const navigate = (target: PageRoute) => {
    if (target !== currentPath) {
      window.history.pushState({}, '', target);
      setCurrentPath(target);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#242424]">
      <Header currentPath={currentPath} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {currentPath === '/' && <HomePage onNavigate={navigate} />}
        {currentPath === '/our-story' && <OurStoryPage onNavigate={navigate} />}
        {currentPath === '/experiences' && <DiningExperiencesPage onNavigate={navigate} />}
        {currentPath === '/menu' && <MenuPage onNavigate={navigate} />}
        {currentPath === '/reservations' && <ReservationsPage />}
        {currentPath === '/private-dining' && <PrivateDiningPage />}
        {currentPath === '/gallery' && <GalleryPage />}
        {currentPath === '/contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
      <BackToTopButton />
    </div>
  );
}
