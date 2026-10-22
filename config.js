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

  /* Scroll animation for the hero.
     Export your animation as numbered image frames and set `frames` to the
     frame count. Until then (frames: 0) the hero shows a still design.
     File names: frame_0001.webp, frame_0002.webp, ...                     */
  hero: {
    desktop: { frames: 0, path: 'assets/hero/desktop/frame_', ext: '.webp', digits: 4 },
    mobile:  { frames: 0, path: 'assets/hero/mobile/frame_',  ext: '.webp', digits: 4 }
  }
};
