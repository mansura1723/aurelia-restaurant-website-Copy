import { IMAGES, type PageRoute } from '../data/restaurantData';
import { ActionButton } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

interface OurStoryPageProps {
  onNavigate: (path: PageRoute) => void;
}

const STORY_PILLARS = [
  {
    index: '01',
    title: 'Our Philosophy',
    body: 'Hospitality is an architecture of care. From the acoustic warmth of velvet banquettes to the cadence of a five-course dinner, every detail at AURELIA exists to slow time down and bring people closer around a generous table.',
  },
  {
    index: '02',
    title: 'Our Culinary Vision',
    body: 'Rather than treating international dining as disconnected stations, our chefs weave Mediterranean brightness, Japanese precision, European technique, and South Asian warmth into one harmonious culinary destination.',
  },
  {
    index: '03',
    title: 'Our Approach to Hospitality',
    body: 'Five-star service never feels rehearsed. Our floor brigade anticipates preferences quietly—remembering how a guest takes their morning coffee, pacing courses smoothly, and welcoming families as honoured guests.',
  },
  {
    index: '04',
    title: 'Our Ingredients',
    body: 'Great flavour begins long before heat meets the pan. We partner with coastal seafood harvesters, artisanal dairy producers, and specialty spice estates alongside curated global imports.',
  },
];

export function OurStoryPage({ onNavigate }: OurStoryPageProps) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-28 lg:py-36 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.heroInterior}
          alt="AURELIA dining room architectural interior"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/70 to-[#101C2C]/75"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            Heritage &amp; Vision
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            THE STORY OF AURELIA
          </h1>
          <p className="text-base sm:text-lg text-[#E8E0D2]/90 max-w-2xl mx-auto leading-relaxed">
            Conceived as a five-star sanctuary of global gastronomy in Dhaka, AURELIA honours the
            ritual of gathering over thoughtfully crafted food.
          </p>
        </div>
      </section>

      {/* Editorial Pull Quote & Opening */}
      <section className="py-20 lg:py-24 bg-[#F8F6F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="py-8 border-y border-[#B99A62]/40 text-center">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#101C2C] leading-snug">
              “A truly memorable dining room does more than showcase technical skill; it makes
              every guest feel that the evening was arranged especially for them.”
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#242424]/85 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:text-[#101C2C] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Named for the warm golden glow that settles across a dining table at dusk, AURELIA was
            envisioned to elevate all-day international dining into an editorial hospitality
            experience. Every room balances architectural poise—midnight navy upholstery, champagne
            brass, and honed stone—with the inviting aroma of freshly baked breads and charcoal
            grills.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-[#E8E0D2]/40 border-y border-[#E8E0D2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORY_PILLARS.map((pillar) => (
              <article key={pillar.index} className="bg-white border border-[#E8E0D2] p-8 space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B99A62] font-semibold tabular-nums">
                  {pillar.index} · Pillar
                </p>
                <h2 className="font-serif text-3xl text-[#101C2C]">{pillar.title}</h2>
                <p className="text-sm sm:text-base text-[#242424]/80 leading-relaxed">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Philosophy & Interior Photography */}
      <section className="py-20 lg:py-28 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="border border-[#E8E0D2] p-3 bg-white">
                <SafeImage
                  src={IMAGES.chefArtistry}
                  alt="Executive Chef plating at AURELIA"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                Chef’s Philosophy
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">
                Discipline in Technique, Generosity on the Plate
              </h2>
              <p className="text-base text-[#242424]/85 leading-relaxed">
                Our culinary leadership believes in restraint over theatrics. Stocks are simmered
                overnight, pastries are laminated in climate-controlled ateliers, and spices are
                toasted whole each morning before grinding. When guests visit our buffet counters or
                order à la carte, they experience food prepared with the same rigor as a single
                tasting-menu kitchen.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <ActionButton variant="navy" href="/menu" onNavigate={onNavigate}>
                  Explore Our Menu
                </ActionButton>
                <ActionButton variant="navyOutline" href="/reservations" onNavigate={onNavigate}>
                  Reserve a Table
                </ActionButton>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                Spatial Design
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">
                Interiors Dressed for Morning Light &amp; Evening Candlelight
              </h2>
              <p className="text-base text-[#242424]/85 leading-relaxed">
                From bright, sunlit breakfast gatherings overlooking landscaped terraces to evening
                cocktails beside our brass-lit lounge, the restaurant shifts gracefully with the
                hours of the day.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="border border-[#E8E0D2] p-3 bg-white">
                <SafeImage
                  src={IMAGES.beverageLounge}
                  alt="AURELIA lounge with midnight navy bar stools and backlit brass shelving"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
