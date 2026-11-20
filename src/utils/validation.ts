export interface ReservationInput {
  guestName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  diningPreference: string;
  occasion: string;
  requests: string;
}

export interface EventInquiryInput {
  contactName: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: string;
  preferredDate: string;
  notes: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function getTodayIsoDate(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isPastIsoDate(dateStr: string, todayStr: string = getTodayIsoDate()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return false;
  }
  return dateStr < todayStr;
}

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

export function isValidPhone(phone: string): boolean {
  const trimmed = phone.trim();
  if (!/^[+\d\s().-]+$/.test(trimmed)) {
    return false;
  }
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function validateReservation(
  input: ReservationInput,
  todayStr: string = getTodayIsoDate()
): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.guestName.trim().length < 2) {
    errors.guestName = 'Please enter the guest name (at least 2 characters).';
  }

  if (!input.email.trim()) {
    errors.email = 'Please enter an email address.';
  } else if (!isValidEmail(input.email)) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  if (!input.phone.trim()) {
    errors.phone = 'Please enter a contact phone number.';
  } else if (!isValidPhone(input.phone)) {
    errors.phone = 'Please enter a valid phone number (7 to 15 digits).';
  }

  if (!input.date.trim()) {
    errors.date = 'Please select a reservation date.';
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) {
    errors.date = 'Please provide a valid date in YYYY-MM-DD format.';
  } else if (isPastIsoDate(input.date, todayStr)) {
    errors.date = 'Past dates cannot be selected. Please choose today or an upcoming date.';
  }

  if (!input.time.trim()) {
    errors.time = 'Please select a preferred dining time.';
  }

  const guestNum = Number(input.guests);
  if (!input.guests.trim() || !Number.isInteger(guestNum) || guestNum < 1 || guestNum > 20) {
    errors.guests = 'Please select between 1 and 20 guests.';
  }

  if (!input.diningPreference.trim()) {
    errors.diningPreference = 'Please select a dining preference.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateEventInquiry(
  input: EventInquiryInput,
  todayStr: string = getTodayIsoDate()
): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.contactName.trim().length < 2) {
    errors.contactName = 'Please provide your full name.';
  }

  if (!input.email.trim()) {
    errors.email = 'Please enter an email address.';
  } else if (!isValidEmail(input.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!input.phone.trim()) {
    errors.phone = 'Please enter a phone number.';
  } else if (!isValidPhone(input.phone)) {
    errors.phone = 'Please enter a valid phone number (7 to 15 digits).';
  }

  if (!input.eventType.trim()) {
    errors.eventType = 'Please choose an event type.';
  }

  const count = Number(input.guestCount);
  if (!input.guestCount.trim() || !Number.isInteger(count) || count < 8 || count > 250) {
    errors.guestCount = 'Private dining inquiries accommodate 8 to 250 guests.';
  }

  if (!input.preferredDate.trim()) {
    errors.preferredDate = 'Please select a preferred event date.';
  } else if (isPastIsoDate(input.preferredDate, todayStr)) {
    errors.preferredDate = 'Please select today or a future event date.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (!input.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!isValidEmail(input.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (input.subject.trim().length < 3) {
    errors.subject = 'Please provide a brief subject.';
  }

  if (input.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateNewsletterEmail(email: string): { valid: boolean; error: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, error: 'Please enter your email address.' };
  }
  if (!isValidEmail(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  return { valid: true, error: '' };
}

export function formatBdtPrice(amount: number): string {
  return `BDT ${amount.toLocaleString('en-US')}`;
}

export interface MenuDishLike {
  name: string;
  description: string;
  category: string;
}

export function filterMenuDishes<T extends MenuDishLike>(
  dishes: T[],
  selectedCategory: string,
  searchQuery: string
): T[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === 'All' || dish.category === selectedCategory;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      dish.name.toLowerCase().includes(normalizedQuery) ||
      dish.description.toLowerCase().includes(normalizedQuery) ||
      dish.category.toLowerCase().includes(normalizedQuery)
    );
  });
}

export interface GalleryItemLike {
  category: string;
}

export function filterGalleryItems<T extends GalleryItemLike>(
  items: T[],
  selectedCategory: string
): T[] {
  if (selectedCategory === 'All') {
    return items;
  }
  return items.filter((item) => item.category === selectedCategory);
}
