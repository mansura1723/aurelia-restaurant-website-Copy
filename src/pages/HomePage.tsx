import { ArrowRight } from 'lucide-react';
import {
  GUEST_TESTIMONIALS,
  GALLERY_ITEMS,
  IMAGES,
  type PageRoute,
} from '../data/restaurantData';
import { ActionButton } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

interface HomePageProps {
  onNavigate: (path: PageRoute) => void;
}

const HOME_EXPERIENCES = [
  {
    title: 'INTERNATIONAL BUFFET',
    description: 'Explore an extraordinary selection of global flavours.',
    image: IMAGES.buffetLive,
    path: '/experiences' as PageRoute,
    cta: 'Explore Buffet',
  },
  {
    title: 'LIVE COOKING',
    description: 'Watch our chefs bring culinary artistry to life.',
    image: IMAGES.chefArtistry,
    path: '/experiences' as PageRoute,
    cta: 'View Live Stations',
  },
  {
    title: 'À LA CARTE DINING',
    description: 'Discover carefully prepared dishes made with exceptional ingredients.',
    image: IMAGES.beefTenderloin,
    path: '/menu' as PageRoute,
    cta: 'Browse À La Carte',
  },
  {
    title: 'PRIVATE DINING',
    description: 'Celebrate meaningful moments in an intimate setting.',
    image: IMAGES.privateDining,
    path: '/private-dining' as PageRoute,
    cta: 'Plan Private Event',
  },
];

