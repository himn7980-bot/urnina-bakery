/* ==========================================================
   URNINA — products
   One entry per product. The vitrine and the box are both
   built from this list, so add / edit / remove products only here.

   cutout: path to a cut-out PNG/WebP with a transparent background, shot
          at the same angle and light as the others. This is what stands on the
          vitrine shelf. Without one, a gold line drawing stands in.
   image: path to a regular photo, shown large when the sweet is opened.
   price: number in IQD (e.g. 25000) to show "from 25,000 IQD",
          or null to show "Price on request".
   art:   gold line drawing shown until a photo exists — cake, crepe or tart.
   tone:  (unused in the current design)
   ========================================================== */
window.URNINA_PRODUCTS = [
  {
    id: 'berry-crepe-gift', art: 'crepe', image: null, price: null, tone: 'berry',
    en: { tag: 'LITTLE BITES · BIG JOY', name: 'Berry Crepe Gift',
          desc: 'A hand-tied strawberry crepe dessert made for gifting, sharing, and small celebrations.',
          ingredients: 'Strawberry crepe · Vanilla cream · Fresh strawberry' },
    fa: { tag: 'لقمه‌های کوچک · شادی بزرگ', name: 'هدیه کرپ توت‌فرنگی',
          desc: 'دسر کرپ توت‌فرنگی دست‌بسته برای هدیه، دورهمی و جشن‌های کوچک.',
          ingredients: 'کرپ توت‌فرنگی · کرم وانیلی · توت‌فرنگی تازه' },
    ar: { tag: 'لقيمات صغيرة · فرح كبير', name: 'هدية كريب الفراولة',
          desc: 'حلوى كريب بالفراولة مربوطة يدوياً للهدايا والمشاركة والاحتفالات الصغيرة.',
          ingredients: 'كريب فراولة · كريمة فانيلا · فراولة طازجة' }
  },
  {
    id: 'walnut-cake', art: 'cake', image: null, price: null, tone: 'walnut',
    en: { tag: 'MORE THAN SWEETS', name: 'Walnut Cake',
          desc: 'A warm, softly baked cake finished with a generous layer of chopped walnuts.',
          ingredients: 'Soft cake · Walnut · Caramelized nut topping' },
    fa: { tag: 'فراتر از شیرینی', name: 'کیک گردویی',
          desc: 'کیکی نرم و گرم با لایه‌ای سخاوتمندانه از گردوی خردشده.',
          ingredients: 'کیک نرم · گردو · تاپینگ کاراملی گردو' },
    ar: { tag: 'أكثر من مجرد حلويات', name: 'كيكة الجوز',
          desc: 'كيكة طرية ودافئة بطبقة غنية من الجوز المفروم.',
          ingredients: 'كيك طري · جوز · طبقة مكسرات مكرملة' }
  },
  {
    id: 'traditional-tartlets', art: 'tart', image: null, price: null, tone: 'pistachio',
    en: { tag: 'TRADITIONAL FLAVORS · MODERN MOMENTS', name: 'Traditional Tartlets',
          desc: 'Delicate individual tartlets with a traditional filling and pistachio finish.',
          ingredients: 'Crisp tart shell · Traditional filling · Pistachio' },
    fa: { tag: 'طعم سنتی · لحظه مدرن', name: 'تارتلت سنتی',
          desc: 'تارتلت‌های ظریف تک‌نفره با فیلینگ سنتی و پسته.',
          ingredients: 'پوسته ترد تارت · فیلینگ سنتی · پسته' },
    ar: { tag: 'نكهات تقليدية · لحظات حديثة', name: 'تارتلت تقليدي',
          desc: 'قطع تارت صغيرة بحشوة تقليدية ولمسة من الفستق.',
          ingredients: 'قشرة تارت مقرمشة · حشوة تقليدية · فستق' }
  },
  {
    id: 'mango-crepe', art: 'crepe', image: null, price: null, tone: 'mango',
    en: { tag: 'FRESH · TROPICAL · BRIGHT', name: 'Mango Crepe',
          desc: 'A bright mango crepe dessert with vanilla cream and ripe mango.',
          ingredients: 'Mango crepe · Vanilla cream · Fresh mango' },
    fa: { tag: 'تازه · استوایی · درخشان', name: 'کرپ انبه',
          desc: 'دسر کرپ انبه با کرم وانیلی و انبه رسیده.',
          ingredients: 'کرپ انبه · کرم وانیلی · انبه تازه' },
    ar: { tag: 'طازج · استوائي · مشرق', name: 'كريب المانجو',
          desc: 'حلوى كريب بالمانجو مع كريمة الفانيلا والمانجو الناضجة.',
          ingredients: 'كريب مانجو · كريمة فانيلا · مانجو طازجة' }
  },
  {
    id: 'banana-crepe', art: 'crepe', image: null, price: null, tone: 'banana',
    en: { tag: 'SOFT · SWEET · COMFORTING', name: 'Banana Crepe',
          desc: 'A soft banana crepe dessert with vanilla cream, banana and crisp wafer.',
          ingredients: 'Banana crepe · Vanilla cream · Fresh banana · Wafer' },
    fa: { tag: 'نرم · شیرین · دلنشین', name: 'کرپ موز',
          desc: 'دسر کرپ موز نرم با کرم وانیلی، موز و ویفر ترد.',
          ingredients: 'کرپ موز · کرم وانیلی · موز تازه · ویفر' },
    ar: { tag: 'طري · حلو · مريح', name: 'كريب الموز',
          desc: 'حلوى كريب طرية بالموز مع كريمة الفانيلا والموز ورقائق الويفر المقرمشة.',
          ingredients: 'كريب موز · كريمة فانيلا · موز طازج · ويفر' }
  },
  {
    id: 'coffee-crepe', art: 'crepe', image: null, price: null, tone: 'coffee',
    en: { tag: 'RICH · WARM · AROMATIC', name: 'Coffee Crepe',
          desc: 'A rich coffee crepe dessert with cream, cocoa and roasted coffee notes.',
          ingredients: 'Coffee crepe · Cream · Cocoa · Coffee' },
    fa: { tag: 'غنی · گرم · معطر', name: 'کرپ قهوه',
          desc: 'دسر کرپ قهوه با خامه، کاکائو و عطر قهوه برشته.',
          ingredients: 'کرپ قهوه · خامه · کاکائو · قهوه' },
    ar: { tag: 'غني · دافئ · عطري', name: 'كريب القهوة',
          desc: 'حلوى كريب بالقهوة مع الكريمة والكاكاو ونكهة القهوة المحمّصة.',
          ingredients: 'كريب قهوة · كريمة · كاكاو · قهوة' }
  },
  {
    id: 'mango-cheesecake', art: 'cake', image: 'assets/mango-cheesecake.webp', price: null, tone: 'mango',
    en: { tag: 'FRESH · CREAMY · TROPICAL', name: 'Mango Cheesecake',
          desc: 'Creamy mango cheesecake over a crumbly biscuit base, finished with a bright mango layer and fresh mango.',
          ingredients: 'Biscuit crust · Cream cheese filling · Mango layer · Fresh mango' },
    fa: { tag: 'تازه · کرمی · استوایی', name: 'چیزکیک انبه',
          desc: 'چیزکیک کرمی انبه روی پایه بیسکویتی ترد، با لایه درخشان انبه و انبه تازه.',
          ingredients: 'پایه بیسکویتی · فیلینگ پنیر خامه‌ای · لایه انبه · انبه تازه' },
    ar: { tag: 'طازج · كريمي · استوائي', name: 'تشيز كيك المانجو',
          desc: 'تشيز كيك مانجو كريمي فوق قاعدة بسكويت مقرمشة، بطبقة مانجو لامعة ومانجو طازجة.',
          ingredients: 'قاعدة بسكويت · حشوة جبن كريمي · طبقة مانجو · مانجو طازجة' }
  },
  {
    id: 'carrot-cake', art: 'cake', image: 'assets/carrot-cake-photo.webp', price: null, tone: 'carrot',
    en: { tag: 'WARM · HOMEMADE · CLASSIC', name: 'Carrot Cake',
          desc: 'A softly baked carrot cake finished with a delicate dusting of powdered sugar.',
          ingredients: 'Carrot cake · Powdered sugar' },
    fa: { tag: 'گرم · خانگی · کلاسیک', name: 'کیک هویج',
          desc: 'کیک هویج نرم و تازه با لایه‌ای ظریف از پودر قند.',
          ingredients: 'کیک هویج · پودر قند' },
    ar: { tag: 'دافئ · منزلي · كلاسيكي', name: 'كيكة الجزر',
          desc: 'كيكة جزر طرية وطازجة بلمسة خفيفة من السكر البودرة.',
          ingredients: 'كيكة الجزر · سكر بودرة' }
  }
];
