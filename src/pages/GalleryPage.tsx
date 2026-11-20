import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  IMAGES,
  type GalleryCategory,
} from '../data/restaurantData';
import { filterGalleryItems } from '../utils/validation';
import { SafeImage } from '../components/SafeImage';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () => filterGalleryItems(GALLERY_ITEMS, selectedCategory),
    [selectedCategory]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, visibleItems.length]);

  const activeItem = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 lg:py-28 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.beverageLounge}
          alt="AURELIA lounge and architectural interior"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/80 to-[#101C2C]/80"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            Visual Portfolio
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            AURELIA IN FOCUS
          </h1>
          <p className="text-base text-[#E8E0D2]/90 max-w-2xl mx-auto">
            Explore our dining rooms, live show kitchens, signature plated courses, patisserie
            creations, and private event suites.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Photo Grid */}
      <section className="py-16 lg:py-24 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div
            role="tablist"
            aria-label="Gallery categories"
            className="flex flex-wrap gap-2 border-b border-[#E8E0D2] pb-5"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.14em] font-semibold whitespace-nowrap shrink-0 transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-[#101C2C] text-[#F8F6F0] border-[#101C2C]'
                      : 'bg-white text-[#242424]/80 border-[#E8E0D2] hover:border-[#B99A62]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open lightbox for ${item.title}`}
                className="group bg-white border border-[#E8E0D2] text-left overflow-hidden flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A62]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#101C2C]">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#B99A62] font-semibold">
                    {item.category}
                  </p>
                  <h2 className="font-serif text-xl text-[#101C2C]">{item.title}</h2>
                  <p className="text-xs text-[#242424]/75 leading-relaxed">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${activeItem.title}`}
          className="fixed inset-0 z-50 bg-[#101C2C]/95 flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 w-11 h-11 border border-[#E8E0D2]/35 text-[#F8F6F0] flex items-center justify-center hover:border-[#B99A62] hover:text-[#B99A62] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex - 1 + visibleItems.length) % visibleItems.length
              )
            }
            aria-label="Previous gallery image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#101C2C]/80 border border-[#E8E0D2]/35 text-[#F8F6F0] flex items-center justify-center hover:border-[#B99A62] hover:text-[#B99A62] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="max-w-4xl w-full space-y-4 text-center">
            <div className="bg-[#101C2C] border border-[#B99A62]/30 p-2">
              <SafeImage
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full max-h-[70vh] object-contain mx-auto"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#B99A62]">
                {activeItem.category} · {lightboxIndex + 1} / {visibleItems.length}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0]">
                {activeItem.title}
              </h2>
              <p className="text-sm text-[#E8E0D2]/85 max-w-xl mx-auto">{activeItem.caption}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLightboxIndex((lightboxIndex + 1) % visibleItems.length)}
            aria-label="Next gallery image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#101C2C]/80 border border-[#E8E0D2]/35 text-[#F8F6F0] flex items-center justify-center hover:border-[#B99A62] hover:text-[#B99A62] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
