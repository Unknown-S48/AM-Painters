# ToDo — A&M Painters Website

## ✅ Done (this session)
- [x] Genuine Google reviews live (John Rutherford, Douglas Parker, Willemien Frick)
      + Abel's sign-off confirmed.
- [x] All work photos used: gallery = 8 unique tiles incl. a before/after pair
      (hero/About photos not repeated). Advert graphics deleted as requested.
- [x] Image files cleaned & renamed to kebab-case `.jpg` (no spaces, no `&`,
      honest extensions).
- [x] **Mobile horizontal-scroll fixed** — contact-section splash clipped, plus
      `body { overflow-x: clip }` safety net.
- [x] **Contact form REMOVED on purpose** (Zander's call): the form, both JS
      handlers, FormSubmit config, thank-you page, POPIA section and related CSS
      are gone. Contact is now phone / WhatsApp / email only — which also means
      no data collection, no activation step, and no cookie/privacy page needed.
- [x] "More reviews on Google" button removed.
- [x] `canonical` + `og:url` → `https://ampainters.co.za/`.
- [x] `og-image.jpg` (real 1200×630 share image) + `apple-touch-icon.png`.
- [x] `robots.txt` + `sitemap.xml` created for `ampainters.co.za`.
- [x] JSON-LD `aggregateRating` (5★, 3 reviews) + `url`.
- [x] WhatsApp button confirmed working.
- [x] README rewritten to match reality.
- [x] Branded `404.html` created (auto-used by GitHub Pages / most hosts).
- [x] Hero image `preload` added for faster first paint.
- [x] Plausible analytics snippet pre-wired in `index.html`, commented off
      (cookie-less; uncomment when enabled — then re-add a one-line POPIA note).
- [x] Final audit: all anchor links resolve, JSON-LD validates, all images
      <200 KB, lang/theme-color/canonical present.

## 🚨 Before launch (needs the domain / you)
- [ ] **Buy `ampainters.co.za`**.
- [ ] **Deploy** — GitHub Pages or Netlify; point the domain at it; verify the
      site loads at `https://ampainters.co.za/`.
- [ ] **Re-check the phone fix** — confirm no sideways scroll on a real phone.
- [ ] **Google Business Profile** — claim/create "A&M Painters, Hermanus".
- [ ] **Google Search Console** — verify the domain, submit `sitemap.xml`.
- [ ] Check WhatsApp/Facebook link preview of the URL shows the og-image.

## 📈 Later / nice to have
- [ ] More project photos over time (kebab-case names, <300 KB, alt text).
- [ ] Team/on-site photo for the About section if one ever becomes available.
- [ ] Enable analytics: create Plausible site → uncomment snippet in `index.html`
      → add one-line privacy disclosure to footer.
- [ ] If a quote form is ever wanted again: FormSubmit/Netlify Forms can be
      re-added (old implementation is in git history).

## Notes
- All URLs assume `https://ampainters.co.za/` — if the domain ends up different,
  update: canonical, `og:url`, `robots.txt`, `sitemap.xml`, JSON-LD `url`.

## 🙋 Needed from Zander / Abel
- [ ] New project photos as jobs finish (drop in `img/`, I'll add them).
- [ ] A team/on-site photo of Abel, if one exists — for the About section.
- [ ] Google Business Profile URL once created (optional link target later).
- [ ] Decision on analytics (Plausible) once the domain is live.
- [ ] Confirm final domain is `ampainters.co.za` after purchase.
