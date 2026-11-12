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
| `thank-you.html` | Redirect target after a successful (no-JS) form submission |
| `robots.txt` / `sitemap.xml` | Crawler rules + sitemap for the live domain |
| `img/` | Photographs used across the site |

### Features

- Fully responsive (mobile → desktop), with `overflow-x: clip` + section clipping so
  decorative paint splashes can never cause horizontal scroll on phones
- Mobile hamburger navigation
- Scroll-reveal animations with a CSS/JS fallback so content is never stuck hidden
- Click-to-enlarge gallery lightbox (keyboard + backdrop close) — 8 unique project
  photos (no repeats; hero/About photos aren't duplicated in the gallery)
- Floating WhatsApp button with a pre-filled message
- Contact form posting to FormSubmit's JSON AJAX endpoint (no backend required),
  with a `thank-you.html` fallback for visitors without JavaScript
- LocalBusiness (`HousePainter`) JSON-LD — including a genuine `aggregateRating`
  (3 × 5★ Google reviews)
- Open Graph tags with a real 1200×630 share image (`img/og-image.jpg`) for
  WhatsApp / Facebook link previews
- Canonical URL + `og:url` set to `https://ampainters.co.za/`
- POPIA privacy statement section (`#privacy`)
- Inline SVG favicon + `apple-touch-icon.png` for iOS home screens

---

## Project structure

```
am-painters/
├── index.html
├── thank-you.html
├── robots.txt
├── sitemap.xml
├── styles.css
├── script.js
├── img/
│   ├── BestWork.jpg                  # Hero image
│   ├── og-image.jpg                  # Open Graph share image (1200×630)
│   ├── apple-touch-icon.png          # iOS home-screen icon (180×180)
│   ├── ExteriorRepaint.jpg           # About section photo
│   ├── house-painted.jpg             # Gallery item 1
│   ├── outside-painting.jpg          # Gallery item 2
│   ├── RoofCoating.jpg               # Gallery item 3
│   ├── roof-work.jpg                 # Gallery item 4
│   ├── FloorVarnish.jpg              # Gallery item 5
│   ├── floor-finish.jpg              # Gallery item 6
│   ├── before-after-1-before.jpg     # Gallery item 7 (before)
│   └── before-after-1-after.jpg      # Gallery item 8 (after)
├── .gitattributes
└── README.md
```

Image filenames are lowercase kebab-case (`house-painted.jpg`) — keep new photos
named that way; no spaces, no `&`, no mixed extensions. All photos are JPEG —
use `.jpg` regardless of how the phone exports them.

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

It uses `img/ExteriorRepaint.jpg` (a real completed job). If a good on-site photo
of Abel or the team becomes available later, swap it in — a face builds a little
more trust than a wall — but a work photo is perfectly acceptable.

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

The three reviews in `<section id="testimonials">` are **genuine Google reviews**
(John Rutherford, Douglas Parker, Willemien Frick), lightly copy-edited for
spelling only. Keep new reviews verbatim apart from spelling fixes, and only
publish feedback you actually received — publishing invented testimonials is
misleading and, in South Africa, can fall foul of the Consumer Protection Act.

Each review is a `<figure class="card quote reveal">`. Update the quote text, the
`<strong>` name, the location `<small>`, and the two-letter `<span class="avatar">`
initials. Adjust the `aria-label` on `.stars` if the rating isn't 5.

---

## Contact form

The form posts to **FormSubmit** — a free relay that forwards submissions to
email with no server needed:

- **With JS:** `script.js` POSTs to the JSON AJAX endpoint
  (`https://formsubmit.co/ajax/mushimbwe@gmail.com`) and checks the returned
  `success` flag, so errors are shown honestly in the status line.
- **Without JS:** the form's `action` posts to `https://formsubmit.co/mushimbwe@gmail.com`
  and the hidden `_next` field redirects to `thank-you.html`.

**Activation (one time):** FormSubmit was tested end-to-end from this repo and
responded correctly, but the address still needs activating — an activation email
was sent to `mushimbwe@gmail.com`; click the "Activate Form" link inside it.
Until that's clicked, submissions go nowhere. FormSubmit also refuses submissions
when the page is opened as a local file (`file://`) — test via `http://localhost`
or the live domain.

Built-in hidden fields:

| Field | Value | Effect |
| --- | --- | --- |
| `_subject` | Custom string | Sets the email subject line |
| `_template` | `table` | Formats the email as a table |
| `_captcha` | `false` | Disables FormSubmit's captcha page |
| `_next` | `https://ampainters.co.za/thank-you.html` | Where users land after a no-JS submit |
| `_honey` | (hidden input) | Honeypot — bots fill it, humans don't |

If you outgrow FormSubmit, swap the `action` for any form endpoint (Netlify Forms,
Formspree, Web3Forms) — the `name` attributes are already set up.

---

## SEO checklist

- [x] Descriptive `<title>` and `<meta name="description">`
- [x] `HousePainter` structured data with address, phone, hours, areas served,
      URL and a genuine `aggregateRating`
- [x] Open Graph tags with a real share image (`img/og-image.jpg`, 1200×630)
- [x] Semantic headings (`h1` → `h2` → `h3`), descriptive `alt` text
- [x] Canonical URL + `og:url` → `https://ampainters.co.za/`
- [x] `robots.txt` + `sitemap.xml` for the live domain
- [ ] Submit the site to [Google Search Console](https://search.google.com/search-console)
      (once `ampainters.co.za` is live)
- [ ] Create a Google Business Profile — for a local service business this drives
      more enquiries than anything else on this list

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses CSS custom
properties, CSS Grid, `IntersectionObserver` and `classList`. No IE support.

---

## Known placeholders

- [x] ~~Three dummy testimonials~~ — replaced with genuine Google reviews
- [x] ~~`og:image` placeholder~~ — real 1200×630 share image (`img/og-image.jpg`)
- [x] ~~Gallery had 4 images~~ — now 8 unique tiles (hero/About photos not repeated)
- [ ] Canonical/live URLs assume `https://ampainters.co.za/` — update if the domain
      ends up different (canonical, `og:url`, `_next`, robots.txt, sitemap.xml)

---

## Post-launch (when the domain is live)

1. Click FormSubmit's **"Activate Form"** email, then submit a real test enquiry.
2. Verify horizontal scroll is gone on a real phone.
3. Register the domain, deploy, verify Search Console, submit the sitemap.
4. Create/claim the **Google Business Profile**; point the "More reviews on Google"
   button at the actual review page.
5. Check WhatsApp/Facebook link previews of the site URL (og-image should show).

---

## License

© A&M Painters. All rights reserved. Website code and content may not be
reproduced without permission.