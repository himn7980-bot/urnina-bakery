/* ==========================================================
   URNINA — site settings
   Edit this file only. Everything on the site updates from here.
   Leave a value as '' (empty) to hide it from the site.
   ========================================================== */
window.URNINA_CONFIG = {
  business: {
    // WhatsApp number in international format, digits only, no + or spaces.
    // Iraq example: '9647701234567'. When set, the order form opens WhatsApp
    // with the order already written; until then it copies the order text.
    whatsapp: '',
    // Phone number to show and call, e.g. '+964 770 123 4567'
    phone: '',
    // Instagram username without @, e.g. 'urnina.bakery'
    instagram: '',
    // Business hours per language. Leave '' to hide.
    hours: { en: '', fa: '', ar: '' },
    location: { en: 'Karbala, Iraq', fa: 'کربلا، عراق', ar: 'كربلاء، العراق' },
    // Currency label used when a product has a price in products.js
    currency: { en: 'IQD', fa: 'دینار', ar: 'د.ع' }
  },

  // Language shown to first-time visitors whose browser language is not
  // English, Persian or Arabic. Returning visitors keep their last choice.
  defaultLanguage: 'ar',

  /* Vitrine images (front-on renders of the empty case) and where each
     spot is, in the image's own pixels. Products fill the spots in order,
     top shelf first; left to right in English, right to left in
     Arabic/Persian.
       x      — centre of the spot
       base   — the line the sweet stands on
       height — how tall the sweet can be
       tag    — vertical centre of the brass name plate
     Set `image: ''` to fall back to the case drawn in code.               */
  vitrine: {
    desktop: {
      image: 'assets/vitrine-desktop.webp', width: 1024, height: 572,
      itemWidth: 124, tagWidth: 120,
      spots: [
        { x: 309, base: 293, height: 112, tag: 300 }, { x: 444, base: 293, height: 112, tag: 300 },
        { x: 580, base: 293, height: 112, tag: 300 }, { x: 715, base: 293, height: 112, tag: 300 },
        { x: 309, base: 406, height: 84, tag: 417 },  { x: 444, base: 406, height: 84, tag: 417 },
        { x: 580, base: 406, height: 84, tag: 417 },  { x: 715, base: 406, height: 84, tag: 417 }
      ]
    },
    mobile: {
      image: 'assets/vitrine-mobile.webp', width: 572, height: 1024,
      itemWidth: 150, tagWidth: 170,
      spots: [
        { x: 176, base: 302, height: 92, tag: 310 }, { x: 396, base: 302, height: 92, tag: 310 },
        { x: 176, base: 404, height: 82, tag: 413 }, { x: 396, base: 404, height: 82, tag: 413 },
        { x: 176, base: 504, height: 80, tag: 512 }, { x: 396, base: 504, height: 80, tag: 512 },
        { x: 176, base: 596, height: 76, tag: 610 }, { x: 396, base: 596, height: 76, tag: 610 }
      ]
    }
  },

  /* Scroll animation for the hero.
     Export your animation as numbered image frames and set `frames` to the
     frame count. Until then (frames: 0) the hero shows a still design.
     File names: frame_0001.webp, frame_0002.webp, ...                     */
  hero: {
    desktop: { frames: 0, path: 'assets/hero/desktop/frame_', ext: '.webp', digits: 4 },
    mobile:  { frames: 0, path: 'assets/hero/mobile/frame_',  ext: '.webp', digits: 4 }
  }
};
