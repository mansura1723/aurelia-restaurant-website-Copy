export const IMAGES = {
  heroInterior: '/src/assets/images/hero_dining_interior_1795189896993.jpg',
  buffetLive: '/src/assets/images/buffet_live_cooking_1795189897189.jpg',
  beefTenderloin: '/src/assets/images/plated_beef_tenderloin_1795189898708.jpg',
  sushiPlatter: '/src/assets/images/seafood_sushi_platter_1795189896557.jpg',
  mezzeSalads: '/src/assets/images/mediterranean_mezze_salads_1795189897833.jpg',
  artisanDesserts: '/src/assets/images/artisan_desserts_pastry_1795189896845.jpg',
  chefArtistry: '/src/assets/images/executive_chef_artistry_1795189897031.jpg',
  privateDining: '/src/assets/images/private_dining_suite_1795189897762.jpg',
  grilledSeafood: '/src/assets/images/grilled_seafood_platter_1795189896987.jpg',
  beverageLounge: '/src/assets/images/luxury_cocktail_lounge_1795189897308.jpg',
  breakfastRoyale: '/src/assets/images/breakfast_eggs_royale_1795190927718.jpg',
  mushroomSoup: '/src/assets/images/truffle_mushroom_soup_1795190928774.jpg',
  asianWok: '/src/assets/images/asian_wok_curry_1795190928402.jpg',
  indianBiryani: '/src/assets/images/indian_royal_biryani_1795190928510.jpg',
  continentalLamb: '/src/assets/images/continental_lamb_risotto_1795190927902.jpg',
} as const;

export type PageRoute =
  | '/'
  | '/our-story'
  | '/experiences'
  | '/menu'
  | '/reservations'
  | '/private-dining'
  | '/gallery'
  | '/contact';

