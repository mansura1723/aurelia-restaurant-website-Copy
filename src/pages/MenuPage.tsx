import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import {
  IMAGES,
  MENU_CATEGORIES,
  MENU_DISHES,
  type MenuCategory,
  type PageRoute,
} from '../data/restaurantData';
import { filterMenuDishes, formatBdtPrice } from '../utils/validation';
import { ActionButton } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

interface MenuPageProps {
  onNavigate: (path: PageRoute) => void;
}

export function MenuPage({ onNavigate }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filteredDishes = useMemo(() => {
    const base = filterMenuDishes(MENU_DISHES, selectedCategory, searchQuery);
    return vegOnly ? base.filter((d) => d.isVegetarian) : base;
  }, [selectedCategory, searchQuery, vegOnly]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setVegOnly(false);
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="relative py-24 lg:py-28 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.beefTenderloin}
          alt="Plated signature gourmet beef tenderloin at AURELIA"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/80 to-[#101C2C]/80"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            À La Carte &amp; Seasonal Curations
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            THE CULINARY COLLECTION
          </h1>
          <p className="text-base text-[#E8E0D2]/90 max-w-2xl mx-auto">
            Explore eleven curated chapters spanning Breakfast, International Classics, Japanese
            Craft, Fresh Seafood, Grills, and Patisserie.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <section className="py-12 lg:py-16 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search + Vegetarian Filter Bar */}
          <div className="bg-white border border-[#E8E0D2] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-xl">
              <label htmlFor="menu-search-input" className="sr-only">
                Search menu dishes
              </label>
              <Search
                className="w-4 h-4 text-[#242424]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="menu-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, ingredients, or cuisines..."
                className="w-full pl-10 pr-10 py-2.5 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] placeholder:text-[#242424]/50 focus:outline-none focus:border-[#B99A62]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear menu search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#242424]/60 hover:text-[#101C2C] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setVegOnly((v) => !v)}
                aria-pressed={vegOnly}
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  vegOnly
                    ? 'bg-[#101C2C] text-[#F8F6F0] border-[#101C2C]'
                    : 'bg-transparent text-[#101C2C] border-[#E8E0D2] hover:border-[#B99A62]'
                }`}
              >
                Vegetarian Selection Only
              </button>
              <span className="text-xs text-[#242424]/70 tabular-nums whitespace-nowrap">
                {filteredDishes.length} {filteredDishes.length === 1 ? 'dish' : 'dishes'} shown
              </span>
            </div>
          </div>

          {/* 11 Category Tabs */}
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap gap-2 border-b border-[#E8E0D2] pb-5"
          >
            {MENU_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.14em] font-semibold whitespace-nowrap shrink-0 transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-[#101C2C] text-[#F8F6F0] border-[#101C2C]'
                      : 'bg-white text-[#242424]/80 border-[#E8E0D2] hover:border-[#B99A62] hover:text-[#101C2C]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Dish Grid — every dish renders its photograph cleanly */}
          {filteredDishes.length === 0 ? (
            <div className="bg-white border border-[#E8E0D2] p-12 text-center space-y-4">
              <h2 className="font-serif text-2xl text-[#101C2C]">No matching dishes found</h2>
              <p className="text-sm text-[#242424]/75 max-w-md mx-auto">
                Try clearing your search term or switching back to all menu categories.
              </p>
              <ActionButton variant="navy" onClick={resetFilters}>
                Reset Menu Filters
              </ActionButton>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="bg-white border border-[#E8E0D2] p-5 sm:p-6 flex flex-col sm:flex-row gap-5 justify-between"
                >
                  <div className="sm:w-40 sm:h-36 shrink-0 overflow-hidden bg-[#101C2C]">
                    <SafeImage
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center flex-wrap gap-x-2 text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                        <span>{dish.category}</span>
                        {dish.isVegetarian && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#101C2C] font-semibold">Vegetarian</span>
                          </>
                        )}
                        {dish.isSignature && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#B99A62] font-semibold">Signature</span>
                          </>
                        )}
                      </div>
                      <h2 className="font-serif text-2xl text-[#101C2C] leading-snug">
                        {dish.name}
                      </h2>
                      <p className="text-sm text-[#242424]/80 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#E8E0D2]/70 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.14em] text-[#242424]/60">
                        À La Carte
                      </span>
                      <span className="text-sm font-semibold text-[#101C2C] tabular-nums">
                        {formatBdtPrice(dish.priceBdt)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Dietary Note & CTA */}
          <div className="bg-[#E8E0D2]/45 border border-[#E8E0D2] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.16em] text-[#101C2C] font-semibold">
                Dietary Preferences &amp; Table Service
              </p>
              <p className="text-sm text-[#242424]/80 leading-relaxed">
                Please inform your server of any allergies or specific dietary requirements prior to
                ordering. All prices are subject to applicable service charge and VAT.
              </p>
            </div>
            <ActionButton variant="navy" href="/reservations" onNavigate={onNavigate}>
              Reserve a Table
            </ActionButton>
          </div>
        </div>
      </section>
    </div>
  );
}
