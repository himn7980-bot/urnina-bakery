# Urnina

Single-page bakery website — العربية / فارسی / English with full RTL, WhatsApp ordering, and a scroll-driven hero animation.

**Design:** dark luxury — ganache `#130B08`, cacao `#1F140F`, gold `#C9A66B` / `#E7CB94`, cream `#F3E7D9`. Reem Kufi (Arabic/Persian headings), Bodoni Moda (English headings), Vazirmatn (text), all self-hosted in `assets/fonts/`.

**Motion:** an opening sequence (the arch draws, the name rises), a pinned hero told in four chapters, then **the vitrine** — a lit display case that switches on as it comes into view, its sweets settling onto glass shelves. Tapping a sweet opens it; *Add to box* collects several sweets, and the whole box is sent on WhatsApp in one message. A statement near the end lights up word by word. Everything respects *reduce motion*.

## Files

| File | What it is |
|---|---|
| `config.js` | **Business settings** — WhatsApp, phone, Instagram, hours, default language, hero animation frames |
| `products.js` | **Products** — names/descriptions in 3 languages, shelf cut-out, photo, price. The vitrine and the box are built from this list |
| `index.html` | Page structure |
| `styles.css` | Design |
| `app.js` | Language switching, rendering, order form, hero animation player |
| `assets/fonts/` | Self-hosted Reem Kufi, Bodoni Moda, Vazirmatn |

## Going live — checklist

1. **WhatsApp** — put the business number in `config.js` → `whatsapp: '9647XXXXXXXXX'` (digits only).
   The order form then opens WhatsApp with the full order written in the customer's language, and a floating WhatsApp button appears.
2. **Phone / Instagram / hours** — fill in `config.js`. Empty values are hidden, nothing says "to be added".
3. **Photos for the vitrine** — two kinds per sweet, both set in `products.js`:
   - `cutout:` what stands on the shelf — **transparent-background PNG/WebP**, about **800×800 px**, the sweet sitting on the bottom edge. Shoot **every sweet from the same angle (20–30° from above) and the same warm light from above**, so they look like they're in one case. Without a cut-out, a gold line drawing stands in.
   - `image:` a regular photo, shown large when the sweet is opened (any ratio, at least 1200 px wide, no text on it).
   - The case is a rendered image: `assets/vitrine-desktop.webp` (landscape, 2 shelves × 4) and `assets/vitrine-mobile.webp` (portrait, 4 shelves × 2 used). Sweets and their name plates are placed on the image's spots, listed in `config.js` → `vitrine` in the image's own pixels (`x`, `base`, `height`, `tag`). If you replace an image with a different layout or size, update those numbers. Higher-resolution renders (2K+) look sharper; the case is shown large on desktop.
   - With `image: ''` the site falls back to a case drawn in code.
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
| 93 – 100 % | (text clears) | Camera arrives at the vitrine — the page continues straight into the lit display case |

- Text sits at the **bottom-start corner** (bottom-right in Arabic/Persian, bottom-left in English), so keep that corner darker and less busy.
- Until frames are added, gold sugar dust and gold line drawings stand in for the animation.
- Only desktop frames? Mobile uses them too (cropped to fill). Only mobile frames? Same in reverse.
- Convert an MP4 to frames with ffmpeg:
  `ffmpeg -i hero.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -quality 70 assets/hero/desktop/frame_%04d.webp`

## Run / deploy

Static site — open `index.html` directly, or deploy the folder to GitHub Pages, Cloudflare Pages, Netlify or Vercel.