export interface NavItem {
  label: string;
  path: PageRoute;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Menu', path: '/menu' },
  { label: 'Private Events', path: '/private-dining' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const MENU_CATEGORIES = [
  'All',
  'Breakfast',
  'Salads & Starters',
  'Soups',
  'Asian Cuisine',
  'Continental Cuisine',
  'Indian Cuisine',
  'Japanese Cuisine',
  'Seafood',
  'Grills & Main Course',
  'Desserts',
  'Beverages',
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export interface MenuDish {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  priceBdt: number;
  isVegetarian: boolean;
  isSignature?: boolean;
  image: string;
}

export const MENU_DISHES: MenuDish[] = [
  // Breakfast
  {
    id: 'bk-1',
    name: 'Aurelia Artisanal Pastry & Viennoiserie Basket',
    category: 'Breakfast',
    description: 'Warm French-butter croissants, pistachio pain au chocolat, wildflower honey, and house berry preserve.',
    priceBdt: 1150,
    isVegetarian: true,
    image: IMAGES.artisanDesserts,
  },
  {
    id: 'bk-2',
    name: 'Poached Eggs Royale with Smoked Salmon',
    category: 'Breakfast',
    description: 'Toasted brioche, organic farm eggs, cured Atlantic salmon, chive hollandaise, and dressed watercress.',
    priceBdt: 1650,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.breakfastRoyale,
  },
  {
    id: 'bk-3',
    name: 'Dhaka Heritage Morning Platter',
    category: 'Breakfast',
    description: 'Flaky parathas, slow-simmered spiced chana dal, saffron suji halwa, and masala chai.',
    priceBdt: 1250,
    isVegetarian: true,
    image: IMAGES.indianBiryani,
  },
  {
    id: 'bk-4',
    name: 'Cardamom Ricotta Hotcakes',
    category: 'Breakfast',
    description: 'Whipped mascarpone cream, caramelized figs, toasted hazelnuts, and aged maple reduction.',
    priceBdt: 1350,
    isVegetarian: true,
    image: IMAGES.breakfastRoyale,
  },

  // Salads & Starters
  {
    id: 'ss-1',
    name: 'Mediterranean Mezze & Warm Flatbread',
    category: 'Salads & Starters',
    description: 'Velvety tahini hummus, charred eggplant mutabbal, labneh with za’atar oil, pomegranate, and stone-baked pita.',
    priceBdt: 1750,
    isVegetarian: true,
    isSignature: true,
    image: IMAGES.mezzeSalads,
  },
  {
    id: 'ss-2',
    name: 'Seasonal Burrata & Roasted Fig Salad',
    category: 'Salads & Starters',
    description: 'Creamy Puglia-style burrata, baby arugula, roasted heirloom beets, toasted walnuts, and aged balsamic.',
    priceBdt: 1950,
    isVegetarian: true,
    isSignature: true,
    image: IMAGES.mezzeSalads,
  },
  {
    id: 'ss-3',
    name: 'Seared Yellowfin Tuna Tataki',
    category: 'Salads & Starters',
    description: 'Sesame-crusted tuna loin, yuzu soy dressing, pickled radish, and crisp lotus root.',
    priceBdt: 2450,
    isVegetarian: false,
    image: IMAGES.sushiPlatter,
  },
  {
    id: 'ss-4',
    name: 'Crispy Duck & Pomelo Salad',
    category: 'Salads & Starters',
    description: 'Shredded confit duck, ruby pomelo segments, roasted cashews, mint, and tamarind palm glaze.',
    priceBdt: 2150,
    isVegetarian: false,
    image: IMAGES.asianWok,
  },

  // Soups
  {
    id: 'sp-1',
    name: 'Wild Forest Mushroom Velouté',
    category: 'Soups',
    description: 'Slow-roasted porcini and button mushrooms, thyme cream, black truffle oil, and sourdough crisp.',
    priceBdt: 1150,
    isVegetarian: true,
    isSignature: true,
    image: IMAGES.mushroomSoup,
  },
  {
    id: 'sp-2',
    name: 'Roasted Heirloom Tomato & Basil Bisque',
    category: 'Soups',
    description: 'Vine-ripened tomatoes, cold-pressed olive oil, mascarpone swirl, and grilled focaccia.',
    priceBdt: 980,
    isVegetarian: true,
    image: IMAGES.mushroomSoup,
  },
  {
    id: 'sp-3',
    name: 'Royal Tom Yum Goong',
    category: 'Soups',
    description: 'Clear aromatic broth infused with lemongrass, galangal, kaffir lime leaf, and jumbo river prawns.',
    priceBdt: 1450,
    isVegetarian: false,
    image: IMAGES.asianWok,
  },
  {
    id: 'sp-4',
    name: 'Classic French Onion Gratinée',
    category: 'Soups',
    description: 'Caramelized sweet onions in rich beef consommé topped with aged Gruyère crouton.',
    priceBdt: 1350,
    isVegetarian: false,
    image: IMAGES.mushroomSoup,
  },

  // Asian Cuisine
  {
    id: 'as-1',
    name: 'Wok-Tossed Black Pepper Beef',
    category: 'Asian Cuisine',
    description: 'Prime beef strips, cracked Sarawak black peppercorn, bell peppers, and fragrant jasmine rice.',
    priceBdt: 2650,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.asianWok,
  },
  {
    id: 'as-2',
    name: 'Singaporean Chili Jumbo Prawns',
    category: 'Asian Cuisine',
    description: 'Fresh local tiger prawns simmered in sweet-savory chili tomato glaze with steamed mantou buns.',
    priceBdt: 2950,
    isVegetarian: false,
    image: IMAGES.grilledSeafood,
  },
  {
    id: 'as-3',
    name: 'Bangkok Green Curry with Charred Vegetables',
    category: 'Asian Cuisine',
    description: 'Stone-ground green curry paste, coconut cream, Thai basil, baby eggplant, and steamed jasmine rice.',
    priceBdt: 1750,
    isVegetarian: true,
    image: IMAGES.asianWok,
  },
  {
    id: 'as-4',
    name: 'Artisan Steamed Dim Sum Trio',
    category: 'Asian Cuisine',
    description: 'Hand-pleated crystal prawn har gow, chicken siu mai, and truffle shiitake dumplings.',
    priceBdt: 1850,
    isVegetarian: false,
    image: IMAGES.buffetLive,
  },

  // Continental Cuisine
  {
    id: 'ct-1',
    name: 'Herb-Crusted Rack of Lamb',
    category: 'Continental Cuisine',
    description: 'Parsley and Dijon crust, charred asparagus, saffron risotto, and rosemary lamb jus.',
    priceBdt: 4250,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.continentalLamb,
  },
  {
    id: 'ct-2',
    name: 'Wild Saffron & Porcini Risotto',
    category: 'Continental Cuisine',
    description: 'Aged Acquerello Carnaroli rice, Spanish saffron threads, Parmigiano-Reggiano, and wild mushrooms.',
    priceBdt: 2250,
    isVegetarian: true,
    image: IMAGES.continentalLamb,
  },
  {
    id: 'ct-3',
    name: 'Pan-Roasted Duck Breast à l’Orange',
    category: 'Continental Cuisine',
    description: 'Crisp-skinned duck breast, caramelized fennel, celeriac purée, and blood orange reduction.',
    priceBdt: 3350,
    isVegetarian: false,
    image: IMAGES.beefTenderloin,
  },
  {
    id: 'ct-4',
    name: 'Hand-Rolled Truffle Tagliolini',
    category: 'Continental Cuisine',
    description: 'Fresh egg pasta tossed in Normandy butter, aged parmesan emulsion, and shaved black truffle.',
    priceBdt: 2450,
    isVegetarian: true,
    image: IMAGES.continentalLamb,
  },

  // Indian Cuisine
  {
    id: 'in-1',
    name: 'Old Delhi Butter Chicken Makhani',
    category: 'Indian Cuisine',
    description: 'Charcoal-roasted chicken tikka folded into velvety heirloom tomato, fenugreek, and cultured butter gravy.',
    priceBdt: 2150,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.indianBiryani,
  },
  {
    id: 'in-2',
    name: 'Awadhi Saffron Lamb Dum Biryani',
    category: 'Indian Cuisine',
    description: 'Long-grain aged basmati rice sealed in pastry with tender spiced lamb, rose water, and mint raita.',
    priceBdt: 2550,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.indianBiryani,
  },
  {
    id: 'in-3',
    name: '24-Hour Simmered Dal Aurelia',
    category: 'Indian Cuisine',
    description: 'Whole black urad lentils slow-cooked overnight over gentle embers with roasted garlic and cream.',
    priceBdt: 1450,
    isVegetarian: true,
    image: IMAGES.indianBiryani,
  },
  {
    id: 'in-4',
    name: 'Tandoori Paneer Tikka Masala',
    category: 'Indian Cuisine',
    description: 'Cottage cheese marinated in Kashmiri chili and hung curd, charred in clay tandoor with spiced gravy.',
    priceBdt: 1750,
    isVegetarian: true,
    image: IMAGES.indianBiryani,
  },

  // Japanese Cuisine
  {
    id: 'jp-1',
    name: 'Aurelia Grand Sushi & Sashimi Platter',
    category: 'Japanese Cuisine',
    description: 'Chef’s daily selection of bluefin tuna sashimi, Norwegian salmon nigiri, and crispy tempura maki.',
    priceBdt: 3850,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.sushiPlatter,
  },
  {
    id: 'jp-2',
    name: 'Miso-Glazed Black Cod',
    category: 'Japanese Cuisine',
    description: '48-hour Saikyo miso marinated cod fillet, pickled hajikami ginger, and charred baby bok choy.',
    priceBdt: 4450,
    isVegetarian: false,
    image: IMAGES.grilledSeafood,
  },
  {
    id: 'jp-3',
    name: 'Avocado & Roasted Shiitake Maki',
    category: 'Japanese Cuisine',
    description: 'Seasoned Koshihikari rice, ripe avocado, marinated shiitake, toasted sesame, and sweet soy glaze.',
    priceBdt: 1650,
    isVegetarian: true,
    image: IMAGES.sushiPlatter,
  },
  {
    id: 'jp-4',
    name: 'Crispy Prawn Tempura Uramaki',
    category: 'Japanese Cuisine',
    description: 'Tempura tiger prawn, cucumber, tobiko, and roasted sesame spicy emulsion.',
    priceBdt: 2250,
    isVegetarian: false,
    image: IMAGES.sushiPlatter,
  },

  // Seafood
  {
    id: 'sf-1',
    name: 'Grilled Seafood Selection & Saffron Beurre Blanc',
    category: 'Seafood',
    description: 'Char-grilled Bay of Bengal jumbo tiger prawns and pan-seared sea bass with charred lemon and herb oil.',
    priceBdt: 3950,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.grilledSeafood,
  },
  {
    id: 'sf-2',
    name: 'Butter-Poached Lobster Thermidor',
    category: 'Seafood',
    description: 'Whole rock lobster gratinated with mustard cream, aged Gruyère, and fine herb salad.',
    priceBdt: 5600,
    isVegetarian: false,
    image: IMAGES.grilledSeafood,
  },
  {
    id: 'sf-3',
    name: 'Pan-Seared Atlantic Salmon',
    category: 'Seafood',
    description: 'Crisp-skinned salmon fillet, crushed fingerling potatoes, tenderstem broccoli, and citrus caper emulsion.',
    priceBdt: 3450,
    isVegetarian: false,
    image: IMAGES.grilledSeafood,
  },
  {
    id: 'sf-4',
    name: 'Chilled Oceanic Raw Bar Selection',
    category: 'Seafood',
    description: 'Poached tiger prawns, marinated crab claws, sea scallops, mignonette, and house cocktail sauce.',
    priceBdt: 4150,
    isVegetarian: false,
    image: IMAGES.sushiPlatter,
  },

  // Grills & Main Course
  {
    id: 'gr-1',
    name: 'Signature Beef Tenderloin with Truffle Jus',
    category: 'Grills & Main Course',
    description: '220g center-cut prime beef tenderloin, silky potato mousseline, charred baby carrots, and black truffle jus.',
    priceBdt: 4650,
    isVegetarian: false,
    isSignature: true,
    image: IMAGES.beefTenderloin,
  },
  {
    id: 'gr-2',
    name: 'Charcoal-Grilled Australian Ribeye (300g)',
    category: 'Grills & Main Course',
    description: 'Marbled grain-fed ribeye finished with roasted bone marrow butter and confit garlic.',
    priceBdt: 5450,
    isVegetarian: false,
    image: IMAGES.beefTenderloin,
  },
  {
    id: 'gr-3',
    name: 'Wood-Fired Cauliflower Steak',
    category: 'Grills & Main Course',
    description: 'Harissa-spiced cauliflower steak over smoked almond purée, golden raisins, and herb gremolata.',
    priceBdt: 1850,
    isVegetarian: true,
    image: IMAGES.mezzeSalads,
  },
  {
    id: 'gr-4',
    name: 'Free-Range Herb Roasted Spring Chicken',
    category: 'Grills & Main Course',
    description: 'Lemon-thyme marinated half chicken, charred heirloom roots, and natural pan roasting jus.',
    priceBdt: 2350,
    isVegetarian: false,
    image: IMAGES.continentalLamb,
  },

  // Desserts
  {
    id: 'ds-1',
    name: '24K Gold-Leaf Dark Chocolate Entremet',
    category: 'Desserts',
    description: '70% single-origin Valrhona ganache dome, hazelnut praline feuilletine, and warm espresso anglaise.',
    priceBdt: 1350,
    isVegetarian: true,
    isSignature: true,
    image: IMAGES.artisanDesserts,
  },
  {
    id: 'ds-2',
    name: 'Salted Caramel & Vanilla Mille-Feuille',
    category: 'Desserts',
    description: 'Caramelized inverted puff pastry layered with Madagascar vanilla bean diplomat cream.',
    priceBdt: 1150,
    isVegetarian: true,
    image: IMAGES.artisanDesserts,
  },
  {
    id: 'ds-3',
    name: 'Iranian Pistachio & Wild Berry Tartlet',
    category: 'Desserts',
    description: 'Toasted almond sablé, whipped pistachio mousseline, fresh raspberries, and mint.',
    priceBdt: 1250,
    isVegetarian: true,
    image: IMAGES.artisanDesserts,
  },
  {
    id: 'ds-4',
    name: 'Saffron Rose Crème Brûlée',
    category: 'Desserts',
    description: 'Silky baked custard infused with Kashmiri saffron and Damask rosewater beneath caramelized sugar.',
    priceBdt: 1050,
    isVegetarian: true,
    image: IMAGES.artisanDesserts,
  },

  // Beverages
  {
    id: 'bv-1',
    name: 'Aurelia Botanical Gold Elixir (Zero-Proof)',
    category: 'Beverages',
    description: 'Cold-pressed yuzu, cardamom cordial, elderflower tonic, and fresh rosemary.',
    priceBdt: 850,
    isVegetarian: true,
    isSignature: true,
    image: IMAGES.beverageLounge,
  },
  {
    id: 'bv-2',
    name: 'Smoked Cinnamon & Hibiscus Fizz',
    category: 'Beverages',
    description: 'Steeped crimson hibiscus blossom, charred Ceylon cinnamon syrup, lime, and sparkling mineral water.',
    priceBdt: 780,
    isVegetarian: true,
    image: IMAGES.beverageLounge,
  },
  {
    id: 'bv-3',
    name: 'Single-Origin Pour-Over & Espresso Bar',
    category: 'Beverages',
    description: 'Artisanal Ethiopian or Colombian roast prepared tableside as espresso, cortado, or pour-over.',
    priceBdt: 650,
    isVegetarian: true,
    image: IMAGES.breakfastRoyale,
  },
  {
    id: 'bv-4',
    name: 'Sylhet Reserve Loose-Leaf Tea Service',
    category: 'Beverages',
    description: 'Curated selection of first-flush single-estate black, white jasmine, and chamomile infusions.',
    priceBdt: 620,
    isVegetarian: true,
    image: IMAGES.beverageLounge,
  },
];

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  schedule: string;
  pricing: string;
  description: string;
  highlights: string[];
  image: string;
  ctaLabel: string;
  ctaPath: PageRoute;
}

export const DINING_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'international-buffet',
    title: 'International Buffet Experience',
    subtitle: 'Seven Culinary Pavilions',
    schedule: 'Daily · Lunch & Dinner',
    pricing: 'From BDT 4,500++ per guest',
    description:
      'An abundant global spread uniting Mediterranean antipasti, Japanese sushi counters, South Asian heritage dishes, Continental roasts, and an architectural patisserie room.',
    highlights: [
      'Over 80 rotating international specialties',
      'Freshly shucked oceanic raw bar & chilled seafood',
      'Dedicated patisserie and artisanal gelato island',
    ],
    image: IMAGES.buffetLive,
    ctaLabel: 'Reserve Buffet Table',
    ctaPath: '/reservations',
  },
  {
    id: 'breakfast',
    title: 'Breakfast Experience',
    subtitle: 'Morning Light & Artisanal Craft',
    schedule: '06:30 – 10:30 Daily',
    pricing: 'BDT 2,600++ per guest',
    description:
      'Begin the morning with warm laminated pastries straight from our stone deck ovens, made-to-order egg preparations, fresh pressed tropical juices, and Dhaka heritage breakfast classics.',
    highlights: [
      'Live egg & waffle station prepared to order',
      'Single-estate coffee and Sylhet tea bar',
      'Fresh-pressed seasonal juices and smoothie shots',
    ],
    image: IMAGES.breakfastRoyale,
    ctaLabel: 'Book Morning Table',
    ctaPath: '/reservations',
  },
  {
    id: 'weekend-brunch',
    title: 'Weekend Brunch',
    subtitle: 'Leisurely Friday & Saturday Gatherings',
    schedule: 'Fri – Sat · 11:30 – 15:30',
    pricing: 'BDT 5,200++ per guest',
    description:
      'Designed for unhurried family celebrations and refined social afternoons, featuring carved prime roasts, seafood towers, live pasta wheels, and a dedicated children’s pastry bar.',
    highlights: [
      'Extended seafood and sushi curation',
      'Zero-proof botanical beverage pairings',
      'Acoustic piano ambiance in the main hall',
    ],
    image: IMAGES.artisanDesserts,
    ctaLabel: 'Reserve Weekend Brunch',
    ctaPath: '/reservations',
  },
  {
    id: 'lunch',
    title: 'Lunch Experience',
    subtitle: 'Executive & Social Midday Dining',
    schedule: 'Sun – Thu · 12:30 – 15:30',
    pricing: 'BDT 3,800++ per guest',
    description:
      'A crisp, energizing midday dining destination balancing light Mediterranean bowls, Asian wok creations, and swift three-course executive options for Dhaka’s business community.',
    highlights: [
      'Balanced executive buffet or curated set menu',
      'Quiet velvet-draped corner booths for business',
      'Express artisanal coffee & dessert finish',
    ],
    image: IMAGES.heroInterior,
    ctaLabel: 'Book Lunch Table',
    ctaPath: '/reservations',
  },
  {
    id: 'dinner',
    title: 'Dinner Experience',
    subtitle: 'Candlelit Evening Gastronomy',
    schedule: 'Daily · 18:30 – 23:00',
    pricing: 'BDT 5,800++ per guest',
    description:
      'As dusk settles over the dining hall, brass table lamps cast a warm glow across linen-dressed tables while our open kitchens fire charcoal grills, woks, and carving stations.',
    highlights: [
      'Full evening seafood, prime grill & sushi display',
      'Interactive live chef theatres across five cuisines',
      'Curated evening zero-proof elixirs and mocktail trolley',
    ],
    image: IMAGES.grilledSeafood,
    ctaLabel: 'Reserve Dinner Table',
    ctaPath: '/reservations',
  },
  {
    id: 'live-cooking',
    title: 'Live Cooking Stations',
    subtitle: 'Culinary Theatre in Motion',
    schedule: 'Active during Lunch, Brunch & Dinner',
    pricing: 'Included in Buffet Experiences',
    description:
      'Step up to marble show counters where specialist chefs sear prime cuts, hand-roll maki, pull fresh noodles, and plate sizzling seafood instantaneously before your eyes.',
    highlights: [
      'Custom robatayaki grill & tandoor clay oven',
      'Hand-rolled sushi & sashimi carving counter',
      'Flambé crêpe & warm soufflé station',
    ],
    image: IMAGES.chefArtistry,
    ctaLabel: 'Explore the Menu',
    ctaPath: '/menu',
  },
  {
    id: 'ala-carte',
    title: 'À La Carte Dining',
    subtitle: 'Composed Plates, Seasonal Precision',
    schedule: 'All-Day · 11:00 – 23:00',
    pricing: 'Individual dishes from BDT 620',
    description:
      'For guests preferring tailored table service, our à la carte menu presents signature plated courses crafted to order with imported cuts, local Bay seafood, and organic produce.',
    highlights: [
      'Dedicated zero-proof botanical pairing guide',
      'Center-cut tenderloin, lobster & saffron risotto',
      'Attentive course-by-course table pacing',
    ],
    image: IMAGES.beefTenderloin,
    ctaLabel: 'View À La Carte Menu',
    ctaPath: '/menu',
  },
  {
    id: 'private-dining',
    title: 'Private Dining Rooms',
    subtitle: 'Bespoke Suites for Memorable Occasions',
    schedule: 'By Advance Arrangement',
    pricing: 'Custom Packages for 8–120 Guests',
    description:
      'Tucked behind walnut paneling and deep midnight navy drapery, our private suites host intimate family milestones, diplomatic luncheons, and executive gala dinners.',
    highlights: [
      'Dedicated service captain and private chef liaison',
      'Custom printed menus & floral table styling',
      'Integrated discreet AV for corporate presentations',
    ],
    image: IMAGES.privateDining,
    ctaLabel: 'Inquire for Private Events',
    ctaPath: '/private-dining',
  },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Restaurant Interiors',
  'Signature Dishes',
  'International Buffet',
  'Live Cooking',
  'Desserts',
  'Special Events',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Dining Pavilion',
    category: 'Restaurant Interiors',
    caption: 'Velvet midnight navy banquettes, warm brass table lamps, and marble buffet arches.',
    image: IMAGES.heroInterior,
  },
  {
    id: 'gal-2',
    title: 'Prime Beef Tenderloin & Truffle Jus',
    category: 'Signature Dishes',
    caption: 'Center-cut tenderloin plated with heirloom carrots and velvety potato mousseline.',
    image: IMAGES.beefTenderloin,
  },
  {
    id: 'gal-3',
    title: 'Show Kitchen & Brass Buffet Counters',
    category: 'International Buffet',
    caption: 'Polished champagne brass chafing vessels and dark marble counters at evening service.',
    image: IMAGES.buffetLive,
  },
  {
    id: 'gal-4',
    title: 'Precision Plating at the Pass',
    category: 'Live Cooking',
    caption: 'Our executive culinary team finishing seasonal plates to order.',
    image: IMAGES.chefArtistry,
  },
  {
    id: 'gal-5',
    title: 'Patisserie Marble Counter',
    category: 'Desserts',
    caption: '24K gold-leaf chocolate entremets, pistachio tartlets, and caramel mille-feuille.',
    image: IMAGES.artisanDesserts,
  },
  {
    id: 'gal-6',
    title: 'The Navy & Walnut Private Suite',
    category: 'Special Events',
    caption: 'Candlelit walnut banquet table dressed for up to twenty-four seated guests.',
    image: IMAGES.privateDining,
  },
  {
    id: 'gal-7',
    title: 'Char-Grilled Tiger Prawns & Sea Bass',
    category: 'Signature Dishes',
    caption: 'Saffron beurre blanc, charred lemon, and freshly harvested coastal seafood.',
    image: IMAGES.grilledSeafood,
  },
  {
    id: 'gal-8',
    title: 'Artisanal Sushi & Sashimi Slate',
    category: 'Signature Dishes',
    caption: 'Hand-sliced sashimi and salmon nigiri crafted at our Japanese station.',
    image: IMAGES.sushiPlatter,
  },
  {
    id: 'gal-9',
    title: 'Mediterranean Mezze Spread',
    category: 'International Buffet',
    caption: 'Handcrafted ceramic bowls of tahini hummus, burrata with figs, and warm flatbread.',
    image: IMAGES.mezzeSalads,
  },
  {
    id: 'gal-10',
    title: 'Botanical Lounge & Elixir Bar',
    category: 'Restaurant Interiors',
    caption: 'Midnight navy bar stools and backlit brass shelving for zero-proof evening pours.',
    image: IMAGES.beverageLounge,
  },
  {
    id: 'gal-11',
    title: 'Herb-Crusted Rack of Lamb & Saffron Risotto',
    category: 'Signature Dishes',
    caption: 'Roasted rosemary lamb rack served over saffron Carnaroli risotto.',
    image: IMAGES.continentalLamb,
  },
  {
    id: 'gal-12',
    title: 'Royal Copper Handi Dum Biryani',
    category: 'Signature Dishes',
    caption: 'Slow-cooked saffron lamb biryani paired with butter chicken and garlic naan.',
    image: IMAGES.indianBiryani,
  },
];

