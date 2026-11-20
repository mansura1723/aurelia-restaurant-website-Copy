import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateReservation,
  validateEventInquiry,
  validateContactForm,
  validateNewsletterEmail,
  filterMenuDishes,
  filterGalleryItems,
  formatBdtPrice,
  isPastIsoDate,
} from './validation';

const TODAY = '2026-11-20';

test('isPastIsoDate identifies past, today, and future dates accurately', () => {
  assert.equal(isPastIsoDate('2026-11-19', TODAY), true);
  assert.equal(isPastIsoDate('2026-11-20', TODAY), false);
  assert.equal(isPastIsoDate('2026-12-01', TODAY), false);
});

test('validateReservation rejects missing fields, invalid email/phone, and past dates', () => {
  const result = validateReservation(
    {
      guestName: '',
      email: 'not-an-email',
      phone: '123',
      date: '2026-11-18',
      time: '',
      guests: '0',
      diningPreference: '',
      occasion: '',
      requests: '',
    },
    TODAY
  );

  assert.equal(result.valid, false);
  assert.ok(result.errors.guestName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.date);
  assert.ok(result.errors.time);
  assert.ok(result.errors.guests);
  assert.ok(result.errors.diningPreference);
});

test('validateReservation accepts valid future booking input', () => {
  const result = validateReservation(
    {
      guestName: 'Nadia Rahman',
      email: 'nadia.rahman@example.com',
      phone: '+880 1711 000000',
      date: '2026-11-25',
      time: '19:30',
      guests: '4',
      diningPreference: 'International Buffet',
      occasion: 'Anniversary',
      requests: 'Corner table if available',
    },
    TODAY
  );

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('validateEventInquiry enforces guest count range and future date', () => {
  const invalid = validateEventInquiry(
    {
      contactName: 'T',
      email: 'bad',
      phone: '99',
      eventType: '',
      guestCount: '4',
      preferredDate: '2026-11-10',
      notes: '',
    },
    TODAY
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.contactName);
  assert.ok(invalid.errors.guestCount);
  assert.ok(invalid.errors.preferredDate);

  const valid = validateEventInquiry(
    {
      contactName: 'Tariq Mahmud',
      email: 'tariq@example.com',
      phone: '01811223344',
      eventType: 'Corporate Dinner',
      guestCount: '32',
      preferredDate: '2026-12-12',
      notes: 'Custom three-course menu',
    },
    TODAY
  );
  assert.equal(valid.valid, true);
});

test('validateContactForm and validateNewsletterEmail validate cleanly', () => {
  const badContact = validateContactForm({
    name: 'A',
    email: 'invalid',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(badContact.valid, false);

  const goodContact = validateContactForm({
    name: 'Farhana Kabir',
    email: 'farhana@example.com',
    subject: 'Private Brunch Inquiry',
    message: 'We would love to learn more about weekend brunch options.',
  });
  assert.equal(goodContact.valid, true);

  assert.equal(validateNewsletterEmail('').valid, false);
  assert.equal(validateNewsletterEmail('guest@example').valid, false);
  assert.equal(validateNewsletterEmail('guest@example.com').valid, true);
});

test('filterMenuDishes filters by category and search query', () => {
  const sample = [
    { name: 'Salmon Nigiri Trio', description: 'Fresh Atlantic salmon', category: 'Japanese Cuisine' },
    { name: 'Chargrilled Tiger Prawns', description: 'Saffron butter glaze', category: 'Seafood' },
    { name: 'Truffle Beef Tenderloin', description: 'Aged beef fillet', category: 'Grills & Main Course' },
  ];

  assert.equal(filterMenuDishes(sample, 'All', '').length, 3);
  assert.equal(filterMenuDishes(sample, 'Seafood', '').length, 1);
  assert.equal(filterMenuDishes(sample, 'All', 'salmon').length, 1);
  assert.equal(filterMenuDishes(sample, 'Seafood', 'salmon').length, 0);
});

test('filterGalleryItems and formatBdtPrice work as expected', () => {
  const items = [
    { category: 'Signature Dishes' },
    { category: 'Desserts' },
    { category: 'Signature Dishes' },
  ];
  assert.equal(filterGalleryItems(items, 'All').length, 3);
  assert.equal(filterGalleryItems(items, 'Signature Dishes').length, 2);
  assert.equal(formatBdtPrice(3450), 'BDT 3,450');
});
