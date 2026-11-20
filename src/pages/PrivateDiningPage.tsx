import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';
import {
  getTodayIsoDate,
  validateEventInquiry,
  type EventInquiryInput,
} from '../utils/validation';
import { ActionButton } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

const EVENT_CATEGORIES = [
  {
    title: 'Birthday Celebrations',
    capacity: '10 – 45 Guests',
    description:
      'Custom tiered patisserie cakes, private candlelit tables, and curated family-style or buffet dining menus.',
  },
  {
    title: 'Family Gatherings',
    capacity: '12 – 80 Guests',
    description:
      'Warm multi-generational seating with dedicated service captains and international dishes tailored for every age.',
  },
  {
    title: 'Corporate Dinners',
    capacity: '12 – 120 Guests',
    description:
      'Quiet acoustic privacy, integrated discreet presentation screens, and paced multi-course executive dining.',
  },
  {
    title: 'Anniversary Celebrations',
    capacity: '8 – 30 Guests',
    description:
      'Bespoke floral table styling, printed keepsake menus, and zero-proof botanical welcome elixirs.',
  },
  {
    title: 'Special Events & Diplomatic Luncheons',
    capacity: '20 – 120 Guests',
    description:
      'Full pavilion buyouts or semi-private salon configurations backed by our culinary brigade.',
  },
  {
    title: 'Private Dining Suites',
    capacity: '8 – 24 Guests',
    description:
      'The Walnut & Midnight Navy Salon featuring an intimate single banquet table and private pass service.',
  },
];

const EVENT_TYPE_OPTIONS = [
  'Birthday Celebration',
  'Family Gathering',
  'Corporate Dinner',
  'Anniversary Celebration',
  'Private Dining Suite',
  'Special Event / Gala',
];

export function PrivateDiningPage() {
  const todayIso = getTodayIsoDate();

  const [form, setForm] = useState<EventInquiryInput>({
    contactName: '',
    email: '',
    phone: '',
    eventType: EVENT_TYPE_OPTIONS[0],
    guestCount: '24',
    preferredDate: todayIso,
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<EventInquiryInput | null>(null);

  const updateField = (field: keyof EventInquiryInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateEventInquiry(form, todayIso);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted({ ...form });
      document.getElementById('event-inquiry-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 260);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.privateDining}
          alt="AURELIA walnut and midnight navy private dining suite"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/70 to-[#101C2C]/75"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            Bespoke Celebrations &amp; Executive Hospitality
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            PRIVATE DINING &amp; EVENTS
          </h1>
          <p className="text-base sm:text-lg text-[#E8E0D2]/90 max-w-2xl mx-auto">
            Intimate suites, tailored menus, and attentive service for life’s defining occasions
            and corporate milestones.
          </p>
        </div>
      </section>

      {/* Event Offerings Grid */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div className="border border-[#E8E0D2] p-3 bg-white">
                <SafeImage
                  src={IMAGES.privateDining}
                  alt="Long walnut private dining table dressed with ivory linen and crystal stemware"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                Tailored Gatherings
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">
                Spaces Designed for Meaningful Conversation
              </h2>
              <p className="text-base text-[#242424]/85 leading-relaxed">
                Whether hosting an anniversary toast for twelve or an executive dinner for sixty,
                our events concierge collaborates with our Executive Chef to tailor seating, pacing,
                floral styling, and dietary accommodations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_CATEGORIES.map((cat) => (
              <article key={cat.title} className="bg-white border border-[#E8E0D2] p-7 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#B99A62] font-semibold tabular-nums">
                  {cat.capacity}
                </p>
                <h3 className="font-serif text-2xl text-[#101C2C]">{cat.title}</h3>
                <p className="text-sm text-[#242424]/80 leading-relaxed">{cat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section id="event-inquiry-section" className="py-20 bg-[#E8E0D2]/45 border-t border-[#E8E0D2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-white border border-[#B99A62]/60 p-8 sm:p-10 space-y-5"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-[#B99A62] shrink-0" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.18em] text-[#B99A62] font-semibold">
                  Event Inquiry Submitted
                </p>
              </div>
              <h2 className="font-serif text-3xl text-[#101C2C]">
                Inquiry Recorded for {submitted.eventType}
              </h2>
              <p className="text-sm text-[#242424]/85 leading-relaxed">
                Thank you, {submitted.contactName}. Your inquiry for{' '}
                <strong className="tabular-nums">{submitted.guestCount} guests</strong> on{' '}
                <strong className="tabular-nums">{submitted.preferredDate}</strong> has been
                received. Our private events team will contact you with tailored menu options and
                suite availability.
              </p>
              <ActionButton variant="navy" onClick={() => setSubmitted(null)}>
                Submit Another Inquiry
              </ActionButton>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-[#E8E0D2] p-6 sm:p-10 space-y-6"
            >
              <div className="space-y-2 border-b border-[#E8E0D2] pb-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                  Events Concierge
                </p>
                <h2 className="font-serif text-3xl text-[#101C2C]">
                  Request a Private Dining Proposal
                </h2>
              </div>

              {Object.keys(errors).length > 0 && (
                <div
                  role="alert"
                  className="bg-[#FDF2F0] border border-[#C65B4B]/40 p-4 text-xs text-[#8C2D1F]"
                >
                  Please fix the highlighted fields below to submit your event inquiry.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="evt-name"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Contact Name *
                  </label>
                  <input
                    id="evt-name"
                    type="text"
                    value={form.contactName}
                    onChange={(e) => updateField('contactName', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                  />
                  {errors.contactName && (
                    <p className="text-xs text-[#B33A2B] mt-1.5">{errors.contactName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="evt-email"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="evt-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                  />
                  {errors.email && <p className="text-xs text-[#B33A2B] mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="evt-phone"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="evt-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+880 1700 000000"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                  />
                  {errors.phone && <p className="text-xs text-[#B33A2B] mt-1.5">{errors.phone}</p>}
                </div>

                <div>
                  <label
                    htmlFor="evt-type"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="evt-type"
                    value={form.eventType}
                    onChange={(e) => updateField('eventType', e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                  >
                    {EVENT_TYPE_OPTIONS.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="text-xs text-[#B33A2B] mt-1.5">{errors.eventType}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="evt-count"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Estimated Guest Count (8–250) *
                  </label>
                  <input
                    id="evt-count"
                    type="number"
                    min={8}
                    max={250}
                    value={form.guestCount}
                    onChange={(e) => updateField('guestCount', e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                  />
                  {errors.guestCount && (
                    <p className="text-xs text-[#B33A2B] mt-1.5">{errors.guestCount}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="evt-date"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="evt-date"
                    type="date"
                    min={todayIso}
                    value={form.preferredDate}
                    onChange={(e) => updateField('preferredDate', e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-[#B33A2B] mt-1.5">{errors.preferredDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="evt-notes"
                  className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                >
                  Menu Preferences &amp; Event Vision
                </label>
                <textarea
                  id="evt-notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  placeholder="Preferred seating format, floral requirements, AV needs..."
                  className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                />
              </div>

              <ActionButton type="submit" variant="navy" disabled={submitting}>
                {submitting ? 'Submitting Inquiry...' : 'Submit Event Inquiry'}
              </ActionButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
