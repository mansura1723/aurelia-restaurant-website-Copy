import { useState, type FormEvent } from 'react';
import { CalendarDays, CheckCircle2, Clock, Users } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';
import {
  getTodayIsoDate,
  validateReservation,
  type ReservationInput,
} from '../utils/validation';
import { ActionButton } from '../components/Button';
import { CalendarDatePicker } from '../components/CalendarDatePicker';
import { SafeImage } from '../components/SafeImage';

const TIME_SLOTS = [
  '07:30',
  '09:00',
  '12:30',
  '13:30',
  '14:30',
  '18:30',
  '19:30',
  '20:30',
  '21:30',
];

const DINING_PREFERENCES = [
  'International Buffet — Main Pavilion',
  'À La Carte — Window Banquette',
  'Weekend Brunch Seating',
  'Chef’s Counter / Live Kitchen View',
  'Quiet Corner Booth',
];

const OCCASIONS = [
  'None / Casual Dining',
  'Birthday Celebration',
  'Anniversary',
  'Business / Corporate Gathering',
  'Family Celebration',
];

export function ReservationsPage() {
  const todayIso = getTodayIsoDate();

  const [form, setForm] = useState<ReservationInput>({
    guestName: '',
    email: '',
    phone: '',
    date: todayIso,
    time: '19:30',
    guests: '2',
    diningPreference: DINING_PREFERENCES[0],
    occasion: OCCASIONS[0],
    requests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<ReservationInput | null>(null);

  const updateField = (field: keyof ReservationInput, value: string) => {
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
    const validation = validateReservation(form, todayIso);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmittedRecord({ ...form });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 260);
  };

  const handleNewRequest = () => {
    setSubmittedRecord(null);
    setForm({
      guestName: '',
      email: '',
      phone: '',
      date: todayIso,
      time: '19:30',
      guests: '2',
      diningPreference: DINING_PREFERENCES[0],
      occasion: OCCASIONS[0],
      requests: '',
    });
    setErrors({});
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="relative py-24 lg:py-28 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.heroInterior}
          alt="AURELIA candlelit dining tables prepared for evening guests"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/80 to-[#101C2C]/80"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            Table Reservations
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            RESERVE YOUR TABLE
          </h1>
          <p className="text-base text-[#E8E0D2]/90 max-w-2xl mx-auto">
            Select your preferred dining experience, date, and seating time. Our hospitality desk
            will welcome you at your chosen table.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8F6F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {submittedRecord ? (
            /* Confirmation Screen */
            <div
              role="status"
              aria-live="polite"
              className="max-w-2xl mx-auto bg-white border border-[#B99A62]/60 p-8 sm:p-12 space-y-6"
            >
              <div className="flex items-center gap-3 text-[#101C2C]">
                <CheckCircle2 className="w-7 h-7 text-[#B99A62] shrink-0" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                  Reservation Request Confirmed
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#101C2C]">
                Thank you, {submittedRecord.guestName}
              </h2>
              <p className="text-sm sm:text-base text-[#242424]/85 leading-relaxed">
                We have received your seating request for AURELIA — Global Dining. Below is the
                summary of your reservation details.
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-[#E8E0D2] py-5 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                    Date &amp; Time
                  </dt>
                  <dd className="font-semibold text-[#101C2C] mt-1 tabular-nums">
                    {submittedRecord.date} · {submittedRecord.time}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                    Party Size
                  </dt>
                  <dd className="font-semibold text-[#101C2C] mt-1 tabular-nums">
                    {submittedRecord.guests}{' '}
                    {Number(submittedRecord.guests) === 1 ? 'Guest' : 'Guests'}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                    Dining Preference
                  </dt>
                  <dd className="font-semibold text-[#101C2C] mt-1">
                    {submittedRecord.diningPreference}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                    Occasion
                  </dt>
                  <dd className="font-semibold text-[#101C2C] mt-1">
                    {submittedRecord.occasion || 'Casual Dining'}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                    Contact Email
                  </dt>
                  <dd className="text-[#242424] mt-1">{submittedRecord.email}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#242424]/60">
                    Contact Phone
                  </dt>
                  <dd className="text-[#242424] mt-1 tabular-nums">{submittedRecord.phone}</dd>
                </div>
              </dl>

              <div className="pt-2">
                <ActionButton variant="navy" onClick={handleNewRequest}>
                  Make Another Reservation
                </ActionButton>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Interactive Calendar & Hospitality Info */}
              <div className="lg:col-span-5 space-y-6">
                <CalendarDatePicker
                  selectedDate={form.date}
                  onSelectDate={(iso) => updateField('date', iso)}
                  label="Reservation Calendar"
                />

                <div className="bg-white border border-[#E8E0D2] p-6 space-y-4">
                  <h2 className="font-serif text-2xl text-[#101C2C]">Dining Guidelines</h2>
                  <ul className="space-y-3 text-sm text-[#242424]/80">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="w-4 h-4 text-[#B99A62] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Past dates are disabled automatically to ensure valid scheduling.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#B99A62] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Tables are held for 15 minutes past the selected seating time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-[#B99A62] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        For celebrations exceeding 20 guests, please submit an inquiry on our
                        Private Dining page.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Reservation Request Form */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="lg:col-span-7 bg-white border border-[#E8E0D2] p-6 sm:p-10 space-y-6"
              >
                <div className="border-b border-[#E8E0D2] pb-4">
                  <h2 className="font-serif text-3xl text-[#101C2C]">Guest &amp; Seating Details</h2>
                  <p className="text-xs text-[#242424]/70 mt-1">
                    All fields marked with * are required.
                  </p>
                </div>

                {Object.keys(errors).length > 0 && (
                  <div
                    role="alert"
                    className="bg-[#FDF2F0] border border-[#C65B4B]/40 p-4 text-xs text-[#8C2D1F]"
                  >
                    Please review and correct the highlighted fields before submitting your request.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="res-guest-name"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Guest Name *
                    </label>
                    <input
                      id="res-guest-name"
                      type="text"
                      value={form.guestName}
                      onChange={(e) => updateField('guestName', e.target.value)}
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                    />
                    {errors.guestName && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.guestName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-email"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="guest@example.com"
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                    />
                    {errors.email && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+880 1700 000000"
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Reservation Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={todayIso}
                      value={form.date}
                      onChange={(e) => updateField('date', e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                    />
                    {errors.date && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={(e) => updateField('time', e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Number of Guests *
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) => updateField('guests', e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62] tabular-nums"
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={String(num)}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="16">16 Guests (Large Table)</option>
                      <option value="20">20 Guests (Maximum Standard Table)</option>
                    </select>
                    {errors.guests && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.guests}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-preference"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Dining Preference *
                    </label>
                    <select
                      id="res-preference"
                      value={form.diningPreference}
                      onChange={(e) => updateField('diningPreference', e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                    >
                      {DINING_PREFERENCES.map((pref) => (
                        <option key={pref} value={pref}>
                          {pref}
                        </option>
                      ))}
                    </select>
                    {errors.diningPreference && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.diningPreference}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-occasion"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Special Occasion
                    </label>
                    <select
                      id="res-occasion"
                      value={form.occasion}
                      onChange={(e) => updateField('occasion', e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                    >
                      {OCCASIONS.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="res-requests"
                    className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                  >
                    Additional Requests
                  </label>
                  <textarea
                    id="res-requests"
                    rows={3}
                    value={form.requests}
                    onChange={(e) => updateField('requests', e.target.value)}
                    placeholder="Seating preferences, celebration cake note, accessibility needs..."
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                  />
                </div>

                <div className="pt-2">
                  <ActionButton type="submit" variant="navy" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? 'Submitting Request...' : 'Request Table Reservation'}
                  </ActionButton>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
