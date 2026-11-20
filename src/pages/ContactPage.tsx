import { useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { VENUE_CONTACT_INFO, IMAGES } from '../data/restaurantData';
import { validateContactForm, type ContactFormInput } from '../utils/validation';
import { ActionButton } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

export function ContactPage() {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormInput, value: string) => {
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
    const validation = validateContactForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 lg:py-28 bg-[#101C2C] overflow-hidden">
        <SafeImage
          src={IMAGES.heroInterior}
          alt="AURELIA reception and dining room"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/80 to-[#101C2C]/80"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B99A62] font-semibold">
            Guest Relations &amp; Concierge
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] editorial-balance">
            CONTACT AURELIA
          </h1>
          <p className="text-base text-[#E8E0D2]/90 max-w-2xl mx-auto">
            Reach our hospitality desk for dining inquiries, group seating arrangements, private
            events, or press requests.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8F6F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#E8E0D2] p-8 space-y-6">
                <h2 className="font-serif text-3xl text-[#101C2C]">Hospitality Desk</h2>

                <div className="space-y-4 text-sm text-[#242424]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B99A62] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#101C2C]">Restaurant Address</p>
                      <p>{VENUE_CONTACT_INFO.addressLine1}</p>
                      <p>{VENUE_CONTACT_INFO.addressLine2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#B99A62] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#101C2C]">Telephone</p>
                      <p className="tabular-nums">{VENUE_CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#B99A62] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#101C2C]">Email</p>
                      <p>{VENUE_CONTACT_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#E8E0D2]">
                    <Clock className="w-4 h-4 text-[#B99A62] shrink-0 mt-1" aria-hidden="true" />
                    <div className="w-full space-y-1.5">
                      <p className="font-semibold text-[#101C2C]">Opening Hours</p>
                      {VENUE_CONTACT_INFO.hours.map((h) => (
                        <div key={h.label} className="flex justify-between text-xs gap-4">
                          <span>{h.label}</span>
                          <span className="tabular-nums text-[#242424]/70">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-white border border-[#B99A62]/60 p-8 sm:p-10 space-y-5"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-7 h-7 text-[#B99A62] shrink-0" aria-hidden="true" />
                    <p className="text-xs uppercase tracking-[0.18em] text-[#B99A62] font-semibold">
                      Message Received
                    </p>
                  </div>
                  <h2 className="font-serif text-3xl text-[#101C2C]">
                    Thank you for reaching out, {form.name}
                  </h2>
                  <p className="text-sm text-[#242424]/85 leading-relaxed">
                    Your inquiry regarding “{form.subject}” has been received by our hospitality
                    desk. A member of our team will respond promptly.
                  </p>
                  <ActionButton
                    variant="navy"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </ActionButton>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white border border-[#E8E0D2] p-6 sm:p-10 space-y-5"
                >
                  <div className="border-b border-[#E8E0D2] pb-4">
                    <h2 className="font-serif text-3xl text-[#101C2C]">Send a Message</h2>
                    <p className="text-xs text-[#242424]/70 mt-1">
                      Questions about group seating, press, or culinary collaborations.
                    </p>
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <div
                      role="alert"
                      className="bg-[#FDF2F0] border border-[#C65B4B]/40 p-4 text-xs text-[#8C2D1F]"
                    >
                      Please complete all required fields accurately.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="cnt-name"
                        className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="cnt-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Full name"
                        className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                      />
                      {errors.name && <p className="text-xs text-[#B33A2B] mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="cnt-email"
                        className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="cnt-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#B33A2B] mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cnt-subject"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      id="cnt-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      placeholder="General inquiry, private celebration, culinary question..."
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                    />
                    {errors.subject && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="cnt-message"
                      className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#101C2C] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="cnt-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="How may our hospitality team assist you?"
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E8E0D2] text-sm text-[#242424] focus:outline-none focus:border-[#B99A62]"
                    />
                    {errors.message && (
                      <p className="text-xs text-[#B33A2B] mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  <ActionButton type="submit" variant="navy">
                    Send Message
                  </ActionButton>
                </form>
              )}
            </div>
          </div>

          {/* Location Map Frame */}
          <div className="bg-[#101C2C] text-[#F8F6F0] border border-[#B99A62]/30 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                  Location &amp; Arrival
                </p>
                <h2 className="font-serif text-3xl text-[#F8F6F0]">
                  Gulshan Hospitality District, Dhaka
                </h2>
                <p className="text-sm text-[#E8E0D2]/80 leading-relaxed">
                  Situated in the heart of Gulshan Avenue with dedicated valet arrival and direct
                  elevator access to Level 3.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative h-64 sm:h-72 bg-[#162539] border border-[#B99A62]/40 overflow-hidden flex items-center justify-center p-6">
                  <svg
                    viewBox="0 0 600 260"
                    className="absolute inset-0 w-full h-full opacity-35"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="65" x2="600" y2="65" stroke="#E8E0D2" strokeWidth="1" />
                    <line x1="0" y1="130" x2="600" y2="130" stroke="#B99A62" strokeWidth="2" />
                    <line x1="0" y1="195" x2="600" y2="195" stroke="#E8E0D2" strokeWidth="1" />
                    <line x1="120" y1="0" x2="120" y2="260" stroke="#E8E0D2" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="260" stroke="#B99A62" strokeWidth="2" />
                    <line x1="480" y1="0" x2="480" y2="260" stroke="#E8E0D2" strokeWidth="1" />
                    <circle cx="300" cy="130" r="24" stroke="#B99A62" strokeWidth="1.5" fill="none" />
                  </svg>
                  <div className="relative z-10 bg-[#101C2C]/95 border border-[#B99A62] px-6 py-4 text-center space-y-1">
                    <MapPin className="w-5 h-5 text-[#B99A62] mx-auto" aria-hidden="true" />
                    <p className="font-serif text-lg text-[#F8F6F0]">AURELIA — Global Dining</p>
                    <p className="text-xs text-[#E8E0D2]/75">
                      Level 3, Meridian Hospitality Tower · Gulshan Avenue, Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
