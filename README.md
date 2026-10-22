# Urnina

Single-page bakery website — العربية / فارسی / English with full RTL, WhatsApp ordering, and a scroll-driven hero animation.

**Design idea: the arch** — a Karbala iwan and a patisserie cake dome share the same shape. Every sweet sits in an arch, the logo is an arch, and the hero arch opens to full screen as you scroll. Colours come from Iraqi sweet flavours: rosewater `#F2DCD8`, milk `#FFF8F4`, date `#3B1F17`, pistachio `#56662B` / `#C9D59A`. Type: Lalezar (headings) and Vazirmatn (text), self-hosted in `assets/fonts/`.

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
3. **Photos** — in `products.js` set `image:` per product. Photos are shown in a **portrait 4:5 arch**, so shoot portrait (at least **1000×1250 px**), keep the sweet centred with room above it for the curve, and **no text or logo on the photo**. Products without a photo show a coloured placeholder arch.
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
- At the top of the page the animation sits **inside the hero arch** (a portrait window). Over the first **30 %** of the scroll the arch grows until it fills the screen; the headline fades out as it grows.
- The frame is always **centred and cover-fitted** to the arch, so keep the subject in the **centre** of the frame, especially in the opening frames — the edges are cropped while the arch is narrow.
- Frames advance across the whole scroll, so the opening ~30 % is seen through the arch and the rest full screen. A slow push-in or a reveal works well for the opening.
- Only desktop frames? Mobile uses them too (cropped to fill). Only mobile frames? Same in reverse.
- Convert an MP4 to frames with ffmpeg:
  `ffmpeg -i hero.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -quality 70 assets/hero/desktop/frame_%04d.webp`

## Run / deploy

Static site — open `index.html` directly, or deploy the folder to GitHub Pages, Cloudflare Pages, Netlify or Vercel.
