/* Urnina — interactions & motion */
(function () {
  'use strict';
  var CFG = window.URNINA_CONFIG || {};
  var BIZ = CFG.business || {};
  var PRODUCTS = window.URNINA_PRODUCTS || [];

  /* ---------- Words on the page ---------- */
  var copy = {
    ar: {
      brand: 'أورنينا', skip: 'انتقل إلى الحلويات', menuToggle: 'القائمة',
      navSweets: 'المجموعة', navHow: 'طريقة الطلب', navOrder: 'الطلب', navContact: 'تواصل معنا', orderNow: 'اطلب',
      heroTitle: 'أكثر من مجرد حلويات.', scroll: 'مرّر',
      ch1Title: 'مكونات بسيطة', ch1Body: 'زبدة جيدة، وكريمة طازجة، وفواكه ناضجة، ومكسرات.',
      ch2Title: 'مصنوعة يدوياً', ch2Body: 'كل كريب يُطوى وكل كيكة تُرتّب طبقاتها باليد، بكميات صغيرة.',
      ch3Title: 'لمسة أخيرة بعناية', ch3Body: 'تُزيَّن وتُرشّ وتُربط، جاهزة لتُهدى.',
      statement: 'كل حلوى من أورنينا تُصنع يدوياً في كربلاء، بكميات صغيرة، وفقط بعد أن تطلبها. لا شيء ينتظر على الرف.',
      heroOrder: 'اطلب عبر واتساب',
      sweetsTitle: 'المجموعة', sweetsIntro: 'تُصنع حسب الطلب وبكميات صغيرة. اختر حلواك وسنؤكد لك السعر والموعد عبر واتساب.',
      priceRequest: 'السعر عند الطلب', priceFrom: 'ابتداءً من', orderThis: 'اطلبها', photoSoon: 'الصورة قريباً',
      howTitle: 'طريقة الطلب',
      step1Title: 'اختر حلوياتك', step1Body: 'املأ النموذج القصير أدناه: ماذا تريد، وكم، وفي أي يوم.',
      step2Title: 'أرسله عبر واتساب', step2Body: 'النموذج يكتب الرسالة نيابةً عنك. فقط اضغط إرسال.',
      step3Title: 'نؤكد ونخبز', step3Body: 'نرد عليك بالسعر والموعد، ثم نخبزها طازجة للاستلام أو التوصيل.',
      orderTitle: 'طلبك', orderIntro: 'الحقول المعلّمة بنجمة فقط مطلوبة. الباقي يساعدنا على تحضيرها كما تحب.',
      chooseProduct: 'الحلوى', choose: 'اختر', quantity: 'الكمية', size: 'الحجم أو الخيار', sizeHint: 'مثلاً ١ كغ، ٨ قطع', date: 'اليوم المطلوب',
      delivery: 'استلام أم توصيل', optPickup: 'سأستلمها بنفسي', optDelivery: 'وصّلوها لي',
      name: 'اسمك', phone: 'رقم الهاتف', notes: 'ملاحظات أخرى؟', notesPh: 'الكتابة على الكيك، الحساسية، عنوان التوصيل…',
      whatsapp: 'أرسل الطلب عبر واتساب',
      errProduct: 'اختر الحلوى التي تريدها.', errQty: 'الكمية يجب أن تكون بين ١ و٩٩.', errDate: 'اختر اليوم أو تاريخاً لاحقاً.', errName: 'اكتب اسمك حتى نعرف لمن الطلب.', errPhone: 'اكتب رقم هاتف صحيحاً حتى نتمكن من الرد عليك.',
      opened: 'تم فتح واتساب ورسالة طلبك جاهزة. اضغط إرسال هناك.',
      copied: 'تم نسخ نص طلبك. الطلب عبر واتساب سيتوفر قريباً؛ أرسل النص إلينا عبر إنستغرام أو اتصل بنا.',
      notReady: 'الطلب عبر واتساب سيتوفر قريباً. هذا نص طلبك:',
      msgTitle: 'طلب جديد — أورنينا', msgProduct: 'الحلوى', msgQty: 'الكمية', msgSize: 'الحجم / الخيار', msgDelivery: 'الاستلام', msgDate: 'اليوم المطلوب', msgName: 'الاسم', msgPhone: 'الهاتف', msgNotes: 'ملاحظات',
      msgPickup: 'استلام', msgDeliver: 'توصيل',
      contactTitle: 'تواصل معنا', location: 'المكان', phoneLabel: 'الهاتف', hours: 'ساعات العمل', orderLabel: 'الطلبات', orderViaForm: 'عبر نموذج الطلب أعلاه',
      footerTag: 'حلويات يدوية من كربلاء.', waFloat: 'راسلنا على واتساب'
    },
    fa: {
      brand: 'اورنینا', skip: 'رفتن به شیرینی‌ها', menuToggle: 'منو',
      navSweets: 'مجموعه', navHow: 'روش سفارش', navOrder: 'سفارش', navContact: 'تماس', orderNow: 'سفارش',
      heroTitle: 'فراتر از شیرینی.', scroll: 'اسکرول کنید',
      ch1Title: 'مواد ساده', ch1Body: 'کره‌ی خوب، خامه‌ی تازه، میوه‌ی رسیده و مغزها.',
      ch2Title: 'دست‌ساز', ch2Body: 'هر کرپ با دست تا می‌شود و هر کیک با دست لایه‌چینی می‌شود، در تعداد کم.',
      ch3Title: 'پایان با دقت', ch3Body: 'تزیین‌شده، پودرزده و گره‌خورده؛ آماده‌ی هدیه دادن.',
      statement: 'هر شیرینی اورنینا در کربلا، با دست و در تعداد کم، و فقط بعد از سفارش شما پخته می‌شود. هیچ چیزی روی قفسه منتظر نمی‌ماند.',
      heroOrder: 'سفارش در واتساپ',
      sweetsTitle: 'مجموعه', sweetsIntro: 'به سفارش و در تعداد کم پخته می‌شود. شیرینی‌تان را انتخاب کنید؛ قیمت و زمان را در واتساپ تأیید می‌کنیم.',
      priceRequest: 'قیمت هنگام سفارش', priceFrom: 'از', orderThis: 'سفارش', photoSoon: 'عکس به‌زودی',
      howTitle: 'سفارش چطور انجام می‌شود',
      step1Title: 'شیرینی را انتخاب کنید', step1Body: 'فرم کوتاه پایین را پر کنید: چه چیزی، چند تا، و برای چه روزی.',
      step2Title: 'در واتساپ بفرستید', step2Body: 'فرم پیام را برایتان می‌نویسد. فقط دکمه ارسال را بزنید.',
      step3Title: 'تأیید می‌کنیم و می‌پزیم', step3Body: 'قیمت و زمان را اعلام می‌کنیم و بعد برای تحویل یا ارسال، تازه می‌پزیم.',
      orderTitle: 'سفارش شما', orderIntro: 'فقط فیلدهای ستاره‌دار لازم است. بقیه کمک می‌کند دقیقاً همان چیزی را بپزیم که می‌خواهید.',
      chooseProduct: 'شیرینی', choose: 'انتخاب کنید', quantity: 'تعداد', size: 'اندازه یا گزینه', sizeHint: 'مثلاً ۱ کیلو، ۸ عدد', date: 'روز موردنیاز',
      delivery: 'تحویل یا ارسال', optPickup: 'خودم تحویل می‌گیرم', optDelivery: 'برایم ارسال کنید',
      name: 'نام شما', phone: 'شماره تلفن', notes: 'نکته دیگری هست؟', notesPh: 'نوشته روی کیک، حساسیت غذایی، آدرس ارسال…',
      whatsapp: 'ارسال سفارش در واتساپ',
      errProduct: 'شیرینی موردنظر را انتخاب کنید.', errQty: 'تعداد باید بین ۱ تا ۹۹ باشد.', errDate: 'امروز یا روزی بعد از آن را انتخاب کنید.', errName: 'نامتان را بنویسید تا بدانیم سفارش برای کیست.', errPhone: 'یک شماره تلفن درست بنویسید تا بتوانیم جواب بدهیم.',
      opened: 'واتساپ باز شد و پیام سفارشتان آماده است. آنجا ارسال را بزنید.',
      copied: 'متن سفارش کپی شد. سفارش در واتساپ به‌زودی فعال می‌شود؛ متن را در اینستاگرام برایمان بفرستید یا تماس بگیرید.',
      notReady: 'سفارش در واتساپ به‌زودی فعال می‌شود. متن سفارش شما:',
      msgTitle: 'سفارش جدید — اورنینا', msgProduct: 'شیرینی', msgQty: 'تعداد', msgSize: 'اندازه / گزینه', msgDelivery: 'تحویل', msgDate: 'روز موردنیاز', msgName: 'نام', msgPhone: 'تلفن', msgNotes: 'توضیحات',
      msgPickup: 'تحویل حضوری', msgDeliver: 'ارسال',
      contactTitle: 'تماس با ما', location: 'مکان', phoneLabel: 'تلفن', hours: 'ساعات کاری', orderLabel: 'سفارش', orderViaForm: 'از فرم سفارش بالا',
      footerTag: 'شیرینی دست‌ساز از کربلا.', waFloat: 'پیام در واتساپ'
    },
    en: {
      brand: 'Urnina', skip: 'Skip to the sweets', menuToggle: 'Menu',
      navSweets: 'The collection', navHow: 'How to order', navOrder: 'Order', navContact: 'Contact', orderNow: 'Order',
      heroTitle: 'More than sweets.', scroll: 'Scroll',
      ch1Title: 'Simple ingredients', ch1Body: 'Good butter, fresh cream, ripe fruit and nuts.',
      ch2Title: 'Made by hand', ch2Body: 'Every crepe folded and every cake layered by hand, in small batches.',
      ch3Title: 'Finished with care', ch3Body: 'Glazed, dusted and tied, ready to be given.',
      statement: 'Every Urnina sweet is made by hand in Karbala, in small batches, and only after you order it. Nothing waits on a shelf.',
      heroOrder: 'Order on WhatsApp',
      sweetsTitle: 'The collection', sweetsIntro: 'Made to order in small batches. Choose a sweet and we’ll confirm price and timing on WhatsApp.',
      priceRequest: 'Price on request', priceFrom: 'From', orderThis: 'Order this', photoSoon: 'Photo coming soon',
      howTitle: 'How ordering works',
      step1Title: 'Choose your sweets', step1Body: 'Fill in the short form below: what, how many, and the day you need it.',
      step2Title: 'Send it on WhatsApp', step2Body: 'The form writes the message for you. Just press send.',
      step3Title: 'We confirm and bake', step3Body: 'We reply with the price and timing, then bake it fresh for pickup or delivery.',
      orderTitle: 'Your order', orderIntro: 'Only the starred fields are needed. Everything else helps us get it just right.',
      chooseProduct: 'Sweet', choose: 'Choose', quantity: 'How many', size: 'Size or option', sizeHint: 'e.g. 1 kg, 8 pieces', date: 'Day you need it',
      delivery: 'Pickup or delivery', optPickup: 'I’ll pick it up', optDelivery: 'Deliver it to me',
      name: 'Your name', phone: 'Phone number', notes: 'Anything else?', notesPh: 'Writing on the cake, allergies, delivery address…',
      whatsapp: 'Send order on WhatsApp',
      errProduct: 'Choose the sweet you’d like.', errQty: 'How many should be between 1 and 99.', errDate: 'Choose today or a later day.', errName: 'Add your name so we know who the order is for.', errPhone: 'Add a valid phone number so we can reply.',
      opened: 'WhatsApp is open with your order written. Press send there.',
      copied: 'Your order was copied. WhatsApp ordering opens soon; send it to us on Instagram or give us a call.',
      notReady: 'WhatsApp ordering opens soon. Here is your order:',
      msgTitle: 'New order — Urnina', msgProduct: 'Sweet', msgQty: 'How many', msgSize: 'Size / option', msgDelivery: 'Pickup / delivery', msgDate: 'Day needed', msgName: 'Name', msgPhone: 'Phone', msgNotes: 'Notes',
      msgPickup: 'Pickup', msgDeliver: 'Delivery',
      contactTitle: 'Find us', location: 'Where', phoneLabel: 'Phone', hours: 'Opening hours', orderLabel: 'Orders', orderViaForm: 'Through the order form above',
      footerTag: 'Handmade sweets from Karbala.', waFloat: 'Message us on WhatsApp'
    }
  };

  /* Gold line drawings for sweets without photos */
  var ART = {
    cake: '<svg viewBox="0 0 120 100"><path d="M10 82h100M50 82l-4 12h28l-4-12"/><path d="M22 82V50a6 6 0 0 1 6-6h64a6 6 0 0 1 6 6v32"/><path d="M22 63h76"/><path d="M22 51c4 6 8 6 12 0s8-6 12 0 8 6 12 0 8-6 12 0 8 6 12 0 8-6 12 0"/><circle cx="60" cy="35" r="5"/><path d="M61 30c1-6 4-9 9-10"/></svg>',
    crepe: '<svg viewBox="0 0 120 100"><path d="M14 88h92"/><path d="M38 86c-9-14-5-30 8-36h28c13 6 17 22 8 36z"/><path d="M44 50h32"/><path d="M60 50c-6-9-17-7-13 1M60 50c6-9 17-7 13 1"/><path d="M47 50l-8-18M54 50l-3-22M66 50l3-22M73 50l8-18"/></svg>',
    tart: '<svg viewBox="0 0 120 100"><path d="M10 88h100"/><path d="M24 70l7 16h58l7-16z"/><path d="M36 72l3 14M48 72l2 14M60 72v14M72 72l-2 14M84 72l-3 14"/><path d="M28 70c6-17 58-17 64 0"/><circle cx="52" cy="60" r="2"/><circle cx="64" cy="57" r="2"/><circle cx="73" cy="62" r="1.6"/><circle cx="58" cy="64" r="1.4"/><circle cx="45" cy="65" r="1.3"/></svg>'
  };

  /* Larger drawings for the three hero chapters */
  var CHAPTER_ART = [
    // 1 — simple ingredients: a strawberry and a walnut
    '<svg viewBox="0 0 120 100"><path d="M46 30c-12 0-19 9-17 21 2 12 10 22 17 26 7-4 15-14 17-26 2-12-5-21-17-21z"/><path d="M37 30c3-5 6-7 9-7s6 2 9 7M46 23v-8M46 15c3-2 6-2 9 0"/><circle cx="40" cy="42" r=".8"/><circle cx="51" cy="40" r=".8"/><circle cx="45" cy="52" r=".8"/><circle cx="54" cy="52" r=".8"/><circle cx="39" cy="57" r=".8"/><circle cx="47" cy="64" r=".8"/><path d="M80 58c-9 0-14 6-14 13s5 13 14 13 14-6 14-13-5-13-14-13z"/><path d="M80 58v26M73 64c3 2 3 6 0 8s-3 6 0 8M87 64c-3 2-3 6 0 8s3 6 0 8"/><path d="M14 92h92"/></svg>',
    ART.crepe,
    ART.cake
  ];

  /* ---------- Helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pick(obj, L) { return obj ? (obj[L] || obj.en || '') : ''; }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }
  function num(n, L) { try { return new Intl.NumberFormat(L === 'en' ? 'en-US' : L === 'fa' ? 'fa-IR' : 'ar-IQ').format(n); } catch (e) { return String(n); } }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function ease(x) { return 1 - Math.pow(1 - x, 3); }
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var waNumber = String(BIZ.whatsapp || '').replace(/\D/g, '');
  var root = document.documentElement;

  /* ---------- Language ---------- */
  function initialLang() {
    var saved = store.get('urnina-lang');
    if (saved && copy[saved]) return saved;
    var prefs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < prefs.length; i++) { var c = String(prefs[i]).slice(0, 2).toLowerCase(); if (copy[c]) return c; }
    return copy[CFG.defaultLanguage] ? CFG.defaultLanguage : 'ar';
  }
  var lang = initialLang();
  function priceText(p, L) { var t = copy[L]; return p.price ? t.priceFrom + ' ' + num(p.price, L) + ' ' + pick(BIZ.currency, L) : t.priceRequest; }

  /* ---------- Rendering ---------- */
  function renderProducts() {
    var t = copy[lang];
    $('#productList').innerHTML = PRODUCTS.map(function (p) {
      var d = p[lang] || p.en;
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(d.name) + '" loading="lazy" decoding="async">'
        : '<div class="sweet-art" aria-hidden="true">' + (ART[p.art] || ART.cake) + '<small>' + esc(t.photoSoon) + '</small></div>';
      return '<li class="sweet" id="p-' + esc(p.id) + '">' +
        '<figure class="sweet-frame" style="margin:0">' + media + '</figure>' +
        '<h3>' + esc(d.name) + '</h3><p class="sweet-desc">' + esc(d.desc) + '</p>' +
        '<div class="sweet-foot"><span class="sweet-price">' + esc(priceText(p, lang)) + '</span>' +
        '<a class="btn btn-gold btn-small" href="#order" data-product="' + esc(p.id) + '" aria-label="' + esc(t.orderThis + ' — ' + d.name) + '">' + esc(t.orderThis) + '</a></div></li>';
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
    function row(label, value) { items.push('<div><dt>' + esc(label) + '</dt><dd>' + value + '</dd></div>'); }
    row(t.location, esc(pick(BIZ.location, lang)));
    if (waNumber) row('WhatsApp', '<a class="ltr" href="https://wa.me/' + waNumber + '" target="_blank" rel="noopener">+' + esc(waNumber) + '</a>');
    if (BIZ.phone) row(t.phoneLabel, '<a class="ltr" href="tel:' + esc(String(BIZ.phone).replace(/[^\d+]/g, '')) + '">' + esc(BIZ.phone) + '</a>');
    if (BIZ.instagram) { var ig = String(BIZ.instagram).replace(/^@/, ''); row('Instagram', '<a class="ltr" href="https://instagram.com/' + esc(ig) + '" target="_blank" rel="noopener">@' + esc(ig) + '</a>'); }
    var hours = pick(BIZ.hours, lang);
    if (hours) row(t.hours, esc(hours));
    if (!waNumber && !BIZ.phone && !BIZ.instagram) row(t.orderLabel, '<a href="#order">' + esc(t.orderViaForm) + '</a>');
    $('#contactGrid').innerHTML = items.join('');
  }
  /* Statement words become individual spans so they can light up in turn */
  var words = [];
  function renderStatement() {
    var el = $('#statement');
    el.innerHTML = copy[lang].statement.split(/\s+/).map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ');
    words = $$('.w', el);
  }

  function applyLang(next) {
    if (!copy[next]) next = 'ar';
    lang = next;
    var t = copy[lang];
    root.lang = lang; root.dir = lang === 'en' ? 'ltr' : 'rtl';
    $$('[data-i18n]').forEach(function (el) { var v = t[el.getAttribute('data-i18n')]; if (typeof v === 'string' && el.id !== 'statement') el.textContent = v; });
    $$('[data-i18n-placeholder]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-placeholder')]; if (v) el.placeholder = v; });
    $$('[data-i18n-aria]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-aria')]; if (v) el.setAttribute('aria-label', v); });
    $$('.lang-switch button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    document.title = t.brand + ' — ' + t.heroTitle.replace(/\.$/, '');
    renderProducts(); renderProductOptions(); renderContact(); renderStatement();
    store.set('urnina-lang', lang);
    layoutGallery();
    requestTick();
  }

  /* ---------- Header & mobile menu ---------- */
  var header = $('.site-header'), nav = $('#primaryNav'), toggle = $('.menu-toggle'), waFloat = $('#waFloat');
  function setMenu(open) { nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  $$('.lang-switch button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });

  /* ---------- Order form ---------- */
  var form = $('#orderForm'), status = $('#formStatus'), dateInput = $('#date');
  (function () { var d = new Date(); dateInput.min = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); })();
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-product]');
    if (a) { $('#product').value = a.getAttribute('data-product'); clearError($('#product')); }
  });
  function clearError(el) { el.classList.remove('is-invalid'); el.removeAttribute('aria-invalid'); }
  $$('input, select, textarea', form).forEach(function (el) { el.addEventListener('input', function () { clearError(el); }); });
  function fail(el, msg) { el.classList.add('is-invalid'); el.setAttribute('aria-invalid', 'true'); el.focus(); status.textContent = msg; status.className = 'form-status wide is-error'; return false; }
  function validate() {
    var t = copy[lang], q = parseInt($('#quantity').value, 10), digits = $('#phone').value.replace(/\D/g, '');
    if (!$('#product').value) return fail($('#product'), t.errProduct);
    if (!(q >= 1 && q <= 99)) return fail($('#quantity'), t.errQty);
    if (dateInput.value && dateInput.value < dateInput.min) return fail(dateInput, t.errDate);
    if (!$('#name').value.trim()) return fail($('#name'), t.errName);
    if (digits.length < 7 || digits.length > 15) return fail($('#phone'), t.errPhone);
    return true;
  }
  function buildMessage() {
    var t = copy[lang], v = function (id) { return $(id).value.trim(); };
    var p = PRODUCTS.filter(function (x) { return x.id === v('#product'); })[0];
    var how = (form.querySelector('input[name="delivery"]:checked') || {}).value;
    var lines = [t.msgTitle, '', t.msgProduct + ': ' + (p ? (p[lang] || p.en).name : v('#product')), t.msgQty + ': ' + (v('#quantity') || '1')];
    if (v('#size')) lines.push(t.msgSize + ': ' + v('#size'));
    if (how) lines.push(t.msgDelivery + ': ' + (how === 'delivery' ? t.msgDeliver : t.msgPickup));
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
      status.textContent = t.opened; status.className = 'form-status wide is-ok';
      return;
    }
    var show = function () { status.textContent = t.notReady + '\n\n' + msg; };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(msg).then(function () { status.textContent = t.copied; }, show); else show();
  });
  if (waNumber) { waFloat.href = 'https://wa.me/' + waNumber; waFloat.hidden = false; }

  /* ==========================================================
     MOTION
     ========================================================== */
  var hero = $('#hero'), heroTitle = $('.hero-title'), chapters = $$('.chapter'), railFill = $('.rail-fill'), railDots = $$('.rail-dot'), cue = $('.scroll-cue');
  var dust = $('.hero-dust'), dctx = dust.getContext('2d');
  var framesCanvas = $('.hero-frames'), fctx = framesCanvas.getContext('2d');
  var heroP = 0;

  function sectionProgress(el) {
    var dist = el.offsetHeight - window.innerHeight;
    return dist > 0 ? clamp01(-el.getBoundingClientRect().top / dist) : 0;
  }

  /* --- Gold sugar dust (stand-in until the hero animation frames arrive) --- */
  var motes = [], dustW = 0, dustH = 0, dpr = 1, dustRunning = false;
  function sizeDust() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    dustW = dust.clientWidth; dustH = dust.clientHeight;
    dust.width = Math.round(dustW * dpr); dust.height = Math.round(dustH * dpr);
    var n = Math.round(Math.min(220, (dustW * dustH) / 7000));
    motes = [];
    for (var i = 0; i < n; i++) motes.push({ x: Math.random() * dustW, y: Math.random() * dustH, z: .25 + Math.random() * .75, r: .4 + Math.random() * 1.6, s: .1 + Math.random() * .35, ph: Math.random() * Math.PI * 2 });
  }
  function drawDust(time) {
    if (!dustRunning) return;
    var t = time / 1000;
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dctx.clearRect(0, 0, dustW, dustH);
    // warm light that brightens as the story unfolds
    var g = dctx.createRadialGradient(dustW / 2, dustH * .46, 0, dustW / 2, dustH * .46, Math.max(dustW, dustH) * .55);
    g.addColorStop(0, 'rgba(201,166,107,' + (.10 + heroP * .12) + ')');
    g.addColorStop(1, 'rgba(201,166,107,0)');
    dctx.fillStyle = g; dctx.fillRect(0, 0, dustW, dustH);
    var lift = heroP * dustH * 1.2;
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.y -= m.s * m.z; m.x += Math.sin(t * .5 + m.ph) * .12 * m.z;
      if (m.y < -10) { m.y = dustH + 10; m.x = Math.random() * dustW; }
      var y = ((m.y - lift * m.z) % (dustH + 20) + dustH + 20) % (dustH + 20) - 10;
      var a = (.25 + .55 * m.z) * (.6 + .4 * Math.sin(t * 1.4 + m.ph));
      dctx.beginPath();
      dctx.fillStyle = 'rgba(231,203,148,' + a.toFixed(3) + ')';
      dctx.arc(m.x, y, m.r * m.z * 1.4, 0, Math.PI * 2);
      dctx.fill();
    }
    requestAnimationFrame(drawDust);
  }
  function setDust(on) {
    if (on && !dustRunning && !reduceMotion) { dustRunning = true; requestAnimationFrame(drawDust); }
    if (!on) dustRunning = false;
  }

  /* --- Scroll-driven frame sequence (your hero animation) --- */
  var seq = null, frames = [];
  function chooseSequence() {
    var H = CFG.hero || {}, d = H.desktop && H.desktop.frames > 0 ? H.desktop : null, m = H.mobile && H.mobile.frames > 0 ? H.mobile : null;
    return (window.innerHeight > window.innerWidth ? (m || d) : (d || m));
  }
  function frameUrl(s, i) { var n = String(i + 1); while (n.length < (s.digits || 4)) n = '0' + n; return s.path + n + (s.ext || '.webp'); }
  function loadSequence(s) {
    seq = s; frames = new Array(s.frames);
    var order = [], step = 16;
    while (step >= 1) { for (var i = 0; i < s.frames; i += step) if (order.indexOf(i) < 0) order.push(i); step = step / 2 | 0; }
    var idx = 0, inflight = 0;
    (function pump() {
      while (inflight < 6 && idx < order.length) {
        (function (k) {
          var img = new Image(); inflight++; img.decoding = 'async';
          img.onload = function () { frames[k] = img; inflight--; requestTick(); pump(); };
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
  var lastFrame = -1;
  function drawFrame(p) {
    var i = nearestLoaded(Math.round(p * (seq.frames - 1)));
    if (i < 0 || i === lastFrame) return;
    var img = frames[i], cw = framesCanvas.width, ch = framesCanvas.height, ir = img.naturalWidth / img.naturalHeight, w, h;
    if (ir > cw / ch) { h = ch; w = h * ir; } else { w = cw; h = w / ir; }
    fctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    lastFrame = i;
  }
  function sizeFrames() {
    var r = Math.min(window.devicePixelRatio || 1, 2);
    framesCanvas.width = Math.round(framesCanvas.clientWidth * r); framesCanvas.height = Math.round(framesCanvas.clientHeight * r); lastFrame = -1;
  }

  /* --- Chapter drawings: each path draws itself in when its chapter appears --- */
  var chapterArt = $('.chapter-art');
  chapterArt.innerHTML = CHAPTER_ART.join('').replace(/<(path|circle)/g, '<$1 pathLength="1"');
  var artSvgs = $$('svg', chapterArt);

  /* --- Hero story: title → three chapters --- */
  var CH = [0.2, 0.44, 0.68, 0.93];   // where chapters 1, 2, 3 begin and the story ends
  function updateHero() {
    heroP = reduceMotion ? 0 : sectionProgress(hero);
    var p = heroP;
    var out = ease(clamp01(p / CH[0]));
    heroTitle.style.opacity = String(1 - out);
    heroTitle.style.transform = 'scale(' + (1 + out * .18) + ')';
    heroTitle.style.visibility = out >= .99 ? 'hidden' : 'visible';
    var active = p < CH[0] ? 0 : p < CH[1] ? 1 : p < CH[2] ? 2 : p < CH[3] ? 3 : 0;
    chapters.forEach(function (c, i) { c.classList.toggle('is-active', i + 1 === active); });
    artSvgs.forEach(function (svg, i) { svg.classList.toggle('is-active', i + 1 === active); });
    railFill.style.height = (clamp01(p / CH[3]) * 100) + '%';
    railDots.forEach(function (d, i) { d.classList.toggle('is-on', p >= (i === 0 ? 0 : CH[i - 1]) && p < CH[3] + .05); });
    cue.style.opacity = p > .02 ? '0' : '1';
    if (seq) drawFrame(p);
    var inView = hero.getBoundingClientRect().bottom > 0;
    setDust(!seq && inView);
  }

  /* --- Statement: words light up as you read down --- */
  var statement = $('.statement');
  function updateStatement() {
    if (!words.length) return;
    var r = statement.getBoundingClientRect(), vh = window.innerHeight;
    var p = reduceMotion ? 1 : clamp01((vh * .85 - r.top) / (r.height * .75));
    var lit = Math.round(p * words.length);
    for (var i = 0; i < words.length; i++) words[i].classList.toggle('is-lit', i < lit);
  }

  /* --- Collection: vertical scroll moves the gallery sideways (desktop) --- */
  var collection = $('#collection'), track = $('.collection-track'), viewport = $('.collection-viewport'), cprog = $('.collection-progress span');
  var galleryDist = 0, galleryOn = false;
  function layoutGallery() {
    galleryOn = !reduceMotion && window.innerWidth > 700;
    if (!galleryOn) { collection.style.height = ''; track.style.transform = ''; return; }
    galleryDist = Math.max(0, track.scrollWidth - viewport.clientWidth);
    collection.style.height = (window.innerHeight + galleryDist) + 'px';
  }
  function updateGallery() {
    if (!galleryOn) return;
    var p = sectionProgress(collection);
    var x = p * galleryDist * (root.dir === 'rtl' ? 1 : -1);
    track.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)';
    cprog.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  }

  /* --- One reveal per section heading --- */
  var revealIO = ('IntersectionObserver' in window && !reduceMotion) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -12% 0px' }) : null;
  $$('.how h2, .steps, .order-head, .contact h2, .contact-list').forEach(function (el) {
    if (revealIO) { el.classList.add('reveal'); revealIO.observe(el); }
  });

  /* --- Chrome --- */
  function updateChrome() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
    waFloat.classList.toggle('is-tucked', hero.getBoundingClientRect().bottom > window.innerHeight * .3);
  }

  /* --- Frame loop --- */
  var ticking = false;
  function tick() { ticking = false; updateChrome(); updateHero(); updateStatement(); updateGallery(); }
  function requestTick() { if (!ticking) { ticking = true; requestAnimationFrame(tick); } }

  function initHero() {
    var s = chooseSequence();
    hero.classList.toggle('has-frames', !!s);
    if (s) { sizeFrames(); if (!seq || seq.path !== s.path) loadSequence(s); }
    else { seq = null; sizeDust(); }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  var resizeTimer;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(function () { initHero(); layoutGallery(); requestTick(); }, 150); });

  /* ---------- Start ---------- */
  $('#year').textContent = new Date().getFullYear();
  applyLang(lang);
  initHero();
  requestTick();

  // Opening sequence: let the arch draw, then lift the curtain once fonts are ready
  var started = Date.now();
  function lift() { root.classList.remove('is-loading'); layoutGallery(); requestTick(); }
  if (reduceMotion) lift();
  else {
    var ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    Promise.race([ready, new Promise(function (r) { setTimeout(r, 2500); })]).then(function () {
      setTimeout(lift, Math.max(0, 1500 - (Date.now() - started)));
    });
  }
  window.addEventListener('load', function () { layoutGallery(); requestTick(); });

  window.URNINA = { applyLang: applyLang };
})();
