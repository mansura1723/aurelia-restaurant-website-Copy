import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, type PageRoute } from '../data/restaurantData';

interface HeaderProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export function AureliaWordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          transform="rotate(45 12 12)"
          stroke="#B99A62"
          strokeWidth="1.2"
        />
        <path
          d="M12 6.5L15.8 16.5H14.2L13.3 14H10.7L9.8 16.5H8.2L12 6.5ZM11.1 12.7H12.9L12 10.1L11.1 12.7Z"
          fill="#B99A62"
        />
      </svg>
      <span
        className={`font-serif text-xl sm:text-2xl font-semibold tracking-[0.22em] uppercase ${
          light ? 'text-[#F8F6F0]' : 'text-[#101C2C]'
        }`}
      >
        AURELIA
      </span>
    </span>
  );
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = (path: PageRoute) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <>
      {/* Slim Announcement Bar (static above sticky header to keep mobile sticky height compact) */}
      <div className="bg-[#101C2C] text-[#E8E0D2] border-b border-[#B99A62]/25 py-2 px-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] font-medium">
          An Extraordinary Dining Experience Awaits.
        </p>
      </div>

      {/* Sticky Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-200 border-b ${
          scrolled
            ? 'bg-[#F8F6F0]/96 backdrop-blur-md border-[#E8E0D2] shadow-[0_4px_20px_rgba(16,28,44,0.06)]'
            : 'bg-[#F8F6F0] border-[#E8E0D2]/80'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-4 xl:gap-8">
          {/* Zone 1: Original Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            aria-label="AURELIA — Global Dining Home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A62] shrink-0"
          >
            <AureliaWordmark />
          </a>

          {/* Zone 2: Desktop Single-Row Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center justify-center gap-5 xl:gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.path);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 text-[11px] uppercase tracking-[0.16em] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A62] ${
                    isActive
                      ? 'text-[#101C2C] font-semibold'
                      : 'text-[#242424]/80 hover:text-[#101C2C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#B99A62]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Prominent Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/reservations"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/reservations');
              }}
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A62] ${
                currentPath === '/reservations'
                  ? 'bg-[#B99A62] text-[#101C2C]'
                  : 'bg-[#101C2C] text-[#F8F6F0] hover:bg-[#1B2C42]'
              }`}
            >
              Reserve a Table
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#101C2C] border border-[#E8E0D2] hover:border-[#B99A62] transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden bg-[#101C2C] text-[#F8F6F0] border-t border-[#B99A62]/30 px-6 py-6"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.path);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`py-3 px-2 text-xs uppercase tracking-[0.18em] border-b border-[#F8F6F0]/10 transition-colors ${
                      isActive
                        ? 'text-[#B99A62] font-semibold'
                        : 'text-[#F8F6F0]/90 hover:text-[#B99A62]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4">
                <a
                  href="/reservations"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('/reservations');
                  }}
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 bg-[#B99A62] text-[#101C2C] text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  Reserve a Table
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
