# Urnina

Single-page bakery website — العربية / فارسی / English with full RTL, WhatsApp ordering, and a scroll-driven hero animation.

**Design:** dark luxury — ganache `#130B08`, cacao `#1F140F`, gold `#C9A66B` / `#E7CB94`, cream `#F3E7D9`. Reem Kufi (Arabic/Persian headings), Bodoni Moda (English headings), Vazirmatn (text), all self-hosted in `assets/fonts/`.

**Motion:** an opening sequence (the arch draws, the name rises), a pinned hero told in four chapters, a statement that lights up word by word, and a collection that scrolls sideways (a swipe carousel on phones). Everything respects *reduce motion*.

## Files

| File | What it is |
|---|---|
| `config.js` | **Business settings** — WhatsApp, phone, Instagram, hours, default language, hero animation frames |
| `products.js` | **Products** — names/descriptions in 3 languages, photo, price. the sweets grid and the order form are both built from this list |
| `index.html` | Page structure |
| `styles.css` | Design |
| `app.js` | Language switching, rendering, order form, hero animation player |
| `assets/fonts/` | Self-hosted Lalezar + Vazirmatn (Arabic + Latin) |

## Going live — checklist

1. **WhatsApp** — put the business number in `config.js` → `whatsapp: '9647XXXXXXXXX'` (digits only).
   The order form then opens WhatsApp with the full order written in the customer's language, and a floating WhatsApp button appears.
2. **Phone / Instagram / hours** — fill in `config.js`. Empty values are hidden, nothing says "to be added".
3. **Photos** — in `products.js` set `image:` per product. Photos sit in a **portrait 4:5 arch** on a dark page: shoot portrait (at least **1000×1250 px**), on a dark or warm background, sweet centred with room above it for the curve, **no text or logo on the photo**. Products without a photo show a gold line drawing.
4. **Prices** (optional) — `price: 25000` shows "From 25,000 IQD"; `null` shows "Price on request".

## Hero scroll animation

The hero plays an image sequence that follows the scroll (Apple-style). Until frames exist it shows a still design.

**Export spec**

| | Desktop | Mobile |
|---|---|---|
| Ratio / size | 16:9, 1600×900 (or 1920×1080) | 9:16, 720×1280 (or 1080×1920) |
| Frames | 90–150 | 60–120 |
| Format | WebP, quality ~70, ideally < 100 KB per frame | same |
| Folder | `assets/hero/desktop/` | `assets/hero/mobile/` |
| Names | `frame_0001.webp`, `frame_0002.webp`, … | same |

Then set `frames:` in `config.js` to the number of frames for each.

**How it plays**
The hero is pinned while the visitor scrolls through it (about 4 screens), and the frames follow the scroll. The text on top follows these beats, so time your animation to them:

| Scroll through hero | On screen | Suggested animation beat |
|---|---|---|
| 0 – 20 % | Name + "More than sweets" (fades and grows out) | Dark, calm opening — light rising, dust, a slow push-in |
| 20 – 44 % | Chapter 1 — *Simple ingredients* | Ingredients: butter, cream, fruit, nuts |
| 44 – 68 % | Chapter 2 — *Made by hand* | Hands folding a crepe, layering a cake |
| 68 – 93 % | Chapter 3 — *Finished with care* | The finished sweet: glaze, sugar dust, ribbon |
| 93 – 100 % | (text clears) | Hold on the hero shot |

- Text sits at the **bottom-start corner** (bottom-right in Arabic/Persian, bottom-left in English), so keep that corner darker and less busy.
- Until frames are added, gold sugar dust and gold line drawings stand in for the animation.
- Only desktop frames? Mobile uses them too (cropped to fill). Only mobile frames? Same in reverse.
- Convert an MP4 to frames with ffmpeg:
  `ffmpeg -i hero.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -quality 70 assets/hero/desktop/frame_%04d.webp`

## Run / deploy

Static site — open `index.html` directly, or deploy the folder to GitHub Pages, Cloudflare Pages, Netlify or Vercel.
