# ToDo — A&M Painters Website

## ✅ Done
- [x] Replaced the three dummy testimonials with the genuine Google reviews
      (John Rutherford, Douglas Parker, Willemien Frick). Text kept faithful;
      only spelling fixed ("excellant" → "excellent", capitalisation).
- [x] README updated — reviews section no longer flagged as placeholder.

## 🚨 Before launch (must do)
- [ ] **Abel's sign-off** — confirm he's OK publishing the reviewers' names as-is
      (POPIA: names are personal info) and that the quotes are exactly as given.
- [ ] **Contact / WhatsApp check** — confirm 064 159 9195 works for calls AND
      that it's a WhatsApp number (the floating wa.me button assumes it is).
- [ ] **FormSubmit activation** — submit the contact form once on the live site
      and click the activation link in the email. Until then submissions go nowhere.
- [ ] **Test the form end-to-end** — both paths: normal submit (form action) and
      the AJAX fallback in `script.js` (~line 796). Check spam folders.
- [ ] **Domain** — pick one (e.g. `am-painters.co.za`) and point it at the deploy.
- [ ] **Replace `og:image`** (index.html line 18) — currently a placehold.co URL.
      Needs an absolute URL to a real photo on the live domain, 1200×630,
      e.g. `https://am-painters.co.za/img/BestWork.png`.
- [ ] **Add canonical + og:url** — there is currently **no `<link rel="canonical">`**
      in the head; add both once the domain is final.
- [ ] **Deploy** — push to GitHub Pages (repo already has `origin/main`) or
      Netlify drag-and-drop. Verify on a real phone afterwards.
- [ ] **Team photo for About** — swap `img/ExteriorRepaint.jpeg` stand-in for a
      real photo of Abel/the team on site (compress to <300 KB, add alt text).
- [ ] **Google Business Profile** — claim/create it for "A&M Painters, Hermanus".
      This drives more local enquiries than everything else combined.

## 🔧 Strongly recommended
- [ ] **Google Search Console** — verify the domain and submit the sitemap.
- [ ] **"More reviews on Google" link** under the testimonials, pointing at the
      GBP review page — keeps the review loop alive and shows the reviews aren't
      cherry-picked.
- [ ] **JSON-LD `aggregateRating`** — now that the reviews are genuine (3 × 5★)
      you can honestly add aggregate rating to the `HousePainter` schema.
- [ ] **Apple touch icon** — favicon is inline SVG (fine everywhere except older
      iOS); add a 180×180 `apple-touch-icon.png` so iOS home-screen bookmarks look right.
- [ ] **Simple privacy policy** — the form collects name/email/phone; a short
      POPIA-flavoured privacy statement on the page (or footer link) is needed.
- [ ] **FormSubmit `_next`** — add a hidden `_next` field pointing at a
      thank-you page so users get a confirmation screen instead of FormSubmit's.

## 📈 Nice to have
- [ ] More gallery photos — only 4 now; aim for 8–12 real project shots
      (before/after pairs work best). Compress, descriptive alt text.
- [ ] Add each new photo to the lightbox `data-full` correctly (see README).
- [ ] Analytics (privacy-friendly, e.g. Plausible) — add alongside a cookie notice.
- [ ] Consider a Service Areas tweak: reviews mention cottages/two properties —
      could add a "Holiday home & rental upkeep" service card if Abel offers it.
- [ ] Commit `ToDo.md` to git (currently untracked).

## Notes
- Reviews were copied from Google "18 weeks ago" — refresh the copy on the site
  if newer reviews arrive, and keep wording verbatim apart from spelling.
- Phone/email/address appear in several places; see README "Phone number,
  email, address" table before changing anything.
