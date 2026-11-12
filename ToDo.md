# ToDo — A&M Painters Website

## ✅ Done (this session)
- [x] Genuine Google reviews live (John Rutherford, Douglas Parker, Willemien Frick)
      + Abel's sign-off confirmed.
- [x] 6 new photos audited (all unique, no duplicates, no black bars) → gallery now 8
      unique tiles incl. a before/after pair (hero/About photos not repeated). Advert graphics deleted as requested.
- [x] Image files cleaned & renamed to kebab-case `.jpg` (they were all JPEGs with
      misleading `.png` names, spaces, `&` in filenames).
- [x] **Mobile horizontal-scroll fixed** — the decorative splash in the contact section
      stuck out past the viewport (`right: -60px`, nothing clipping it). `#contact` now
      clips it and `body` has `overflow-x: clip` as a safety net.
- [x] **Form tested end-to-end & fixed**:
      - Bug found: JS treated any HTTP 200 as success even when FormSubmit returned
        `success:false` (falsely said "Thanks, your request has been sent!").
      - Now posts to FormSubmit's AJAX endpoint and checks the JSON `success` flag.
      - Live test POST confirmed the endpoint works and correctly reported the
        remaining blocker: activation (see below).
- [x] `canonical` + `og:url` → `https://ampainters.co.za/`.
- [x] `og:image` replaced — generated real 1200×630 `img/og-image.jpg` from BestWork.
- [x] `apple-touch-icon.png` (180×180) generated + linked.
- [x] POPIA privacy statement added (`#privacy` section + footer link).
- [x] `thank-you.html` created + `_next` hidden field wired (no-JS path).
- [x] `robots.txt` + `sitemap.xml` created for `ampainters.co.za`.
- [x] JSON-LD `aggregateRating` (5★, 3 reviews) + `url` added — legitimate now.
- [x] WhatsApp button confirmed working.
- [x] README rewritten to match reality; broken JS comment header fixed.

## 🚨 Before launch (needs the domain / you)
- [ ] **Activate FormSubmit** — click the "Activate Form" link in the email sent to
      `mushimbwe@gmail.com` (triggered during testing). Until clicked, submissions
      are not delivered. Then submit one real test enquiry on the live site.
- [ ] **Buy `ampainters.co.za`** (planned tomorrow morning).
- [ ] **Deploy** — GitHub Pages (repo exists, push pending on your side) or Netlify.
      Point the domain at it; verify the site loads at `https://ampainters.co.za/`.
- [ ] **Re-check the phone fix** — confirm no sideways scroll on a real phone
      (fix is in, but eyeball it once deployed).
- [ ] **Google Business Profile** — claim/create "A&M Painters, Hermanus".
- [ ] **Google Search Console** — verify the domain, submit `sitemap.xml`.
- [ ] Check WhatsApp/Facebook link preview of the URL shows the og-image.

## 📈 Later / nice to have
- [ ] More project photos over time (keep kebab-case names, <300 KB, alt text).
- [ ] Team/on-site photo for the About section if one ever becomes available
      (current work photo is fine without it).
- [ ] Privacy-friendly analytics (Plausible) + cookie notice — only once live.
- [ ] Consider hosting on the same off-site server as the S&V Software site
      (would also allow moving off FormSubmit to your own endpoint later).

## Notes
- All URLs assume `https://ampainters.co.za/` — if the domain ends up different,
  update: canonical, `og:url`, `_next`, `robots.txt`, `sitemap.xml`, JSON-LD `url`.
- FormSubmit refuses submissions when the page is opened via `file://`; preview
  locally with `python3 -m http.server 8000` instead.
