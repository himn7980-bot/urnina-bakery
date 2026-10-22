/* URNINA Bakery — interactions */
(function () {
  'use strict';
  var CFG = window.URNINA_CONFIG || {};
  var BIZ = CFG.business || {};
  var PRODUCTS = window.URNINA_PRODUCTS || [];

  /* ---------- UI text ---------- */
  var copy = {
    en: {
      skip: 'Skip to products', menuToggle: 'Menu',
      navStory: 'OUR STORY', navCreations: 'CREATIONS', navMenu: 'MENU', navOrder: 'ORDER', navContact: 'CONTACT', orderNow: 'ORDER NOW',
      heroTitle: 'More Than Sweets.', heroSub: 'Made to be remembered.', discover: 'DISCOVER OUR CREATIONS',
      phase0: 'INTRO', phase1: 'CRAFT', phase2: 'CREATION', phase3: 'SIGNATURE', scroll: 'SCROLL TO CREATE',
      signatureEyebrow: 'URNINA SIGNATURE', signature: 'Made to be remembered.',
      signatureIngredients: ['VANILLA', 'SPONGE', 'CREAM', 'STRAWBERRY'],
      handcrafted: 'HANDCRAFTED IN KARBALA', creationsTitle: 'Sweet things, beautifully made.',
      creationsIntro: 'Handcrafted cakes and desserts, composed for quiet pleasures and unforgettable celebrations.',
      ingredients: 'INGREDIENTS', options: 'SIZES / OPTIONS', customRequest: 'Made to order · Custom requests welcome',
      price: 'PRICE', priceRequest: 'Price on request', priceFrom: 'From', orderProduct: 'ORDER THIS PRODUCT →',
      photoSoon: 'Photography coming soon',
      ourStory: 'OUR STORY', storyTitle: 'Born from simple ingredients. Created for special moments.',
      storyBody: 'URNINA is a modern artisan bakery shaped around the pleasure of making something slowly, thoughtfully, and by hand — a story told through ingredients, craft, and the moments each creation becomes part of.',
      menuEyebrow: 'THE MENU', menuTitle: 'A considered collection.',
      menuIntro: 'Every item is made to order. Final pricing and availability are confirmed personally.',
      yourOrder: 'YOUR ORDER', orderTitle: 'Made for your moment.',
      orderIntro: 'Choose the essentials and send your request on WhatsApp. Final availability, price and delivery details are confirmed personally.',
      chooseProduct: 'CHOOSE PRODUCT', choose: 'Choose', quantity: 'QUANTITY', size: 'SIZE / OPTION', sizeHint: 'e.g. 1 kg, 8 pieces',
      delivery: 'DELIVERY OR PICKUP', optDelivery: 'Delivery', optPickup: 'Pickup', date: 'PREFERRED DATE',
      name: 'YOUR NAME', namePh: 'Full name', phone: 'PHONE NUMBER', phonePh: '+964 …', notes: 'SPECIAL MESSAGE / NOTES', notesPh: 'Writing on the cake, allergies, delivery address…',
      whatsapp: 'ORDER VIA WHATSAPP',
      errProduct: 'Please choose a product.', errName: 'Please enter your name.', errPhone: 'Please enter a valid phone number.', errQty: 'Quantity must be between 1 and 99.', errDate: 'Please choose today or a later date.',
      opened: 'WhatsApp is opening with your order. Just press send.',
      copied: 'Your order text was copied. Online ordering opens soon — please paste it to us on WhatsApp or Instagram.',
      notReady: 'Online ordering opens soon. Your order details:',
      msgTitle: 'URNINA Bakery — New order', msgProduct: 'Product', msgQty: 'Quantity', msgSize: 'Size / option', msgDelivery: 'Delivery / pickup', msgDate: 'Preferred date', msgName: 'Name', msgPhone: 'Phone', msgNotes: 'Notes',
      moments: 'FOR THE MOMENTS THAT MATTER', contact: 'CONTACT', contactTitle: 'LET’S MAKE SOMETHING MEMORABLE.',
      location: 'LOCATION', phoneLabel: 'PHONE', hours: 'BUSINESS HOURS', orderLabel: 'ORDERS', orderViaForm: 'Use the order form above',
      footerTag: 'Handcrafted cakes and desserts in Karbala.', backTop: 'BACK TO TOP ↑'
    },
    fa: {
      skip: 'رفتن به محصولات', menuToggle: 'منو',
      navStory: 'داستان ما', navCreations: 'محصولات', navMenu: 'منو', navOrder: 'سفارش', navContact: 'تماس با ما', orderNow: 'سفارش دهید',
      heroTitle: 'فراتر از شیرینی.', heroSub: 'ساخته شده برای به‌یاد ماندن.', discover: 'محصولات ما را ببینید',
      phase0: 'شروع', phase1: 'هنر ساخت', phase2: 'خلق', phase3: 'امضای اورنینا', scroll: 'برای ساخت اسکرول کنید',
      signatureEyebrow: 'امضای اورنینا', signature: 'ساخته شده برای به‌یاد ماندن.',
      signatureIngredients: ['وانیل', 'کیک اسفنجی', 'خامه', 'توت‌فرنگی'],
      handcrafted: 'دست‌ساز در کربلا', creationsTitle: 'شیرینی‌هایی که زیبا ساخته می‌شوند.',
      creationsIntro: 'کیک‌ها و دسرهای دست‌ساز برای لذت‌های ساده و جشن‌های فراموش‌نشدنی.',
      ingredients: 'مواد تشکیل‌دهنده', options: 'اندازه / گزینه‌ها', customRequest: 'به سفارش شما · سفارش اختصاصی پذیرفته می‌شود',
      price: 'قیمت', priceRequest: 'قیمت با هماهنگی', priceFrom: 'از', orderProduct: 'سفارش این محصول ←',
      photoSoon: 'عکس به‌زودی',
      ourStory: 'داستان ما', storyTitle: 'از مواد ساده. برای لحظه‌های خاص.',
      storyBody: 'اورنینا یک شیرینی‌پزی مدرن و دست‌ساز است که بر لذت ساختن آرام، دقیق و با دست شکل گرفته؛ داستانی از مواد اولیه، هنر ساخت و لحظه‌هایی که هر محصول بخشی از آن می‌شود.',
      menuEyebrow: 'منو', menuTitle: 'مجموعه‌ای با انتخاب دقیق.',
      menuIntro: 'همه محصولات به سفارش شما تهیه می‌شوند. قیمت و موجودی نهایی مستقیماً تأیید می‌شود.',
      yourOrder: 'سفارش شما', orderTitle: 'برای لحظه شما ساخته می‌شود.',
      orderIntro: 'جزئیات را انتخاب کنید و سفارش را در واتساپ بفرستید. موجودی، قیمت و نحوه تحویل مستقیماً تأیید می‌شود.',
      chooseProduct: 'انتخاب محصول', choose: 'انتخاب کنید', quantity: 'تعداد', size: 'اندازه / گزینه', sizeHint: 'مثلاً ۱ کیلو، ۸ عدد',
      delivery: 'ارسال یا تحویل حضوری', optDelivery: 'ارسال', optPickup: 'تحویل حضوری', date: 'تاریخ موردنظر',
      name: 'نام شما', namePh: 'نام و نام خانوادگی', phone: 'شماره تلفن', phonePh: '+964 …', notes: 'پیام / توضیحات', notesPh: 'نوشته روی کیک، حساسیت غذایی، آدرس…',
      whatsapp: 'سفارش از طریق واتساپ',
      errProduct: 'لطفاً یک محصول انتخاب کنید.', errName: 'لطفاً نام خود را وارد کنید.', errPhone: 'لطفاً شماره تلفن معتبر وارد کنید.', errQty: 'تعداد باید بین ۱ تا ۹۹ باشد.', errDate: 'لطفاً امروز یا تاریخی بعد از آن را انتخاب کنید.',
      opened: 'واتساپ با متن سفارش شما باز می‌شود. فقط دکمه ارسال را بزنید.',
      copied: 'متن سفارش کپی شد. سفارش آنلاین به‌زودی فعال می‌شود — لطفاً آن را در واتساپ یا اینستاگرام برای ما بفرستید.',
      notReady: 'سفارش آنلاین به‌زودی فعال می‌شود. جزئیات سفارش شما:',
      msgTitle: 'اورنینا — سفارش جدید', msgProduct: 'محصول', msgQty: 'تعداد', msgSize: 'اندازه / گزینه', msgDelivery: 'ارسال / تحویل', msgDate: 'تاریخ موردنظر', msgName: 'نام', msgPhone: 'تلفن', msgNotes: 'توضیحات',
      moments: 'برای لحظه‌هایی که اهمیت دارند', contact: 'تماس', contactTitle: 'بیایید چیزی به‌یادماندنی بسازیم.',
      location: 'موقعیت', phoneLabel: 'تلفن', hours: 'ساعات کاری', orderLabel: 'سفارش', orderViaForm: 'از فرم سفارش بالا استفاده کنید',
      footerTag: 'کیک و دسر دست‌ساز در کربلا.', backTop: 'بازگشت به بالا ↑'
    },
    ar: {
      skip: 'انتقل إلى المنتجات', menuToggle: 'القائمة',
      navStory: 'قصتنا', navCreations: 'منتجاتنا', navMenu: 'القائمة', navOrder: 'الطلب', navContact: 'اتصل بنا', orderNow: 'اطلب الآن',
      heroTitle: 'أكثر من مجرد حلويات.', heroSub: 'صُنعت لتبقى في الذاكرة.', discover: 'اكتشف منتجاتنا',
      phase0: 'البداية', phase1: 'الحِرفة', phase2: 'الإبداع', phase3: 'توقيع أورنينا', scroll: 'مرّر لتبدأ الحكاية',
      signatureEyebrow: 'توقيع أورنينا', signature: 'صُنعت لتبقى في الذاكرة.',
      signatureIngredients: ['فانيلا', 'كيك إسفنجي', 'كريمة', 'فراولة'],
      handcrafted: 'مصنوع يدوياً في كربلاء', creationsTitle: 'حلويات جميلة، مصنوعة بعناية.',
      creationsIntro: 'كيكات وحلويات يدوية للحظات الهادئة والمناسبات التي لا تُنسى.',
      ingredients: 'المكونات', options: 'الحجم / الخيارات', customRequest: 'حسب الطلب · نرحّب بالطلبات الخاصة',
      price: 'السعر', priceRequest: 'السعر عند الطلب', priceFrom: 'ابتداءً من', orderProduct: 'اطلب هذا المنتج ←',
      photoSoon: 'الصور قريباً',
      ourStory: 'قصتنا', storyTitle: 'من مكونات بسيطة. للحظات مميزة.',
      storyBody: 'أورنينا مخبز حرفي حديث يقوم على متعة صنع الأشياء ببطء وعناية وباليد. حكايتنا تُروى من خلال المكونات والحِرفة واللحظات التي تصبح فيها كل قطعة جزءاً من ذكرى.',
      menuEyebrow: 'القائمة', menuTitle: 'مجموعة منتقاة بعناية.',
      menuIntro: 'كل قطعة تُصنع حسب الطلب. يتم تأكيد السعر والتوفر بشكل شخصي.',
      yourOrder: 'طلبك', orderTitle: 'مصنوع للحظتك.',
      orderIntro: 'اختر التفاصيل وأرسل طلبك عبر واتساب. سيتم تأكيد التوفر والسعر والتوصيل بشكل شخصي.',
      chooseProduct: 'اختر المنتج', choose: 'اختر', quantity: 'الكمية', size: 'الحجم / الخيار', sizeHint: 'مثلاً ١ كغ، ٨ قطع',
      delivery: 'توصيل أو استلام', optDelivery: 'توصيل', optPickup: 'استلام من المحل', date: 'التاريخ المفضل',
      name: 'اسمك', namePh: 'الاسم الكامل', phone: 'رقم الهاتف', phonePh: '+964 …', notes: 'رسالة / ملاحظات', notesPh: 'الكتابة على الكيك، الحساسية، عنوان التوصيل…',
      whatsapp: 'اطلب عبر واتساب',
      errProduct: 'يرجى اختيار منتج.', errName: 'يرجى إدخال اسمك.', errPhone: 'يرجى إدخال رقم هاتف صحيح.', errQty: 'يجب أن تكون الكمية بين ١ و٩٩.', errDate: 'يرجى اختيار تاريخ اليوم أو ما بعده.',
      opened: 'يتم فتح واتساب مع طلبك. فقط اضغط إرسال.',
      copied: 'تم نسخ نص الطلب. الطلب عبر الإنترنت سيتوفر قريباً — يرجى إرساله إلينا عبر واتساب أو إنستغرام.',
      notReady: 'الطلب عبر الإنترنت سيتوفر قريباً. تفاصيل طلبك:',
      msgTitle: 'أورنينا — طلب جديد', msgProduct: 'المنتج', msgQty: 'الكمية', msgSize: 'الحجم / الخيار', msgDelivery: 'توصيل / استلام', msgDate: 'التاريخ المفضل', msgName: 'الاسم', msgPhone: 'الهاتف', msgNotes: 'ملاحظات',
      moments: 'للحظات التي تعني الكثير', contact: 'اتصل بنا', contactTitle: 'لنصنع شيئاً لا يُنسى.',
      location: 'الموقع', phoneLabel: 'الهاتف', hours: 'ساعات العمل', orderLabel: 'الطلبات', orderViaForm: 'استخدم نموذج الطلب أعلاه',
      footerTag: 'كيكات وحلويات مصنوعة يدوياً في كربلاء.', backTop: 'العودة للأعلى ↑'
    }
  };

  /* ---------- helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(n, lang) { try { return new Intl.NumberFormat(lang === 'en' ? 'en-US' : lang === 'fa' ? 'fa-IR' : 'ar-IQ').format(n); } catch (e) { return String(n); } }
  function pick(obj, lang) { return obj ? (obj[lang] || obj.en || '') : ''; }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var waNumber = String(BIZ.whatsapp || '').replace(/\D/g, '');

  /* ---------- language ---------- */
  function initialLang() {
    var saved = store.get('urnina-lang');
    if (saved && copy[saved]) return saved;
    var prefs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (copy[code]) return code;
    }
    return copy[CFG.defaultLanguage] ? CFG.defaultLanguage : 'ar';
  }
  var lang = initialLang();

  function priceText(p, L) {
    var t = copy[L];
    return p.price ? t.priceFrom + ' ' + num(p.price, L) + ' ' + pick(BIZ.currency, L) : t.priceRequest;
  }

  /* ---------- rendering ---------- */
  function renderProducts() {
    var t = copy[lang];
    $('#productList').innerHTML = PRODUCTS.map(function (p, i) {
      var d = p[lang] || p.en;
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(d.name) + '" loading="lazy" decoding="async">'
        : '<span class="ph-mark" aria-hidden="true">' + esc((p.en.name || 'U').charAt(0)) + '</span><span class="ph-note">' + esc(t.photoSoon) + '</span>';
      return '<article class="product-card reveal" id="p-' + esc(p.id) + '">' +
        '<div class="product-image' + (p.image ? '' : ' is-placeholder tone-' + esc(p.tone || 'cream')) + '"' + (p.image && p.ratio ? ' style="aspect-ratio:' + esc(p.ratio) + '"' : '') + '>' + media + '</div>' +
        '<div class="product-copy"><span class="count">' + pad2(i + 1) + '</span>' +
        '<span class="eyebrow">' + esc(d.tag) + '</span><h3>' + esc(d.name) + '</h3><p>' + esc(d.desc) + '</p>' +
        '<dl><dt>' + esc(t.ingredients) + '</dt><dd>' + esc(d.ingredients) + '</dd>' +
        '<dt>' + esc(t.options) + '</dt><dd>' + esc(t.customRequest) + '</dd>' +
        '<dt>' + esc(t.price) + '</dt><dd>' + esc(priceText(p, lang)) + '</dd></dl>' +
        '<a href="#order" class="text-link" data-product="' + esc(p.id) + '">' + esc(t.orderProduct) + '</a></div></article>';
    }).join('');
  }

  function renderMenu() {
    $('#menuList').innerHTML = PRODUCTS.map(function (p, i) {
      var d = p[lang] || p.en;
      return '<a class="menu-row" href="#p-' + esc(p.id) + '"><span>' + pad2(i + 1) + '</span><strong>' + esc(d.name) + '</strong><p>' + esc(d.desc) + '</p><b>' + esc(priceText(p, lang)) + '</b></a>';
    }).join('');
  }

  function renderProductOptions() {
    var sel = $('#product'), current = sel.value;
    sel.innerHTML = '<option value="">' + esc(copy[lang].choose) + '</option>' + PRODUCTS.map(function (p) {
      return '<option value="' + esc(p.id) + '">' + esc((p[lang] || p.en).name) + '</option>';
    }).join('');
    sel.value = current;
  }

  function renderContact() {
    var t = copy[lang], items = [];
    items.push('<div><span>' + esc(t.location) + '</span><b>' + esc(pick(BIZ.location, lang)) + '</b></div>');
    if (waNumber) items.push('<div><span>WHATSAPP</span><a class="ltr" href="https://wa.me/' + waNumber + '" target="_blank" rel="noopener">+' + esc(waNumber) + '</a></div>');
    if (BIZ.phone) items.push('<div><span>' + esc(t.phoneLabel) + '</span><a class="ltr" href="tel:' + esc(String(BIZ.phone).replace(/[^\d+]/g, '')) + '">' + esc(BIZ.phone) + '</a></div>');
    if (BIZ.instagram) { var ig = String(BIZ.instagram).replace(/^@/, ''); items.push('<div><span>INSTAGRAM</span><a class="ltr" href="https://instagram.com/' + esc(ig) + '" target="_blank" rel="noopener">@' + esc(ig) + '</a></div>'); }
    var hours = pick(BIZ.hours, lang);
    if (hours) items.push('<div><span>' + esc(t.hours) + '</span><b>' + esc(hours) + '</b></div>');
    if (!waNumber && !BIZ.phone && !BIZ.instagram) items.push('<div><span>' + esc(t.orderLabel) + '</span><a href="#order">' + esc(t.orderViaForm) + '</a></div>');
    $('#contactGrid').innerHTML = items.join('');
  }

  function applyLang(next) {
    if (!copy[next]) next = 'en';
    lang = next;
    var t = copy[lang], rtl = lang !== 'en', root = document.documentElement;
    root.lang = lang; root.dir = rtl ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(function (el) { var v = t[el.getAttribute('data-i18n')]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-placeholder]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-placeholder')]; if (v) el.placeholder = v; });
    $$('[data-i18n-list]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-list')] || []; el.innerHTML = v.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join(''); });
    $$('.lang-switch button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    document.title = (lang === 'en' ? 'URNINA Bakery' : lang === 'fa' ? 'اورنینا' : 'أورنينا') + ' — ' + t.heroTitle.replace(/\.$/, '');
    renderProducts(); renderMenu(); renderProductOptions(); renderContact();
    observeReveals();
    store.set('urnina-lang', lang);
  }

  /* ---------- header & mobile menu ---------- */
  var header = $('.site-header'), nav = $('#primaryNav'), toggle = $('.menu-toggle');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  var waFloat = $('#waFloat');
  function updateHeader() {
    var past = window.scrollY > window.innerHeight * 0.6;
    header.classList.toggle('is-solid', past);
    var heroEnd = $('#hero').offsetHeight - window.innerHeight * 0.4;
    waFloat.classList.toggle('is-tucked', window.scrollY < heroEnd);
  }

  $$('.lang-switch button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });

  /* ---------- reveal on scroll ---------- */
  var revealObserver = ('IntersectionObserver' in window && !reduceMotion)
    ? new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); revealObserver.unobserve(en.target); } }); }, { rootMargin: '0px 0px -10% 0px' })
    : null;
  function observeReveals() {
    $$('.reveal:not(.is-in)').forEach(function (el) { if (revealObserver) revealObserver.observe(el); else el.classList.add('is-in'); });
  }

  /* ---------- order form ---------- */
  var form = $('#orderForm'), status = $('#formStatus');
  var dateInput = $('#date');
  (function setMinDate() { var d = new Date(); dateInput.min = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); })();

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-product]');
    if (a) { $('#product').value = a.getAttribute('data-product'); clearError($('#product')); }
  });

  function clearError(el) { el.classList.remove('is-invalid'); el.removeAttribute('aria-invalid'); }
  $$('input, select, textarea', form).forEach(function (el) { el.addEventListener('input', function () { clearError(el); }); });

  function fail(el, msg) {
    el.classList.add('is-invalid'); el.setAttribute('aria-invalid', 'true'); el.focus();
    status.textContent = msg; status.className = 'form-status wide is-error';
    return false;
  }
  function validate() {
    var t = copy[lang];
    var product = $('#product'), qty = $('#quantity'), name = $('#name'), phone = $('#phone');
    if (!product.value) return fail(product, t.errProduct);
    var q = parseInt(qty.value, 10);
    if (!(q >= 1 && q <= 99)) return fail(qty, t.errQty);
    if (dateInput.value && dateInput.value < dateInput.min) return fail(dateInput, t.errDate);
    if (!name.value.trim()) return fail(name, t.errName);
    var digits = phone.value.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) return fail(phone, t.errPhone);
    return true;
  }
  function buildMessage() {
    var t = copy[lang], v = function (id) { return $(id).value.trim(); };
    var p = PRODUCTS.filter(function (x) { return x.id === v('#product'); })[0];
    var delivery = v('#delivery') ? t[v('#delivery') === 'delivery' ? 'optDelivery' : 'optPickup'] : '';
    var lines = [t.msgTitle, '',
      t.msgProduct + ': ' + (p ? (p[lang] || p.en).name : v('#product')),
      t.msgQty + ': ' + (v('#quantity') || '1')];
    if (v('#size')) lines.push(t.msgSize + ': ' + v('#size'));
    if (delivery) lines.push(t.msgDelivery + ': ' + delivery);
    if (v('#date')) lines.push(t.msgDate + ': ' + v('#date'));
    lines.push(t.msgName + ': ' + v('#name'), t.msgPhone + ': ' + v('#phone'));
    if (v('#notes')) lines.push(t.msgNotes + ': ' + v('#notes'));
    return lines.join('\n');
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = ''; status.className = 'form-status wide';
    if (!validate()) return;
    var t = copy[lang], msg = buildMessage();
    if (waNumber) {
      window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      status.textContent = t.opened;
      return;
    }
    var done = function () { status.textContent = t.copied; };
    var show = function () { status.textContent = t.notReady + '\n' + msg; status.style.whiteSpace = 'pre-line'; };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(msg).then(done, show); else show();
  });

  /* ---------- floating WhatsApp ---------- */
  if (waNumber) { waFloat.href = 'https://wa.me/' + waNumber; waFloat.hidden = false; }

  /* ---------- hero: scroll-driven frame sequence ---------- */
  var hero = $('#hero'), canvas = $('.hero-canvas'), ctx = canvas.getContext('2d');
  var heroCopy = $('.hero-copy'), fill = $('.progress-fill'), phases = $$('.phase');
  var seq = null, frames = [], lastDrawn = -1, ticking = false;

  function chooseSequence() {
    var H = CFG.hero || {};
    var portrait = window.innerHeight > window.innerWidth;
    var s = (portrait && H.mobile && H.mobile.frames > 0) ? H.mobile : (H.desktop && H.desktop.frames > 0 ? H.desktop : (H.mobile && H.mobile.frames > 0 ? H.mobile : null));
    return s;
  }
  function frameUrl(s, i) { var n = String(i + 1); while (n.length < (s.digits || 4)) n = '0' + n; return s.path + n + (s.ext || '.webp'); }
  function loadSequence(s) {
    seq = s; frames = new Array(s.frames); lastDrawn = -1;
    // load in a spread order so a rough version of the whole animation is available early
    var order = [], step = 16;
    while (step >= 1) { for (var i = 0; i < s.frames; i += step) if (order.indexOf(i) < 0) order.push(i); step = step / 2 | 0; }
    var idx = 0, inflight = 0, MAX = 6;
    (function pump() {
      while (inflight < MAX && idx < order.length) {
        (function (k) {
          var img = new Image(); inflight++;
          img.decoding = 'async';
          img.onload = function () { frames[k] = img; inflight--; if (k === 0 || lastDrawn < 0) requestDraw(); pump(); };
          img.onerror = function () { inflight--; pump(); };
          img.src = frameUrl(s, k);
        })(order[idx++]);
      }
    })();
  }
  function nearestLoaded(i) {
    if (frames[i]) return i;
    for (var d = 1; d < frames.length; d++) { if (frames[i - d]) return i - d; if (frames[i + d]) return i + d; }
    return -1;
  }
  function sizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr); canvas.height = Math.round(canvas.clientHeight * dpr);
    lastDrawn = -1;
  }
  function drawCover(img) {
    var cw = canvas.width, ch = canvas.height, ir = img.naturalWidth / img.naturalHeight, cr = cw / ch, w, h;
    if (ir > cr) { h = ch; w = h * ir; } else { w = cw; h = w / ir; }
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }
  function heroProgress() {
    var r = hero.getBoundingClientRect(), dist = hero.offsetHeight - window.innerHeight;
    return dist > 0 ? Math.max(0, Math.min(1, -r.top / dist)) : 0;
  }
  function draw() {
    ticking = false;
    updateHeader();
    if (!seq) return;
    var p = reduceMotion ? 0 : heroProgress();
    fill.style.height = (p * 100) + '%';
    var active = Math.min(3, Math.floor(p * 4));
    phases.forEach(function (el, i) { el.classList.toggle('is-active', i === active); });
    heroCopy.style.opacity = String(Math.max(0, 1 - p * 5));
    var target = Math.round(p * (seq.frames - 1)), i = nearestLoaded(target);
    if (i >= 0 && i !== lastDrawn) { drawCover(frames[i]); lastDrawn = i; }
  }
  function requestDraw() { if (!ticking) { ticking = true; window.requestAnimationFrame(draw); } }

  function initHero() {
    var s = chooseSequence();
    if (!s) { hero.classList.add('is-static'); hero.classList.remove('has-frames'); seq = null; return; }
    hero.classList.remove('is-static'); hero.classList.add('has-frames');
    if (reduceMotion) hero.classList.add('is-static');
    sizeCanvas();
    if (!seq || seq.path !== s.path) loadSequence(s);
    requestDraw();
  }

  window.addEventListener('scroll', requestDraw, { passive: true });
  var resizeTimer;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(function () { initHero(); requestDraw(); }, 150); });

  /* ---------- start ---------- */
  var year = $('#year'); if (year) year.textContent = new Date().getFullYear();
  applyLang(lang);
  initHero();
  updateHeader();
  window.URNINA = { applyLang: applyLang }; // handy for testing
})();