export interface GuestTestimonial {
  id: string;
  quote: string;
  guestName: string;
  context: string;
}

export const GUEST_TESTIMONIALS: GuestTestimonial[] = [
  {
    id: 'test-1',
    quote:
      'From the quiet warmth of the navy banquettes to the freshly seared sea bass at the live station, every detail felt unhurried and genuinely welcoming.',
    guestName: 'Sabrina Chowdhury',
    context: 'Weekend Dinner Experience · Dhaka',
  },
  {
    id: 'test-2',
    quote:
      'We hosted an executive board dinner in the private walnut suite. The custom menu pacing and attentive service made our international guests feel completely at home.',
    guestName: 'Kamrul Hasan',
    context: 'Private Corporate Dining · Dhaka',
  },
  {
    id: 'test-3',
    quote:
      'The breadth of cuisines—from authentic sushi and Mediterranean mezze to old-world pastries—makes Aurelia an effortless choice for multi-generational family gatherings.',
    guestName: 'Tasnim & Arif Zaman',
    context: 'Weekend Brunch · Dhaka',
  },
];

export const VENUE_CONTACT_INFO = {
  addressLine1: 'Level 3, Meridian Hospitality Tower',
  addressLine2: 'Gulshan Avenue, Dhaka 1212, Bangladesh',
  phone: '+880 1700-000000',
  email: 'reservations@aurelia-dining.com',
  hours: [
    { label: 'Breakfast', time: '06:30 – 10:30' },
    { label: 'Lunch', time: '12:30 – 15:30' },
    { label: 'Weekend Brunch', time: 'Fri – Sat, 11:30 – 15:30' },
    { label: 'Dinner', time: '18:30 – 23:00' },
  ],
};
