# URNINA Bakery

Single-page bakery website — English / فارسی / العربية with full RTL, WhatsApp ordering, and a scroll-driven hero animation.

## Files

| File | What it is |
|---|---|
| `config.js` | **Business settings** — WhatsApp, phone, Instagram, hours, default language, hero animation frames |
| `products.js` | **Products** — names/descriptions in 3 languages, photo, price. Creations, Menu and the order form are all built from this list |
| `index.html` | Page structure |
| `styles.css` | Design |
| `app.js` | Language switching, rendering, order form, hero animation player |

## Going live — checklist

1. **WhatsApp** — put the business number in `config.js` → `whatsapp: '9647XXXXXXXXX'` (digits only).
   The order form then opens WhatsApp with the full order written in the customer's language, and a floating WhatsApp button appears.
2. **Phone / Instagram / hours** — fill in `config.js`. Empty values are hidden, nothing says "to be added".
3. **Photos** — in `products.js` set `image:` per product. Use photos at least **1200 px wide**, landscape 4:3, **with no text or logo on the photo**. Products without a photo show a designed placeholder.
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

**Composition notes**
- The headline sits over the **first ~20 %** of the animation and then fades out — keep that opening calm and fairly dark.
- The scroll is divided into four chapters shown on the progress rail: **Intro → Craft → Creation → Signature** (each ~25 % of the frames).
- Only desktop frames? Mobile falls back to them (cropped to fill). Only mobile frames? Same in reverse.
- An MP4 can be converted to frames with ffmpeg:
  `ffmpeg -i hero.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -quality 70 assets/hero/desktop/frame_%04d.webp`

## Run / deploy

Static site — open `index.html` directly, or deploy the folder to GitHub Pages, Cloudflare Pages, Netlify or Vercel.
