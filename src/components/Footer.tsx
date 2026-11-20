import { useState, type FormEvent } from 'react';
import { Check, Instagram, Facebook, Linkedin } from 'lucide-react';
import { VENUE_CONTACT_INFO, NAV_ITEMS, type PageRoute } from '../data/restaurantData';
import { validateNewsletterEmail } from '../utils/validation';
import { AureliaWordmark } from './Header';

interface FooterProps {
  onNavigate: (path: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [socialNotice, setSocialNotice] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    const check = validateNewsletterEmail(newsletterEmail);
    if (!check.valid) {
      setNewsletterError(check.error);
      setNewsletterSuccess(false);
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  const handleSocialClick = (platform: string) => {
    setSocialNotice(`Follow @AureliaGlobalDining on ${platform} for seasonal culinary highlights.`);
  };

  return (
    <footer className="bg-[#101C2C] text-[#E8E0D2] border-t border-[#B99A62]/30">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-block"
              aria-label="AURELIA Home"
            >
              <AureliaWordmark light />
            </a>
            <p className="text-sm leading-relaxed text-[#E8E0D2]/80 max-w-sm">
              A World of Flavours. One Extraordinary Destination. A luxury international restaurant
              and all-day dining destination crafted for five-star hospitality in Dhaka.
            </p>
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B99A62] mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialClick('Instagram')}
                  aria-label="AURELIA Instagram"
                  className="w-10 h-10 border border-[#E8E0D2]/25 flex items-center justify-center text-[#E8E0D2] hover:border-[#B99A62] hover:text-[#B99A62] transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialClick('Facebook')}
                  aria-label="AURELIA Facebook"
                  className="w-10 h-10 border border-[#E8E0D2]/25 flex items-center justify-center text-[#E8E0D2] hover:border-[#B99A62] hover:text-[#B99A62] transition-colors cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialClick('LinkedIn')}
                  aria-label="AURELIA LinkedIn"
                  className="w-10 h-10 border border-[#E8E0D2]/25 flex items-center justify-center text-[#E8E0D2] hover:border-[#B99A62] hover:text-[#B99A62] transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
              {socialNotice && (
                <p role="status" className="mt-2 text-xs text-[#B99A62]">
                  {socialNotice}
                </p>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg text-[#F8F6F0] tracking-wide">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                    className="text-[#E8E0D2]/80 hover:text-[#B99A62] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/reservations"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/reservations');
                  }}
                  className="text-[#B99A62] hover:text-[#F8F6F0] transition-colors font-medium"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Dining Experiences & Opening Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg text-[#F8F6F0] tracking-wide">
              Dining &amp; Hours
            </h3>
            <ul className="space-y-2 text-sm text-[#E8E0D2]/80">
              {VENUE_CONTACT_INFO.hours.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-3 border-b border-[#E8E0D2]/10 pb-1.5"
                >
                  <span>{item.label}</span>
                  <span className="tabular-nums text-xs text-[#E8E0D2]/70">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-[#E8E0D2]/75 space-y-1">
              <p>{VENUE_CONTACT_INFO.addressLine1}</p>
              <p>{VENUE_CONTACT_INFO.addressLine2}</p>
              <p className="tabular-nums">{VENUE_CONTACT_INFO.phone}</p>
              <p>{VENUE_CONTACT_INFO.email}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg text-[#F8F6F0] tracking-wide">
              Seasonal Dispatches
            </h3>
            <p className="text-sm text-[#E8E0D2]/80 leading-relaxed">
              Receive invitations to seasonal culinary festivals, chef’s table evenings, and
              festive brunch previews.
            </p>
            <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-3">
              <div>
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterError) setNewsletterError('');
                    if (newsletterSuccess) setNewsletterSuccess(false);
                  }}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#18273B] border border-[#E8E0D2]/25 text-sm text-[#F8F6F0] placeholder:text-[#E8E0D2]/50 focus:outline-none focus:border-[#B99A62]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 bg-[#B99A62] text-[#101C2C] text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-[#C8AA74] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
              {newsletterError && (
                <p role="alert" className="text-xs text-[#F4B8A8]">
                  {newsletterError}
                </p>
              )}
              {newsletterSuccess && (
                <p role="status" className="text-xs text-[#B99A62] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Thank you for subscribing to AURELIA Seasonal Dispatches.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-[#E8E0D2]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8E0D2]/65">
          <p>© 2026 AURELIA — Global Dining. All rights reserved.</p>
          <p>Dhaka · Five-Star International Dining &amp; Private Events</p>
        </div>
      </div>
    </footer>
  );
}