const SIGNATURE_SHOWCASE = [
  {
    title: 'Grilled Seafood Selection',
    origin: 'Coastal Catch · Saffron Beurre Blanc',
    description:
      'Char-grilled jumbo tiger prawns and pan-seared sea bass fillet plated with charred lemon and herb oil.',
    image: IMAGES.grilledSeafood,
  },
  {
    title: 'Signature Beef Tenderloin',
    origin: 'Prime Cut · Black Truffle Jus',
    description:
      '220g center-cut tenderloin glazed in roasted truffle reduction alongside silky potato mousseline and heirloom carrots.',
    image: IMAGES.beefTenderloin,
  },
  {
    title: 'Mediterranean Mezze',
    origin: 'Levant & Aegean · Warm Flatbread',
    description:
      'Velvety tahini hummus, charred eggplant mutabbal, marinated olives, and stone-baked za’atar flatbread.',
    image: IMAGES.mezzeSalads,
  },
  {
    title: 'Japanese Sushi Selection',
    origin: 'Tokyo Craft · Daily Fish Market',
    description:
      'Hand-sliced tuna sashimi, Norwegian salmon nigiri, and crisp tempura rolls finished with aged soy.',
    image: IMAGES.sushiPlatter,
  },
  {
    title: 'Artisan Desserts',
    origin: 'Patisserie Atelier · Valrhona & Pistachio',
    description:
      'Sculpted dark chocolate entremets with gold leaf, pistachio berry tartlets, and Madagascar vanilla mille-feuille.',
    image: IMAGES.artisanDesserts,
  },
  {
    title: 'Seasonal Fresh Salads',
    origin: 'Orchard & Harvest · Cold-Pressed Oils',
    description:
      'Creamy burrata with figs, roasted heirloom beets, pomegranate jewels, and toasted walnuts dressed tableside.',
    image: IMAGES.mezzeSalads,
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* 1. Full-Screen Cinematic Hero */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.heroInterior}
          alt="AURELIA luxury dining room with deep midnight navy banquettes, warm brass table lamps, and marble buffet pavilion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101C2C]/90 via-[#101C2C]/65 to-[#101C2C]/45"
        />
        <div className="relative z-10 max-w-[1380px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl space-y-6 animate-hero-reveal">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#B99A62] font-semibold">
              AURELIA · Global Dining · Dhaka
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-medium text-[#F8F6F0] tracking-tight editorial-balance">
              DISCOVER THE ART OF GLOBAL DINING
            </h1>
            <p className="text-base sm:text-lg text-[#E8E0D2]/90 leading-relaxed max-w-xl">
              An inspired culinary journey where world-class flavours, exceptional ingredients and
              thoughtful hospitality come together.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <ActionButton variant="gold" href="/menu" onNavigate={onNavigate}>
                Explore Our Menu
              </ActionButton>
              <ActionButton variant="ivoryOutline" href="/reservations" onNavigate={onNavigate}>
                Reserve Your Table
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-20 lg:py-28 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                Five-Star Hospitality · All-Day Destination
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#101C2C] leading-[1.12] editorial-balance">
                MORE THAN A MEAL. AN EXPERIENCE.
              </h2>
              <div className="w-16 h-px bg-[#B99A62]" aria-hidden="true" />
              <p className="text-base text-[#242424]/85 leading-relaxed">
                At AURELIA, dining unfolds as an unhurried dialogue between culinary heritage and
                contemporary elegance. Set beneath warm chandelier light and architectural marble
                arches, our dining room brings together seven distinct culinary pavilions, bespoke à
                la carte artistry, and gracious Dhaka hospitality.
              </p>
              <p className="text-base text-[#242424]/85 leading-relaxed">
                Whether gathering for a celebratory family brunch, an executive luncheon, or an
                intimate candlelit dinner, every course is composed to linger in memory long after
                the final espresso.
              </p>
              <div className="pt-2">
                <ActionButton variant="navyOutline" href="/our-story" onNavigate={onNavigate}>
                  Read Our Story
                </ActionButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative border border-[#E8E0D2] p-3 bg-white">
                <SafeImage
                  src={IMAGES.buffetLive}
                  alt="Chefs preparing gourmet dishes behind AURELIA polished marble and brass live buffet stations"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="pt-3 flex items-center justify-between text-xs text-[#242424]/70">
                  <span className="font-serif italic">The Open Show Kitchen &amp; Buffet Pavilion</span>
                  <span className="uppercase tracking-[0.16em] text-[10px]">Dhaka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dining Experiences Section (4 Cards) */}
      <section className="py-20 lg:py-28 bg-[#E8E0D2]/45 border-y border-[#E8E0D2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                Curated Moments
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#101C2C] editorial-balance">
                Dining Experiences
              </h2>
            </div>
            <a
              href="/experiences"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/experiences');
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#101C2C] hover:text-[#B99A62] transition-colors whitespace-nowrap shrink-0"
            >
              <span>All Eight Experiences</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_EXPERIENCES.map((exp) => (
              <article
                key={exp.title}
                className="bg-white border border-[#E8E0D2] flex flex-col justify-between group"
              >
                <div>
                  <div className="overflow-hidden aspect-[4/3] bg-[#101C2C]">
                    <SafeImage
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold tracking-wide text-[#101C2C]">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#242424]/80 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a
                    href={exp.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(exp.path);
                    }}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#101C2C] hover:text-[#B99A62] transition-colors"
                  >
                    <span>{exp.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature Culinary Section */}
      <section className="py-20 lg:py-28 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
              Culinary Highlights
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#101C2C] editorial-balance">
              Signature Culinary Selections
            </h2>
            <p className="text-sm sm:text-base text-[#242424]/75">
              A curated preview of global specialties prepared daily across our live kitchens and à
              la carte pass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIGNATURE_SHOWCASE.map((dish) => (
              <article
                key={dish.title}
                className="bg-white border border-[#E8E0D2] overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#101C2C]">
                  <SafeImage
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#B99A62] font-medium">
                      {dish.origin}
                    </p>
                    <h3 className="font-serif text-2xl text-[#101C2C]">{dish.title}</h3>
                    <p className="text-sm text-[#242424]/80 leading-relaxed">{dish.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ActionButton variant="navy" href="/menu" onNavigate={onNavigate}>
              Explore Complete Menu
            </ActionButton>
          </div>
        </div>
      </section>

      {/* 5. Chef's Artistry Section */}
      <section className="py-20 lg:py-28 bg-[#101C2C] text-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="border border-[#B99A62]/35 p-3 bg-[#162539]">
                <SafeImage
                  src={IMAGES.chefArtistry}
                  alt="Senior executive chef meticulously finishing a plated gourmet dish at AURELIA"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                The Culinary Atelier
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F6F0] leading-[1.12] editorial-balance">
                CRAFTED WITH PASSION. SERVED WITH PURPOSE.
              </h2>
              <div className="w-16 h-px bg-[#B99A62]" aria-hidden="true" />
              <p className="text-base text-[#E8E0D2]/85 leading-relaxed">
                Every dish leaving the AURELIA kitchen reflects years of classical technique and a
                deep respect for provenance. Our brigade sources freshly landed Bay of Bengal
                seafood, organic regional botanicals, and prime imported cuts—bringing them together
                at the exact moment of service.
              </p>
              <p className="text-base text-[#E8E0D2]/85 leading-relaxed">
                True hospitality lives in quiet precision: noticing a guest’s pace, warming every
                ceramic plate before garnish, and transforming global recipes into thoughtful
                hospitality.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <ActionButton variant="gold" href="/our-story" onNavigate={onNavigate}>
                  Discover Chef’s Philosophy
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery Preview */}
      <section className="py-20 lg:py-28 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                Visual Chronicle
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">
                Atmosphere &amp; Gastronomy
              </h2>
            </div>
            <ActionButton variant="navyOutline" href="/gallery" onNavigate={onNavigate}>
              View Full Gallery
            </ActionButton>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate('/gallery')}
                aria-label={`View ${item.title} in gallery`}
                className="group relative overflow-hidden aspect-[4/3] bg-[#101C2C] text-left cursor-pointer"
              >
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#B99A62]">
                      {item.category}
                    </p>
                    <p className="font-serif text-base text-[#F8F6F0]">{item.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reservation Call-To-Action */}
      <section className="relative py-24 lg:py-32 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.privateDining}
          alt="Candlelit private dining table at AURELIA"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/75 to-[#101C2C]/80"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            Reservations &amp; Gatherings
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            YOUR TABLE IS WAITING.
          </h2>
          <p className="text-base sm:text-lg text-[#E8E0D2]/90">
            Make your next gathering truly memorable.
          </p>
          <div className="pt-2">
            <ActionButton variant="gold" href="/reservations" onNavigate={onNavigate}>
              Reserve Your Table
            </ActionButton>
          </div>
        </div>
      </section>

      {/* 8. Guest Impressions */}
      <section className="py-20 lg:py-24 bg-[#E8E0D2]/40">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
              Guest Impressions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">
              Moments Around the Table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUEST_TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="bg-white border border-[#E8E0D2] p-8 flex flex-col justify-between space-y-6"
              >
                <p className="font-serif italic text-lg leading-relaxed text-[#242424]">
                  “{item.quote}”
                </p>
                <footer className="pt-4 border-t border-[#E8E0D2]">
                  <p className="text-sm font-semibold text-[#101C2C]">{item.guestName}</p>
                  <p className="text-xs text-[#242424]/65 mt-0.5">{item.context}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
