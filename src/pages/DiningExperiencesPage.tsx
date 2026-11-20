import { Check } from 'lucide-react';
import { DINING_EXPERIENCES, IMAGES, type PageRoute } from '../data/restaurantData';
import { ActionButton } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

interface DiningExperiencesPageProps {
  onNavigate: (path: PageRoute) => void;
}

export function DiningExperiencesPage({ onNavigate }: DiningExperiencesPageProps) {
  return (
    <div>
      {/* Header Banner */}
      <section className="relative py-24 lg:py-32 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.buffetLive}
          alt="AURELIA international buffet and open show kitchen"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/75 to-[#101C2C]/80"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            All-Day Gastronomy
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            DINING EXPERIENCES
          </h1>
          <p className="text-base sm:text-lg text-[#E8E0D2]/90 max-w-2xl mx-auto">
            From sunrise viennoiserie to candlelit evening buffets, live culinary stations, and
            bespoke private dining suites.
          </p>
        </div>
      </section>

      {/* Experiences Alternating Editorial List */}
      <section className="py-20 lg:py-28 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {DINING_EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-[#E8E0D2] last:border-b-0 last:pb-0"
              >
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="border border-[#E8E0D2] p-3 bg-white">
                    <SafeImage
                      src={exp.image}
                      alt={exp.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                    {exp.subtitle}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">{exp.title}</h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#242424]/75 tabular-nums border-y border-[#E8E0D2] py-2.5">
                    <span>{exp.schedule}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-[#101C2C]">{exp.pricing}</span>
                  </div>
                  <p className="text-base text-[#242424]/85 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2 pt-1">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-[#242424]/85">
                        <Check className="w-4 h-4 text-[#B99A62] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3">
                    <ActionButton variant="navy" href={exp.ctaPath} onNavigate={onNavigate}>
                      {exp.ctaLabel}
                    </ActionButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
