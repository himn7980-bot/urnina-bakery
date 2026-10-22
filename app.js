/* Urnina — interactions */
(function () {
  'use strict';
  var CFG = window.URNINA_CONFIG || {};
  var BIZ = CFG.business || {};
  var PRODUCTS = window.URNINA_PRODUCTS || [];

  /* ---------- Words on the page ---------- */
  var copy = {
    ar: {
      brand: 'أورنينا', skip: 'انتقل إلى الحلويات', menuToggle: 'القائمة',
      navSweets: 'حلوياتنا', navHow: 'طريقة الطلب', navStory: 'قصتنا', navContact: 'تواصل معنا', orderNow: 'اطلب',
      heroTitle: 'أكثر من مجرد حلويات.', heroSub: 'كيك وكريب وتارت مصنوعة يدوياً في كربلاء، تُخبز حسب الطلب ليومك.',
      heroOrder: 'اطلب عبر واتساب', heroSee: 'شاهد الحلويات', heroAlt: 'كيكة الجزر من أورنينا',
      sweetsTitle: 'حلوياتنا', sweetsIntro: 'كل شيء يُصنع حسب الطلب وبكميات صغيرة. اختر ما يعجبك وسنؤكد لك السعر والموعد عبر واتساب.',
      madeWith: 'المكونات:', priceRequest: 'السعر عند الطلب', priceFrom: 'ابتداءً من', orderThis: 'اطلبها', photoSoon: 'الصورة قريباً',
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
      storyTitle: 'تُخبز يدوياً، طلباً بعد طلب',
      storyBody: 'كل حلوى من أورنينا تُصنع يدوياً في كربلاء، بكميات صغيرة، وفقط بعد أن تطلبها. لهذا لا شيء ينتظر على الرف: كيكتك تُخبز ليومك أنت.',
      contactTitle: 'تواصل معنا', location: 'المكان', phoneLabel: 'الهاتف', hours: 'ساعات العمل', orderLabel: 'الطلبات', orderViaForm: 'عبر نموذج الطلب أعلاه',
      footerTag: 'حلويات يدوية من كربلاء.', waFloat: 'راسلنا على واتساب'
    },
    fa: {
      brand: 'اورنینا', skip: 'رفتن به شیرینی‌ها', menuToggle: 'منو',
      navSweets: 'شیرینی‌ها', navHow: 'روش سفارش', navStory: 'داستان ما', navContact: 'تماس', orderNow: 'سفارش',
      heroTitle: 'فراتر از شیرینی.', heroSub: 'کیک، کرپ و تارت دست‌ساز در کربلا، که برای روز شما به سفارش پخته می‌شود.',
      heroOrder: 'سفارش در واتساپ', heroSee: 'شیرینی‌ها را ببینید', heroAlt: 'کیک هویج اورنینا',
      sweetsTitle: 'شیرینی‌های ما', sweetsIntro: 'همه‌چیز به سفارش و در تعداد کم پخته می‌شود. هر کدام را دوست دارید انتخاب کنید؛ قیمت و زمان را در واتساپ تأیید می‌کنیم.',
      madeWith: 'مواد:', priceRequest: 'قیمت هنگام سفارش', priceFrom: 'از', orderThis: 'سفارش', photoSoon: 'عکس به‌زودی',
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
      storyTitle: 'دست‌ساز، سفارش به سفارش',
      storyBody: 'هر شیرینی اورنینا در کربلا، با دست و در تعداد کم، و فقط بعد از سفارش شما پخته می‌شود. برای همین چیزی روی قفسه منتظر نمی‌ماند: کیک شما برای روز خود شما پخته می‌شود.',
      contactTitle: 'تماس با ما', location: 'مکان', phoneLabel: 'تلفن', hours: 'ساعات کاری', orderLabel: 'سفارش', orderViaForm: 'از فرم سفارش بالا',
      footerTag: 'شیرینی دست‌ساز از کربلا.', waFloat: 'پیام در واتساپ'
    },
    en: {
      brand: 'Urnina', skip: 'Skip to the sweets', menuToggle: 'Menu',
      navSweets: 'Our sweets', navHow: 'How to order', navStory: 'Our story', navContact: 'Contact', orderNow: 'Order',
      heroTitle: 'More than sweets.', heroSub: 'Cakes, crepes and tartlets made by hand in Karbala, baked to order for your day.',
      heroOrder: 'Order on WhatsApp', heroSee: 'See the sweets', heroAlt: 'Urnina carrot cake',
      sweetsTitle: 'Our sweets', sweetsIntro: 'Everything is made to order in small batches. Pick what you like and we’ll confirm price and timing on WhatsApp.',
      madeWith: 'Made with', priceRequest: 'Price on request', priceFrom: 'From', orderThis: 'Order this', photoSoon: 'Photo coming soon',
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
      storyTitle: 'Baked by hand, one order at a time',
      storyBody: 'Every Urnina sweet is made by hand in Karbala, in small batches, and only after you order it. Nothing waits on a shelf: your cake is baked for your day.',
      contactTitle: 'Find us', location: 'Where', phoneLabel: 'Phone', hours: 'Opening hours', orderLabel: 'Orders', orderViaForm: 'Through the order form above',
      footerTag: 'Handmade sweets from Karbala.', waFloat: 'Message us on WhatsApp'
    }
  };

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
  function listJoin(s, L) {
    var items = String(s || '').split(/\s*·\s*/).filter(Boolean);
    if (L === 'en') items = items.map(function (x) { return x.charAt(0).toLowerCase() + x.slice(1); });
    return items.join(L === 'en' ? ', ' : '، ');
  }
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var waNumber = String(BIZ.whatsapp || '').replace(/\D/g, '');

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
        : '<span class="ph-mark" aria-hidden="true"><svg viewBox="0 0 40 48"><path d="M3 47V20a17 17 0 0 1 34 0v27"/></svg></span><span class="ph-note">' + esc(t.photoSoon) + '</span>';
      return '<li class="sweet" id="p-' + esc(p.id) + '">' +
        '<figure class="arch' + (p.image ? '' : ' is-placeholder tone-' + esc(p.tone || 'cream')) + '">' + media + '</figure>' +
        '<h3>' + esc(d.name) + '</h3>' +
        '<p class="sweet-desc">' + esc(d.desc) + '</p>' +
        '<p class="sweet-ingredients">' + esc(t.madeWith) + ' ' + esc(listJoin(d.ingredients, lang)) + '</p>' +
        '<div class="sweet-foot"><span class="sweet-price">' + esc(priceText(p, lang)) + '</span>' +
        '<a class="btn btn-small sweet-order" href="#order" data-product="' + esc(p.id) + '" aria-label="' + esc(t.orderThis + ' — ' + d.name) + '">' + esc(t.orderThis) + '</a></div>' +
        '</li>';
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

  function applyLang(next) {
    if (!copy[next]) next = 'ar';
    lang = next;
    var t = copy[lang], root = document.documentElement;
    root.lang = lang; root.dir = lang === 'en' ? 'ltr' : 'rtl';
    $$('[data-i18n]').forEach(function (el) { var v = t[el.getAttribute('data-i18n')]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-placeholder]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-placeholder')]; if (v) el.placeholder = v; });
    $$('[data-i18n-alt]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-alt')]; if (v) el.alt = v; });
    $$('[data-i18n-aria]').forEach(function (el) { var v = t[el.getAttribute('data-i18n-aria')]; if (v) el.setAttribute('aria-label', v); });
    $$('.lang-switch button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    document.title = t.brand + ' — ' + t.heroTitle.replace(/\.$/, '');
    renderProducts(); renderProductOptions(); renderContact();
    store.set('urnina-lang', lang);
    requestDraw();
  }

  /* ---------- Header & mobile menu ---------- */
  var header = $('.site-header'), nav = $('#primaryNav'), toggle = $('.menu-toggle'), waFloat = $('#waFloat'), hero = $('#hero');
  function setMenu(open) { nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  function updateChrome() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    waFloat.classList.toggle('is-tucked', window.scrollY < hero.offsetHeight - window.innerHeight * 0.4);
  }
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

  function fail(el, msg) {
    el.classList.add('is-invalid'); el.setAttribute('aria-invalid', 'true'); el.focus();
    status.textContent = msg; status.className = 'form-status wide is-error';
    return false;
  }
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

  /* ---------- Hero: the arch opens, then the frames play ---------- */
  var canvas = $('.hero-canvas'), ctx = canvas.getContext('2d'), archEl = $('.hero-arch'), heroCopy = $('.hero-copy');
  var seq = null, frames = [], lastDrawn = -1, ticking = false;
  var OPEN_END = 0.3;   // first 30% of the scroll opens the arch to full screen

  function chooseSequence() {
    var H = CFG.hero || {}, d = H.desktop && H.desktop.frames > 0 ? H.desktop : null, m = H.mobile && H.mobile.frames > 0 ? H.mobile : null;
    return (window.innerHeight > window.innerWidth ? (m || d) : (d || m));
  }
  function frameUrl(s, i) { var n = String(i + 1); while (n.length < (s.digits || 4)) n = '0' + n; return s.path + n + (s.ext || '.webp'); }
  function loadSequence(s) {
    seq = s; frames = new Array(s.frames); lastDrawn = -1;
    var order = [], step = 16;   // coarse-to-fine so the whole animation is roughly available early
    while (step >= 1) { for (var i = 0; i < s.frames; i += step) if (order.indexOf(i) < 0) order.push(i); step = step / 2 | 0; }
    var idx = 0, inflight = 0;
    (function pump() {
      while (inflight < 6 && idx < order.length) {
        (function (k) {
          var img = new Image(); inflight++; img.decoding = 'async';
          img.onload = function () { frames[k] = img; inflight--; if (lastDrawn < 0) requestDraw(); pump(); };
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
    canvas.width = Math.round(canvas.clientWidth * dpr); canvas.height = Math.round(canvas.clientHeight * dpr); lastDrawn = -1;
  }
  function drawInArch(img, x, y, w, h, rad) {
    // cover-fit the frame into the (growing) arch window, clipped to its rounded top
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y + h);
    ctx.lineTo(x, y + rad);
    ctx.arcTo(x, y, x + rad, y, rad);
    ctx.lineTo(x + w - rad, y);
    ctx.arcTo(x + w, y, x + w, y + rad, rad);
    ctx.lineTo(x + w, y + h);
    ctx.closePath();
    ctx.clip();
    var ir = img.naturalWidth / img.naturalHeight, dw, dh;
    if (ir > w / h) { dh = h; dw = dh * ir; } else { dw = w; dh = dw / ir; }
    ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
    ctx.restore();
  }
  function ease(x) { return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
  function draw() {
    ticking = false;
    updateChrome();
    if (!seq) return;
    var dist = hero.offsetHeight - window.innerHeight;
    var p = reduceMotion ? 1 : (dist > 0 ? Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / dist)) : 0);
    // arch → full screen
    var o = ease(Math.min(1, p / OPEN_END)), k = 1 - o;
    var stage = canvas.getBoundingClientRect(), r = archEl.getBoundingClientRect();
    var dpr = canvas.width / (stage.width || 1);
    var x = (r.left - stage.left) * k, y = (r.top - stage.top) * k;
    var w = r.width + (stage.width - r.width) * o, h = r.height + (stage.height - r.height) * o;
    var rad = Math.min(w, h) / 2 * k;
    heroCopy.style.opacity = String(Math.max(0, 1 - o * 1.6));
    heroCopy.style.visibility = o > .7 ? 'hidden' : 'visible';
    var i = nearestLoaded(Math.round(p * (seq.frames - 1)));
    if (i >= 0) { drawInArch(frames[i], x * dpr, y * dpr, w * dpr, h * dpr, Math.min(rad, (r.width / 2) * k) * dpr); lastDrawn = i; }
  }
  function requestDraw() { if (!ticking) { ticking = true; window.requestAnimationFrame(draw); } }
  function initHero() {
    var s = chooseSequence();
    hero.classList.toggle('has-frames', !!s);
    if (!s) { seq = null; return; }
    sizeCanvas();
    if (!seq || seq.path !== s.path) loadSequence(s);
    requestDraw();
  }

  window.addEventListener('scroll', requestDraw, { passive: true });
  var resizeTimer;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(initHero, 150); });

  /* ---------- Start ---------- */
  $('#year').textContent = new Date().getFullYear();
  applyLang(lang);
  initHero();
  updateChrome();
  window.URNINA = { applyLang: applyLang };
})();
