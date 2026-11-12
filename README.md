# A&M Painters — Website

Static, single-page marketing website for **A&M Painters**, a painting and property
maintenance contractor based in Hermanus, Western Cape.

> Interior & exterior painting · roof coating · cabinet & furniture painting ·
> water damage repairs · wood varnishing · high-pressure cleaning · maintenance

**Contact:** 064 159 9195 · mushimbwe@gmail.com · 1 Long Street, Hermanus, 7200

---

## Tech stack

No build step, no dependencies, no framework — just three files and an image folder.
Open `index.html` in a browser and it works.

| File | Purpose |
| --- | --- |
| `index.html` | All markup, content, SEO meta, JSON-LD structured data, inline SVG icons |
| `styles.css` | Layout, theme colours, responsive breakpoints, animations |
| `script.js` | Mobile nav, scroll reveal, gallery lightbox, sticky header, form handling, footer year |
| `img/` | Photographs used across the site |

### Features

- Fully responsive (mobile → desktop)
- Mobile hamburger navigation
- Scroll-reveal animations with a CSS/JS fallback so content is never stuck hidden
- Click-to-enlarge gallery lightbox (keyboard + backdrop close)
- Floating WhatsApp button with a pre-filled message
- Contact form posting to FormSubmit (no backend required)
- LocalBusiness (`HousePainter`) JSON-LD for Google rich results
- Open Graph tags for WhatsApp / Facebook link previews
- Inline SVG favicon (no extra file)

---

## Project structure

```
am-painters/
├── index.html
├── styles.css
├── script.js
├── img/
│   ├── BestWork.png           # Hero image + gallery item 1
│   ├── ExteriorRepaint.jpeg   # About section + gallery item 2
│   ├── FloorFarnish.png       # Gallery item 4 (floor varnishing)
│   └── RoofCoating.png        # Gallery item 3
├── .gitattributes
└── README.md
```

---

## Running locally

**Simplest:** double-click `index.html`.

**Recommended** (so relative paths and the form behave exactly like production):

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit <http://localhost:8000>.

---

## Deploying

### GitHub Pages

1. Push the repository to GitHub.
2. **Settings → Pages**.
3. Source: *Deploy from a branch* → Branch: `main`, folder: `/ (root)`.
4. Save. The site goes live at `https://<username>.github.io/<repo>/` within a minute or two.

All asset paths are **relative**, so it works correctly under a sub-folder.

### Netlify / Cloudflare Pages / Vercel

Drag-and-drop the project folder (or connect the repo). No build command,
no publish directory settings — the root is the site.

---

## Editing content

### Photos

1. Drop the new image into `img/`.
2. Point the `src` (and the matching `data-full` for gallery items) at it.
3. **Keep images web-friendly** — aim for under ~300 KB each. Resize to roughly
   1200 px on the long edge and run through a compressor (Squoosh, TinyPNG).
4. Always write a descriptive `alt` attribute — it helps both accessibility and SEO.

### The About-section photo

It currently uses `img/ExteriorRepaint.jpeg` as a stand-in. Replace it with a real
photo of Abel / the team on site when one is available — a face builds far more
trust than a wall.

### Phone number, email, address

They appear in several places. Search and replace:

| Find | Replace with |
| --- | --- |
| `064 159 9195` | new display number |
| `+27641599195` | new international number (used in `tel:`, `wa.me` and JSON-LD) |
| `mushimbwe@gmail.com` | new email (contact list, form action, footer, JSON-LD) |
| `1 Long Street` | new street address |

Also update the `@type: HousePainter` JSON-LD block in `<head>` — Google reads
the business details from there.

### Opening hours

Change in three places: the contact list, the footer, and `"openingHours"` in the
JSON-LD block.

### Services

Each card in `<section id="services">` is self-contained: an inline SVG icon,
an `<h3>` and a `<p>`. Copy an existing `<article class="card reveal">` to add one.
If you add a service, also add it to the `<select>` in the contact form.

### Reviews

⚠️ **The three reviews in `<section id="testimonials">` are placeholders** written
as examples. Replace them with genuine client feedback (or remove the section)
before going live — publishing invented testimonials is misleading and, in South
Africa, can fall foul of the Consumer Protection Act.

Each review is a `<figure class="card quote reveal">`. Update the quote text, the
`<strong>` name, the location `<small>`, and the two-letter `<span class="avatar">`
initials. Adjust the `aria-label` on `.stars` if the rating isn't 5.

---

## Contact form

The form posts to **FormSubmit** (`https://formsubmit.co/mushimbwe@gmail.com`) —
a free relay that forwards submissions to email with no server needed.

**First-time setup:** submit the form once from the live site. FormSubmit sends an
activation email to the address; click the link inside to start receiving messages.
Until you do that, submissions go nowhere.

Built-in hidden fields:

| Field | Value | Effect |
| --- | --- | --- |
| `_subject` | Custom string | Sets the email subject line |
| `_template` | `table` | Formats the email as a table |
| `_captcha` | `false` | Disables FormSubmit's captcha page |
| `_honey` | (hidden input) | Honeypot — bots fill it, humans don't |

If you outgrow FormSubmit, swap the `action` for any form endpoint (Netlify Forms,
Formspree, Web3Forms) — the `name` attributes are already set up.

---

## SEO checklist

- [x] Descriptive `<title>` and `<meta name="description">`
- [x] `HousePainter` structured data with address, phone, hours and areas served
- [x] Open Graph tags for social sharing
- [x] Semantic headings (`h1` → `h2` → `h3`), descriptive `alt` text
- [ ] **Replace the `og:image`** — it currently points at a `placehold.co` URL.
      Social previews need an **absolute** URL to a real photo on the live domain, e.g.
      `https://am-painters.co.za/img/BestWork.png` (1200×630 recommended).
- [ ] Add the canonical domain and update `og:url` once the final URL is known
- [ ] Submit the site to [Google Search Console](https://search.google.com/search-console)
- [ ] Create a Google Business Profile — for a local service business this drives
      more enquiries than anything else on this list

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses CSS custom
properties, CSS Grid, `IntersectionObserver` and `classList`. No IE support.

---

## Known placeholders

- [ ] Three dummy testimonials — replace before launch
- [ ] About-section photo is a stand-in exterior shot, not a team photo
- [ ] `og:image` points at a placeholder service
- [ ] Gallery has 4 images; add more project photos over time

---

## License

© A&M Painters. All rights reserved. Website code and content may not be
reproduced without permission.